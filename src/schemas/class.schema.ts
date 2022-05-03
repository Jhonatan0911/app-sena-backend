import { Schema } from 'mongoose';
export const ClassSchema = new Schema({
    data:{},
    status: Boolean,
    date: Date
});