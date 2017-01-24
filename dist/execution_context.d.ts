import { TokenType } from './interfaces';
export declare class ExecutionContext {
    token: any;
    tokenType: TokenType;
    encryptedToken: any;
    constructor(decodedToken: any, tokenType: TokenType, encryptedToken: any);
    readonly isGuest: boolean;
}
