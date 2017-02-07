import { ExecutionContext, TokenType, IEntity, ITokenData, ISessionStoreData } from '@process-engine-js/core_contracts';
export interface IUserEntity extends IEntity {
    name: string;
    password: string;
    roles: Array<string>;
}
export interface ISessionStoreEntity extends IEntity {
    identityId: string;
    systemUserId: string;
    data: any;
}
export interface ITokenAdapter {
    tokenType: TokenType;
    encode(payload: ITokenData): Promise<string>;
    decode(token: string): Promise<ITokenData>;
}
export interface IAuthService {
    authenticateByUsername(username: string, password: string, userNamespace: string, context: ExecutionContext): Promise<IIdentity>;
    authenticateBySystemUser(token: string, context: ExecutionContext): Promise<IIdentity>;
    getIdentity(id: string, isSystemUser: boolean, userNamespace: string, context: ExecutionContext): Promise<IIdentity>;
}
export interface ITokenService {
    initialize(): void;
    encode(payload: ITokenData, tokenType: TokenType): Promise<string>;
    decode(token: string, tokenType: TokenType): Promise<ITokenData>;
    createSessionStoreEntity(context: ExecutionContext, sessionStoreData: ISessionStoreData): Promise<ISessionStoreEntity>;
    getSessionStoreEntity(context: ExecutionContext, sessionStoreId: string): Promise<ISessionStoreEntity>;
    revokeSession(context: ExecutionContext, sessionStoreId: string): Promise<boolean>;
}
export interface IIamService {
    authenticateByUsername(username: string, password: string, userNamespace: string, tokenType?: TokenType): Promise<string>;
    authenticateBySystemUser(systemUser: string, tokenType?: TokenType): Promise<string>;
    createInternalContext(systemUser: string, tokenType?: TokenType): Promise<ExecutionContext>;
    resolveExecutionContext(encodedToken: string, tokenType?: TokenType): Promise<ExecutionContext>;
    hasClaim(context: ExecutionContext, claim: string, systemRoles?: any): Promise<boolean>;
    getIdentity(context: ExecutionContext, userNamespace: string): Promise<IIdentity>;
    logout(context: ExecutionContext): Promise<boolean>;
    initialize(): void;
}
export interface IClaimService {
    hasClaim(identity: IIdentity, claim: string, systemRoles?: any): Promise<boolean>;
    initialize(): void;
}
export interface IIdentity {
    id: string;
    roles: Array<string>;
}
export interface IIdentityService {
    authenticate(context: ExecutionContext, userNamespace: string, username: string, password: string): Promise<IIdentity>;
    getIdentity(context: ExecutionContext, userNamespace: string, userId: string): Promise<IIdentity>;
}
