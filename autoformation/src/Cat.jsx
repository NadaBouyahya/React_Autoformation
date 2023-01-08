 function Cat(props){
    return (
        <>
        <h1>I have a {props.color.type} Cat</h1>
        <h3>her name is {props.name.name}</h3>
        </>


    )
}

export default function CatDetails(props){
    const CatInfo = {name: "baguera", type: "black"}

    return (
        <Cat color={CatInfo} name={CatInfo}/>
    )
}


// let color = ['white', 'black', 'orange'];

// export default function List() {

//     return (
//         <ul>
//             {
//             color.map(item => 
//                 <li>this is a {item} Cat </li>
//             )}
            
//         </ul>

//     )
// }