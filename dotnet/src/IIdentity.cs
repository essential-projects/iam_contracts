namespace EssentialProjects.IAM.Contracts
{
    public interface IIdentity
    {
         string userId { get; }
         string token { get; }
    }
}