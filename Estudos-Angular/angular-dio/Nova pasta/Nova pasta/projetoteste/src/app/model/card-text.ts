import { Card } from "./card";

export class CardText implements Card{
    id!: string;
    segment!: string;
    title!: string;
    type!: string;
    createAt!: string;
    updateAt!: string;
    content!: string;
}