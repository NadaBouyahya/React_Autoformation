import { useState } from "react";



function Menu() {
    const [expand, setExpand] = useState(false)
    const toggleExpand = () => setExpand(previousExpand => !previousExpand);
    // console.log(expand);

    return (
        <div>
            <button onClick={toggleExpand}>Menu <span>+</span></button>
            {expand && <div>hello world</div>}
        </div>

    )
}

export default Menu;