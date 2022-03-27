public interface IMemberRepository {
    public IEnumerable<Member> GetMembers();
    public Member GetMember(Guid id);
    public void CreateMember(Member member);
    public void DeleteMember(Guid id);
    public void UpdateMember(Member member);

}