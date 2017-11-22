import {ITokenData, TokenType} from '@essential-projects/core_contracts';

export interface ITokenAdapter {
  tokenType: TokenType;
  encode(payload: ITokenData): Promise<string>;
  decode(token: string): Promise<ITokenData>;
}
