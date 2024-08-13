import { randomUUID } from "crypto";
import { Tweet } from "./tweet";
import { User } from "./user";

export class Like {
  private id: string = randomUUID();

  //https://www.tutorialsteacher.com/typescript/typescript-readonly

  constructor(private readonly _from: User, private readonly _tweet: Tweet) {}

  public get from(): User {
    return this._from;
  }

  public get tweet(): Tweet {
    return this._tweet;
  }
}
