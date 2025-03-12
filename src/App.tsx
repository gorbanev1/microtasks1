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
    let[a,setA]=useState(1)

    const onClickHandler=()=>{
        setA(++a)
        console.log(a)
    }
    const onClickHandler2=()=>{
        setA(0)
    }

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    return (<>
            <NewComponent students={students}/>
            <Button callBack={()=>{button1Foo("hui", 2)}} name={"hui"}/>
            <Button callBack={()=> {
                button2Foo("hhhh")
            }} name={"pizda"}/>
            <button onClick={(event) => myFirstSubscriber("daDAD")}>Button</button>
            <h1>{a}</h1>
            <Button callBack={onClickHandler} name={"adssdas"}>adasd</Button>
            <Button callBack={onClickHandler2} name={"adssdas"}>0</Button>

            <ul>
                {money.map((objFromMoneyArr) => {
                    return(
                        <li>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

        </>
    );
}


export default App
