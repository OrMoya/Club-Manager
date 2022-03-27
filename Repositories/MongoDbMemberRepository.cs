
using MongoDB.Bson;
using MongoDB.Driver;

public class MongoDbMemberRepository : IMemberRepository
{
    private const string databaseName = "roster";
    private const string collectionName = "members";
    private readonly IMongoCollection<Member> memberCollection;
    public MongoDbMemberRepository(IMongoClient mongoClient){
        IMongoDatabase database = mongoClient.GetDatabase(databaseName);
        memberCollection  = database.GetCollection<Member>(collectionName);
    }

    public void CreateMember(Member member)
    {
        memberCollection.InsertOne(member);
    }

    public void DeleteMember(Guid id)
    {
        memberCollection.DeleteOne(member => member.Id == id);
    }

    public Member GetMember(Guid id) 
    {
        return memberCollection.Find(member => member.Id == id).FirstOrDefault();
    }

    public IEnumerable<Member> GetMembers()
    {
        return memberCollection.Find(new BsonDocument()).ToList();
    }

    public void UpdateMember(Member member)
    {
        memberCollection.FindOneAndReplace(existingMember => existingMember.Id == member.Id, member);
    }
}