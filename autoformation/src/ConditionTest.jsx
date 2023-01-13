function FailTest(){
    return <h1>test failed</h1>
}

function PassTest() {
    return <h1>test successed</h1>
}

export default function ConditionTest(props){
    const test = props.test

    if(test) {
        return <PassTest></PassTest>
    }

    return <FailTest></FailTest>
}