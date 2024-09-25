import {useState} from "react";
import Item from "./Item";

function PackingList({items, onHandleCheck, onHandleClear, onDeleteItem}) {
    const [sort, setSort] = useState('input')

    let sortedItem;

    if(sort === 'input') sortedItem = items.slice().sort((a, b) => a.id - b.id)

    if (sort === 'description') sortedItem = items.sort((a, b) => a.description.localeCompare(b.description))

    if (sort === 'packed') sortedItem = items.sort((a, b) => Number(a.packed) - Number(b.packed))

    return (<div className={'list'}>
        <ul>
            {sortedItem.map((item) => <Item onDeleteItem={onDeleteItem} handleCheckfn={onHandleCheck} key={item.id}
                                            item={item}/>)}
        </ul>


        <div className="actions">
            <select onChange={(e) => setSort(e.target.value)} value={sort}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
            <button className="" onClick={onHandleClear}>
                Clear List
            </button>
        </div>
    </div>)
}

export default PackingList;