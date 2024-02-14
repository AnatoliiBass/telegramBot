import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
        
    }
    handle(): void {
        this.bot.start((ctx) => {
            console.log("Bot starts: ", ctx.session);
            ctx.reply("Do you like the course?", Markup.inlineKeyboard([
                Markup.button.callback("Like", "course_like"),
                Markup.button.callback("Dislike", "course_dislike")
            ]));
        });
        this.bot.action("course_like", (ctx) => {
            ctx.session.courseLiked = true;
            ctx.editMessageText("It is cool!");
        });
        this.bot.action("course_dislike", (ctx) => {
            ctx.session.courseLiked = false;
            ctx.editMessageText("It is bad!");
        });
    }
}