using System.Net.Mail;

public record UpdateMemberDto{
    public String FullName { get; init; }
    public String Email { get; init; }
    public bool Status { get; init; }

}