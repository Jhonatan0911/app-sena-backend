import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Array } from '../interfaces/array';
import { Model } from 'mongoose';
import { CreateDto } from '../dtos/dto.dto';

@Injectable()
export class ClassService {
  constructor(@InjectModel('Class') private Model: Model<Array>) { }

  async getAll() {
    return await this.Model.find();
  }

  async get(_id: string) {
    return await this.Model.findById(_id);
  }

  async getUserFicha(uid: string) {
    return await this.Model.find({
      "data.user._id": uid
    });;
  }

  async create(user: CreateDto) {
    const usuario = await this.Model.findOne({
      "data.ficha": user.data.ficha
    });

    if (usuario) {
      throw new NotFoundException("Esta ficha ya está siendo utilizada");
    } else {
      user.date = new Date();
      user.status = true;
      const newClass = new this.Model(user);
      return await newClass.save();
    }

  }

  async update(id: string, payload: any) {
    return await this.Model
      .findByIdAndUpdate(id, payload)
      .setOptions({ overwrite: false, new: true });
  }

  async remove(id): Promise<any> {
    return await this.Model.findByIdAndRemove(id);
  }

}