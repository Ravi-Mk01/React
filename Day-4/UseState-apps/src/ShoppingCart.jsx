
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000
    }
];

function ShoppingCart() {

    const [cart, addCart] = useState([]);

    const bill = () => {
        let total = 0;

        cart.map(item => {
            total = total + item.price;
        });

        return total;
    };

    return (

        <div
            style={{
                width: "500px",
                margin: "40px auto",
                padding: "20px",
                fontFamily: "Arial"
            }}
        >

            <h1 style={{ textAlign: "center" }}>
                Shopping Cart
            </h1>


            {/* Products */}

            <h2>Products</h2>

            <ul style={{ padding: 0 }}>

                {products.map((product) => {

                    return (
                        <li
                            key={product.id}
                            style={{
                                listStyle: "none",
                                padding: "12px",
                                marginBottom: "10px",
                                border: "1px solid #ccc",
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >

                            <span>
                                {product.name} - ₹{product.price}
                            </span>

                            <button
                                onClick={() => {
                                    addCart([...cart, product]);
                                }}
                            >
                                Add
                            </button>

                        </li>
                    );

                })}

            </ul>


            {/* Cart */}

            <h2>My Cart</h2>

            <ul style={{ padding: 0 }}>

                {cart.map((c, index) => {

                    return (
                        <li
                            key={index}
                            style={{
                                listStyle: "none",
                                padding: "12px",
                                marginBottom: "10px",
                                border: "1px solid #ccc",
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >

                            <span>
                                {c.name} - ₹{c.price}
                            </span>

                            <button
                                onClick={() => {
                                    addCart(
                                        cart.filter(
                                            (_, i) => i !== index
                                        )
                                    );
                                }}
                            >
                                Remove
                            </button>

                        </li>
                    );

                })}

            </ul>


            {/* Bill */}

            <button
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "15px"
                }}
                onClick={() => {
                    alert("Total Bill = ₹" + bill());
                }}
            >
                Generate Bill
            </button>

        </div>
    );
}

export default ShoppingCart
