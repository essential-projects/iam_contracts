namespace EssentialProjects.IAM.Contracts
{
    using EssentialProjects.IAM.Contracts;

  public class Identity : IIdentity
  {
    public string userId { get; set; }

    public string token { get; set; }
  }
}