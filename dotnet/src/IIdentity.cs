namespace EssentialProjects.IAM.Contracts
{
  public interface IIdentity
  {
    string UserId { get; }
    string Token { get; }
  }
}
