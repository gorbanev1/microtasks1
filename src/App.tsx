import {useState, MouseEvent} from 'react'
import {NewComponent} from "./components/NewComponent";
import './App.css'
import {Button} from "./components/Button";

function App() {
    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )

    const myFirstSubscriber = (name: string) => {
        console.log(name)
    }
    const button1Foo=(subscriber:string, age:number)=>{
        console.log(subscriber, age)

    }
    const button2Foo=(subscriber:string)=>{
        console.log(subscriber)

    }
    return (<>
            <NewComponent students={students}/>
            <Button callBack={()=>{button1Foo("hui", 2)}} name={"hui"}/>
            <Button callBack={()=> {
                button2Foo("hhhh")
            }} name={"pizda"}/>
            <button onClick={(event) => myFirstSubscriber("daDAD")}>Button</button>
        </>
    );
}


export default App
