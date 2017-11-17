import {Claim, HasClaim} from './type_aliases';

export interface IClaimService {
  hasClaim(roles: Array<string>, claim: Claim, namespace?: string): HasClaim;
}
