export interface IIAMConfiguration {
  ClientId: string;
  ClientSecret: string;
  IntrospectPath: string;
  claimPath?: string;
  localStoragePrefix: string;
}
