import { ExecutionContext, TokenType, IEntity, ITokenData } from '@process-engine-js/core_contracts';
export interface ITokenAdapter {
    tokenType: TokenType;
    createToken(payload: ITokenData): Promise<string>;
    decode(token: string): Promise<ITokenData>;
}
export interface IAuthService {
    authenticateByUsername(username: string, password: string): Promise<IIdentity>;
    authenticateByUserToken(token: string): Promise<string>;
    getIdentity(context: ExecutionContext): Promise<IIdentity>;
    logout(context: ExecutionContext): Promise<boolean>;
}
export interface ITokenService {
    initialize(): void;
    encode(payload: any, tokenType: TokenType): Promise<string>;
    decode(token: string, tokenType: TokenType): Promise<any>;
    createTokenEntity(context: ExecutionContext, tokenData: any): Promise<ITokenEntity>;
    getTokenEntity(context: ExecutionContext, tokenId: string): Promise<ITokenEntity>;
    revokeToken(context: ExecutionContext, tokenId: string): Promise<boolean>;
}
export interface ITokenEntity extends IEntity {
}
export interface IIamService {
    authenticateByUsername(username: string, password: string, tokenType?: TokenType): Promise<string>;
    authenticateByUserToken(userToken: string, tokenType?: TokenType): Promise<string>;
    createInternalContext(userToken: string, tokenType?: TokenType): Promise<ExecutionContext>;
    resolveExecutionContext(encodedToken: string, tokenType?: TokenType): Promise<ExecutionContext>;
    hasClaim(context: ExecutionContext, claim: string, systemRoles?: any): Promise<boolean>;
    getIdentity(context: ExecutionContext): Promise<IIdentity>;
    initialize(): void;
}
export interface IClaimService {
    hasClaim(context: ExecutionContext, claim: string, systemRoles?: any): Promise<boolean>;
    initialize(): void;
}
export interface IIdentity {
    id: string;
}
