export class Comment {

  constructor(private _text: string,
              private _created_on: string,
              private _user: object) {
  }

  get text(): string {
    return this._text;
  }

  get created_on(): string {
    return this._created_on;
  }

  get user(): Object {
    return this._user;
  }
}

