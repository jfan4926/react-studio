import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addItem(name,price){
    setCartItem([...cartItem, {name: name, price: price}]);
    setTotalPrice(totalPrice + price);

  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className = "content">
        <div className="bakeryItems">
          {bakeryData.map((item,index) => ( // TODO: map bakeryData to BakeryItem components
            //<p>Bakery Item {index}</p> // replace with BakeryItem component
            <BakeryItem 
              name ={item.name} 
              info = {item.info}
              price={item.price} 
              image={item.image} 
              addItem={addItem}></BakeryItem>
          ))}

        </div>
          <div className="cart">
          <h2>Cart</h2>
          {cartItem.map((item) => 
            <li key={item.name}>{item.name + " - " + item.price}</li>)}
          <p><b>Total:</b> ${totalPrice}</p>
        </div>

      </div> 

    </div>
  );
}

export default App;
