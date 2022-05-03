import { Document } from 'mongoose';
export interface Array extends Document {
    data: {},
    status: boolean,
    date: Date
}