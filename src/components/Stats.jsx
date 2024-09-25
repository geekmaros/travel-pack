function Stats({items}) {
    if (!items.length) return <footer className={'stats'}>No items added yet</footer>
    const itemsTotal = items.length

    const totalPackedItems = items.filter((item) => item.packed).length

    const totalPercentagePacked = Math.round((totalPackedItems / itemsTotal) * 100)

    return (
        <footer className={'stats'}>
            <em>{`You have ${itemsTotal} items on your list and you already packed ${totalPackedItems} (${totalPercentagePacked}%)`}</em>
        </footer>
    )
}


export  default Stats;