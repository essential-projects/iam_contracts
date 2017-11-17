import { ExecutionContext, IIdentity, IUserEntity} from '@essential-projects/core_contracts';

export interface IAuthService {
  authenticateByUsername(username: string, password: string, context: ExecutionContext): Promise<IIdentity>;
  authenticateBySystemUser(token: string, context: ExecutionContext): Promise<IIdentity>;
  getIdentity(id: string, isSystemUser: boolean, context: ExecutionContext): Promise<IIdentity>;
  getIdentityEntity(id: string, isSystemUser: boolean, context: ExecutionContext): Promise<IUserEntity>;
  flattenRoles(roles: Array<string>): Array<string>;
  getTemporaryIdentityEntity(identity: IIdentity, context: ExecutionContext): Promise<IUserEntity>;
}
