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

  set id(value: string) {
    this._id = value;
  }

  get uri(): string {
    return this._uri;
  }

  set uri(value: string) {
    this._uri = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }
}

