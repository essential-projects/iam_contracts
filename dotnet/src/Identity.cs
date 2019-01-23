namespace EssentialProjects.IAM.Contracts
{
  using EssentialProjects.IAM.Contracts;

  public class Identity : IIdentity
  {
    public string UserId { get; set; }

    public string Token { get; set; }
  }
}
