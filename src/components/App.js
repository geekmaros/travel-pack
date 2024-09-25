import logo from '../logo.svg';
import '../App.css';
import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form.jsx";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: true},
    {id: 2, description: "Socks", quantity: 12, packed: false},
    {id: 3, description: "Charger", quantity: 1, packed: false},
];

function App() {
    const [items, setItems] = useState([])


    // the below is a derived state


    function handleItems(item) {
        setItems(items => [...items, item])
    }

    function handleClearList() {
        const confirm = window.confirm('Are you sure you want to clear the list?')
        if(confirm) setItems(items => [])
    }

    const handleCheck = (id) => {
        // e.preventDefault()
        // const newItems = items.map((item) => {
        //     if(item.id === id){
        //         return {...item, packed: !item.packed}
        //     }
        //     return item
        // })

        //we can rewrite the above code using the below code

        setItems(items => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
    }
    const handleDeleteItem = (id) => {
        setItems((items) => items.filter((item) => item.id !== id))
    }

    return (
        <div className="app">
            <Logo/>
            <Form onAddItems={handleItems}/>
            <PackingList onDeleteItem={handleDeleteItem} onHandleClear={handleClearList} onHandleCheck={handleCheck} items={items}/>
            <Stats items={items}/>

        </div>
    );
}

export default App;
