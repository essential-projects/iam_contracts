import {Claim, HasClaim} from './constants';

export interface IClaimService {
  hasClaim(roles: Array<string>, claim: Claim, namespace?: string): HasClaim;
}
