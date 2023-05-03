import { createContext, useState } from "react";

export const CardsContext = createContext();

function CardsProvider(props) {
    const [cards,setCards] = useState(
        [
            {
                id: 1,
                cardname: "Albali",
                price: 12,
            },
            {
                id: 2,
                cardname: "Platinium",
                price: 15,
            },
            {
                id: 3,
                cardname: "Visa Infinity",
                price: 17,
            }
        ]
    )

    const [cartProducts,setCartProducts] = useState([]);
    const addCartProduct = product => setCartProducts([...cartProducts,product]);
    const deleteCartProduct = id => setCartProducts([...cartProducts.filter(item=>item.id !==id)]);
    const increaseCardProduct = (id,count) => setCartProducts([
        ...cartProducts.map(item=> {
            if(item.id === id){
                item.count++;
            }
            return item;
        })
    ])
    const decreaseCardProduct = (id,count) => setCartProducts([
        ...cartProducts.map(item=> {
            if(item.id === id){
                if(item.count > 0)
                --item.count;
            }
            return item;
        })
    ])
    return (
        <CardsContext.Provider value={
            {   
                cards,
                addCartProduct,
                deleteCartProduct,
                increaseCardProduct,
                decreaseCardProduct
            }}>
            {props.children}
        </CardsContext.Provider>
    )
}

export default CardsProvider