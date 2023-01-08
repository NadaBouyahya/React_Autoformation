function Student(props) {
    return <li>{props.name} from {props.group}</li>

}


export default function Group() {
    const groups = [
        { id: 1, name: 'Zobir', group: 'cyber gang' },
        { id: 2, name: 'Hicham', group: 'Code Campers' },
        { id: 3, name: 'Fatima', group: 'cyber gang' },
        { id: 4, name: 'Ihsan', group: 'Code Campers' }
    ]

    return (
        <>
            <h1>Students: </h1>
            <ul>
                {groups.map( (student) => <Student key={student.id} name={student.name} group={student.group}/>)}
            </ul>
        </>
    )
}
