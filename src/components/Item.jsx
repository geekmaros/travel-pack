function Item({item, handleCheckfn, onDeleteItem}) {

    return <li key={item.id}> <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {" "} <input onChange={() => handleCheckfn(item.id)} type="checkbox"
                     value={item.packed}/> {item.quantity} {item.description}</span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
}

export default Item;