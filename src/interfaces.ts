import { ExecutionContext, IEntity, IIamService, IIdentity, ISessionStoreData, ITokenData, IToPojoOptions, IUserEntity, TokenType } from '@process-engine-js/core_contracts';

export type Claim = string;
export type HasClaim = boolean;

export interface ISessionStoreEntity extends IEntity {
  identityId: string;
  systemUserId: string;
  data: any;
}

export interface IIdentityService {
  authenticate(context: ExecutionContext, username: string, password: string): Promise<IIdentity>;
  getIdentity(context: ExecutionContext, userId: string): Promise<IIdentity>;
  getIdentityEntity(context: ExecutionContext, userId: string): Promise<IUserEntity>;
  getTemporaryIdentityEntity(context: ExecutionContext, identity: IIdentity): Promise<IUserEntity>;
}

export interface ITokenAdapter {
  tokenType: TokenType;
  encode(payload: ITokenData): Promise<string>;
  decode(token: string): Promise<ITokenData>;
}

export interface IAuthService {
  authenticateByUsername(username: string, password: string, context: ExecutionContext): Promise<IIdentity>;
  authenticateBySystemUser(token: string, context: ExecutionContext): Promise<IIdentity>;
  getIdentity(id: string, isSystemUser: boolean, context: ExecutionContext): Promise<IIdentity>;
  getIdentityEntity(id: string, isSystemUser: boolean, context: ExecutionContext): Promise<IUserEntity>;
  flattenRoles(roles: Array<string>): Array<string>;
  getTemporaryIdentityEntity(identity: IIdentity, context: ExecutionContext): Promise<IUserEntity>;
}

export interface ITokenService {
  initialize(): void;
  encode(payload: ITokenData, tokenType: TokenType): Promise<string>;
  decode(token: string, tokenType: TokenType): Promise<ITokenData>;
  createSessionStoreEntity(context: ExecutionContext, sessionStoreData: ISessionStoreData): Promise<ISessionStoreEntity>;
  getSessionStoreEntity(context: ExecutionContext, sessionStoreId: string): Promise<ISessionStoreEntity>;
  revokeSession(context: ExecutionContext, sessionStoreId: string): Promise<boolean>;
}

export interface IClaimService {
  hasClaim(roles: Array<string>, claim: Claim, namespace?: string): HasClaim;
}
