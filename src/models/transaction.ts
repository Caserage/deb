import mongoose, { Schema, Document, Types } from "mongoose";
import { IAccount } from "./account";

export interface ITransaction extends Document {
    _id: Types.ObjectId;
    created: number;
    modified: number;
    date: number;
    accountDebited: [IAccount["_id"]];
    accountCredited: [IAccount["_id"]];
    amount: number;
};

const schema = new Schema({
    _id: { type: Types.ObjectId, unique: true },
    created: Number,
    modified: Number,
    date: Number,
    accountDebited: [{ type: Types.ObjectId, ref: "Account" }],
    accountCredited: [{ type: Types.ObjectId, ref: "Account" }],
    amount: Number
});

export const Transaction = mongoose.model<ITransaction>("Transaction", schema);