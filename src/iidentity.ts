/**
 * Contains information about an identity.
 */
export interface IIdentity {
  /**
   * The ID of the user to which this identiy belongs.
   */
  userId: string;
  /**
   * The AuthToken connected to this identity.
   */
  token: string;
}
