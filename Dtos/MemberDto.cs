using System.Net.Mail;

public record MemberDto{
    public Guid Id { get; init; }
    public String Name { get; init; }
    public String Email { get; init; }
    public bool Status { get; init; }
    public DateTime JoinDate { get; init; }

}