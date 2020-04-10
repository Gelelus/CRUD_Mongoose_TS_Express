import { Document } from 'mongoose';

export interface IUserDocument extends Document {
    age: string;
    name: string;
    password: string;
    pets: string[];
    generateAuthToken(): Promise<string>;
}