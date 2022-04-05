public static class Extensions{
    public static MemberDto asDto(this Member member){
        return new MemberDto{
            Id = member.Id,
            FullName = member.FullName,
            Email = member.Email.ToString(),
            Status = member.Status,
            JoinDate = member.JoinDate
        };
    }
}