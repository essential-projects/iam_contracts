import {TokenType, ITokenData} from './interfaces';

export class ExecutionContext {

  public token: any = undefined;
  public tokenType: TokenType = undefined;
  public encryptedToken: any = undefined;

  constructor(decodedToken: any, tokenType: TokenType, encryptedToken: any) {
    this.token = decodedToken;
    this.tokenType = tokenType;
    this.encryptedToken = encryptedToken;
  }

  public get isGuest(): boolean {
    return this.token === undefined;
  }
}
