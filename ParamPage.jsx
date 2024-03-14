import { useParams } from "react-router-dom"
const data = [
    {id:1, name: 'sergi', age: 18},
    {id:2, name: 'nika', age: 20},
    {id:3, name: 'gio', age: 19},
]
const ParamPage = () =>{

    const param = useParams()
    const user = data.find(user => user.id == param.id)
    if(!user){
        return <div>user not found</div>
    }
   return(
    
    <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h2>Param Route (Dynamic)</h2>
    </div>
   )
}
export default ParamPage