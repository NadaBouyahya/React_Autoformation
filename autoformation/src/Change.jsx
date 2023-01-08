export default function Change(){
    const handleChange = (e)=>{
        console.log(e.target.value);
    }
    return(
        <input type="text" onChange={handleChange} />
    )
}