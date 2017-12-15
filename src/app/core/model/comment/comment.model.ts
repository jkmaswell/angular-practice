export class Comment {

  constructor(private _text: string,
              private _created_on: string,
              private _user: object) {
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get user(): Object {
    return this._user;
  }

  set user(value: Object) {
    this._user = value;
  }

}

