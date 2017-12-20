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

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get embed(): SafeHtml {
    return this._embed;
  }

  set embed(value: SafeHtml) {
    this._embed = value;
  }

  get stats(): Object {
    return this._stats;
  }

  set stats(value: Object) {
    this._stats = value;
  }

  get metadata(): Object {
    return this._metadata;
  }

  set metadata(value: Object) {
    this._metadata = value;
  }

  get user(): Object {
    return this._user;
  }

  set user(value: Object) {
    this._user = value;
  }

  get release_time(): string {
    return this._release_time;
  }

  set release_time(value: string) {
    this._release_time = value;
  }

  get uri(): string {
    return this._uri;
  }

  set uri(value: string) {
    this._uri = value;
  }

  get pictures(): Object {
    return this._pictures;
  }

  set pictures(value: Object) {
    this._pictures = value;
  }
}

