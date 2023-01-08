export default function Click() {

    const handleClick = (e) => {
        alert(e.target.value)
    }

    return (
        <button value="Hello World" onClick={handleClick}>Click here</button>
    )


    // const SayHello = (name) => {
    //     alert(`Hello, ${name}!`)
    // }


    // return (
    //     <button onClick={() => {
    //         SayHello('nada')
    //     }}
    //     >
    //         Say hello
    //     </button>
    // )
    // const ShowAlert = (e)=>{
    //     e.preventDefault();
    //     alert("you clicked the button");
    //   }

    //   return (
    //     <>
    //     <button onClick={ShowAlert}>Click here</button>
    //     </>
    //   )


}