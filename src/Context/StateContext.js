import React, { createContext, useState, } from 'react';


const Context = createContext();

export function StateContext ({ children }) {

    // Cart State
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    // Header Menu Stat
    const [showMenu, setShowMenu] = useState(false)
    // Slider State
    const [currentSlide, setCurrentSlide] = useState(0)
    // PopularProduct State
    const [movies, setMovies] = useState([])
    // Upcoming Products State
    const [upcoming, setUpcoming] = useState([])
    // Product Page State
    const [movie, setMovie] = useState()
    // IncQty and DecQty State in Product Page
    const [qty, setQty] = useState(1)
    // Recommendations State
    const [recomm, setRecomm] = useState([])

    let foundProduct;

    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    
    const decreaseQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1
    
            return prevQty - 1
        }
    )}

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item.id_id === product._id)
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
        if(checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity
            }
        })
    
        setCartItems(updatedCartItems)

        } else {
            product.quantity = quantity
    
            setCartItems([...cartItems, {...product}])
        }
    
        alert(`${qty} ${movie.title} added to the cart.`)
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)
    }


    return (
        <Context.Provider value={{
            showMenu, setShowMenu, showCart, setShowCart, cartItems, setCartItems, totalPrice, setTotalPrice, totalQuantities, setTotalQuantities, currentSlide, setCurrentSlide, movies, setMovies, upcoming, setUpcoming, movie, setMovie, qty, increaseQty, decreaseQty, onAdd, onRemove, recomm, setRecomm }}>
            {children}
        </Context.Provider>
    );
}

export default Context;