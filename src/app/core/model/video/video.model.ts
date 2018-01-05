import {SafeHtml} from '@angular/platform-browser';

export class Video {
  private _id: string;

  constructor(private _name: string,
              private _description: string,
              private _embed: SafeHtml,
              private _stats: object,
              private _metadata: object,
              private _user: object,
              private _release_time: string,
              private _uri: string,
              private _pictures: object) {

    this._id = _uri.split('/').pop();
  }

  get id() {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get embed(): SafeHtml {
    return this._embed;
  }

  get stats(): Object {
    return this._stats;
  }

  get metadata(): Object {
    return this._metadata;
  }

  get user(): Object {
    return this._user;
  }

  get release_time(): string {
    return this._release_time;
  }

  get uri(): string {
    return this._uri;
  }

  get pictures(): Object {
    return this._pictures;
  }
}

