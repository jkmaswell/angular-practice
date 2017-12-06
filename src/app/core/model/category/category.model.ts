export class Categories {
  private _id: string;

  constructor(private _uri: string,
              private _name: string,
              private _link: string) {

    this._id = _uri.split('/').pop();

  }

  get id() {
    return this._id;
  }

  get uri() {
    return this._uri;
  }

  get name() {
    return this._name;
  }

  get link() {
    return this._link;
  }
}

export class CategoryVideos {
  private _id: string;

  constructor(private _uri: string,
              private _name: string,
              private _description: string,
              private _pictures: object) {

    this
      ._id = _uri.split('/').pop();

  }

  get id() {
    return this._id;
  }

  get uri() {
    return this._uri;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get pictures() {
    return this._pictures;
  }
}
