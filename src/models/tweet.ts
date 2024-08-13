import { randomUUID } from "crypto";
import { likes } from "../databases/like";
import { User } from "./user";
import { Like } from "./like";

export type Type = "Normal" | "Reply";

export class Tweet {
  private _id: string = randomUUID();
  private _likes: Like[] = [];
  private _replies: Tweet[] = [];

  constructor(
    private _content: string,
    private _type: Type,
    private _user: User
  ) {}

  public get id(): string {
    return this._id;
  }

  public get likes(): Like[] {
    return this._likes;
  }

  public get content(): string {
    return this._content;
  }

  public get type(): Type {
    return this._type;
  }

  public get user(): User {
    return this._user;
  }

  public reply(content: string, user: User) {
    const replyTweet = new Tweet(content, "Reply", user);
    this._replies.push(replyTweet);
  }

  public like(user: User): void {
    const newLike = new Like(user, this);
    likes.push(newLike);
    this._likes.push(newLike);
  }

  public show(tweet: Tweet, followers: User[]): void {
    this.showTweet(tweet);
    followers.forEach((follower) => {
      follower.tweets.forEach((tweetsFollowers) => {
        this.showTweet(tweetsFollowers);
      });
    });
  }

  private showTweet(tweet: Tweet): void {
    const counter = tweet.likes.length;
    const whoLiked =
      tweet.likes.length > 0
        ? tweet.likes[tweet.likes.length - 1].from.username
        : "";

    console.log(
      this.formattedTweets(
        tweet.user.username,
        tweet.content,
        whoLiked,
        counter
      ),
      this.showReplies(tweet),
      "\n--------------------------------------------"
    );
  }

  private formattedTweets(
    username: string,
    content: string,
    whoLiked: string,
    likeAccountTweet: number
  ): string {
    let likesFormatted =
      likeAccountTweet > 0
        ? `@${whoLiked} e outros ${
            likeAccountTweet - 1
          } usuários gostaram disso`
        : "";

    return `\n@${username}: ${content}\n${likesFormatted}`;
  }

  private showReplies(tweet: Tweet): string {
    let replyFormatted = "";
    this._replies.forEach((reply) => {
      replyFormatted += `  > @${reply.user.username}: ${reply.content}\n `;
    });
    return replyFormatted;
  }
}
