import ProfileCard from "./ProfileCard"

const data = [{_id:1,name:'Akhil Anwer M',gmail:'akhilanwerm@gmail.com'},{_id:2,name:'Adhil Anwer',gmail:'adhilanwerm@gmail.com'}]


export default function App() {
  return (
    <div className="App">
      {data.map((property)=>(<ProfileCard key={property._id} name={property.name} gmail={property.gmail}/>))}
    </div>
  )
}