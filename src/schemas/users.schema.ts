import { Schema } from 'mongoose';
export const UsersSchema = new Schema({
    data:{},
    status: Boolean,
    date: Date
});