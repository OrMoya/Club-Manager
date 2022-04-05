using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("members")]
public class MemberController : ControllerBase{
    private readonly IMemberRepository repository;

    public MemberController(IMemberRepository repository){
        this.repository = repository;
    }

    [HttpGet]
    public IEnumerable<MemberDto> GetMembers(){
        var members = new List<MemberDto>();

        foreach(var member in repository.GetMembers()){
            members.Add(member.asDto());
        }
        
        return members;
    }

    [HttpGet("{id}")]
    public ActionResult<MemberDto> GetMember(Guid id){
        var member = repository.GetMember(id);

        if(member is null)
            return NotFound();

        return member.asDto();
    }
    
    [HttpPost]
    public ActionResult<CreateMemberDto> CreateMember(CreateMemberDto memberDto){
        Member member = new(){
            Id = Guid.NewGuid(),
            FullName = memberDto.FullName,
            Email = new MailAddress(memberDto.Email), 
            Status = memberDto.Status,
            JoinDate = DateTime.UtcNow
        };
        repository.CreateMember(member);

        return CreatedAtAction(nameof(GetMember), new {id = member.Id}, member.asDto());
    }

    [HttpPut("{id}")]
    public ActionResult<UpdateMemberDto> UpdateMember(Guid id, UpdateMemberDto memberDto){
        var existingMember = repository.GetMember(id);

        if(existingMember is null)
            return NotFound();

        var updatedMember = existingMember with {
            FullName = memberDto.FullName,
            Email = new MailAddress(memberDto.Email),
            Status = memberDto.Status
        };

        repository.UpdateMember(updatedMember);
        
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteMember(Guid id){

        var existingMember = repository.GetMember(id);

        if(existingMember is null)
            return NotFound();

        repository.DeleteMember(id);
        return NoContent();
    }
}