using System.Net.Mail;

public record Member{
    public Guid Id { get; init; }
    public String Name { get; init; }
    public MailAddress Email { get; init; }
    public bool Status { get; init; }
    public DateTime JoinDate { get; init; }

}