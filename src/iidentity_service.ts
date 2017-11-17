import {ExecutionContext, IIdentity, IUserEntity} from '@essential-projects/core_contracts';

export interface IIdentityService {
  authenticate(context: ExecutionContext, username: string, password: string): Promise<IIdentity>;
  getIdentity(context: ExecutionContext, userId: string): Promise<IIdentity>;
  getIdentityEntity(context: ExecutionContext, userId: string): Promise<IUserEntity>;
  getTemporaryIdentityEntity(context: ExecutionContext, identity: IIdentity): Promise<IUserEntity>;
}
