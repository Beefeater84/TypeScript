// A type is needed if we can get any value

type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

// We can designate mandatory fields for objects
// export const List = <T extends { id: number }>({items, onClick}: ListProps<T>) => {
export const List = <T extends {}>({items, onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}> {item} </div>
                )
            })}
        </div>
    )
}

const ShowList = () => {
    const SuperHeroes = ['Batman', 'Superman', 'Rick']
    const Numbers = [1,2,3]
    const DetailHeroes = [
        {
            first: "Bruce",
            last: "Wayne"
        },
        {
            first: 'Clark',
            last: "Kent"
        }
    ]

    return (
        <div>
            <List items={SuperHeroes} onClick={(item) => console.log(item)} />
            <List items={Numbers} onClick={(item) => console.log(item)} />
            <List items={DetailHeroes} onClick={(item) => console.log(item)} />
        </div>
    )
}