import { Context } from "telegraf";

export interface SessionData {
    courseLiked: boolean;
}

export interface IBotContext extends Context {
    session: SessionData;
}