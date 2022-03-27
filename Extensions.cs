public static class Extensions{
    public static MemberDto asDto(this Member member){
        return new MemberDto{
            Id = member.Id,
            Name = member.Name,
            Email = member.Email.ToString(),
            Status = member.Status,
            JoinDate = member.JoinDate
        };
    }
}