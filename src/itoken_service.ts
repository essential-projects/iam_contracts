import {ExecutionContext, ISessionStoreData, ITokenData, TokenType} from '@essential-projects/core_contracts';
import {ISessionStoreEntity} from './index';

export interface ITokenService {
  initialize(): void;
  encode(payload: ITokenData, tokenType: TokenType): Promise<string>;
  decode(token: string, tokenType: TokenType): Promise<ITokenData>;
  createSessionStoreEntity(context: ExecutionContext, sessionStoreData: ISessionStoreData): Promise<ISessionStoreEntity>;
  getSessionStoreEntity(context: ExecutionContext, sessionStoreId: string): Promise<ISessionStoreEntity>;
  revokeSession(context: ExecutionContext, sessionStoreId: string): Promise<boolean>;
}
