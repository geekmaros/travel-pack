import {useState} from "react";

function Form({onAddItems}) {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!description) return;

        const newItem = {description, quantity, packed: false, id: Date.now()}

        onAddItems(newItem)

        setDescription('')
        setQuantity(1)
    }

    return <form className={'add-form'} onSubmit={handleSubmit}>
        <h3>What do you need for your Trip?</h3>
        <select onChange={(e) => setQuantity(Number(e.target.value))} value={quantity}>
            {Array.from({length: 20}, (_, i) => i + 1).map((num) => (<option key={num} value={num}>{num}</option>))}
        </select>
        <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder={'items...'}
               value={description}/>
        <button>Add Item</button>
    </form>
}

export default Form;