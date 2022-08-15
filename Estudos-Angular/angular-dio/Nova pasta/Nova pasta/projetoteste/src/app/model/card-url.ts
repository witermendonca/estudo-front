import { Card } from "./card";

export class CardURL implements Card{
    id!: string;
    segment!: string;
    title!: string;
    type!: string;
    createAt!: string;
    updateAt!: string;
    url!: string;
}