// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
    const name = props.name;
    const image = props.image;
    const info = props.info;
    const price = props.price;

    return(
        <div className="items">
            <h3>{name}</h3>
            <p>{info}</p>
            <p>${price}</p>
            <button onClick={() => props.addItem(name, price)}>Add To Cart</button>
            <img src={image}></img>
        </div>
    )
}
