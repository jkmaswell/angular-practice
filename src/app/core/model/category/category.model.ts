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

  get description() {
    return this._description;
  }

  get pictures() {
    return this._pictures;
  }
}

export class CategoryVideo {

  constructor(private _name: string,
              private _description: string,
              private _embed: string,
              private _stats: object,
              private _metadata: object,
              private _user: object,
              private _release_time: string) {
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get embed() {
    return this._embed;
  }

  get stats() {
    return this._stats;
  }

  get metadata() {
    return this._metadata;
  }

  get user() {
    return this._user;
  }

  get release_time() {
    return this._release_time;
  }
}

