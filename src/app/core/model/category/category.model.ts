export class Category {

  private _id: string;

  constructor(private _uri: string,
              private _name: string,
              private _link: string) {

    this._id = _uri.split('/').pop();

  }

  get id() {
    return this._id;
  }

  get uri(): string {
    return this._uri;
  }

  get name(): string {
    return this._name;
  }

  get link(): string {
    return this._link;
  }
}

