using System.Net.Mail;

public record CreateMemberDto{
    public String FullName { get; init; }
    public String Email { get; init; }
    public bool Status { get; init; }

}