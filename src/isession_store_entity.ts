import {IEntity} from '@essential-projects/core_contracts';

export interface ISessionStoreEntity extends IEntity {
  identityId: string;
  systemUserId: string;
  data: any;
}
