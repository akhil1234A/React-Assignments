import './ProfileCard.css'


function ProfileCard({name,gmail}){
 return(
    <div className="profile_card">
      <h1>{name}</h1>
      <p>{gmail}</p>
    </div>
  );
 
}

export default ProfileCard