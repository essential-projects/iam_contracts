import {IIdentity} from './iidentity';

export class Identity implements IIdentity {
  public token: string;

  constructor(token: string) {
    this.token = token;
  }
}
