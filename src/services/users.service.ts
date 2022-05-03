import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Array } from '../interfaces/array';
import { Model } from 'mongoose';
import { CreateDto } from '../dtos/dto.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private Model: Model<Array>) { }

  async getAll() {
    return await this.Model.find();
  }

  async get(_id: string) {
    return await this.Model.findById(_id);
  }

  async getUserFicha(idClass: string) {
    return await this.Model.find({
      "data.ficha": idClass
    });;
  }

  async create(user: CreateDto) {
    console.log(user)
    const usuario = await this.Model.findOne({
      "data.email": user.data.email
    });

    if (usuario) {
      throw new NotFoundException("Este correo ya está siendo utilizado");
    } else {
      user.date = new Date();
      user.status = true;
      const newUser = new this.Model(user);
      return await newUser.save();
    }

  }

  async login(data: any) {
    const usuario = await this.Model.findOne({
      "data.email": data.email,
      "data.password": data.password
    });
    if (!usuario) {
      throw new NotFoundException("Fallo en las credenciales");
    }
    return usuario
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