
//  import { createContext, useContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { toast } from "react-toastify"; // make sure react-toastify is installed

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartId, setCartId] = useState(localStorage.getItem("cartId") || uuidv4());

//   // Ensure cartId persists
//   useEffect(() => {
//     localStorage.setItem("cartId", cartId);
//   }, [cartId]);

//   // Load cartItems from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("cartItems");
//     if (stored) {
//       try {
//         setCartItems(JSON.parse(stored));
//       } catch {
//         console.warn("Invalid cart in localStorage");
//       }
//     }
//   }, []);

//   // Save cartItems to localStorage & backend
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     if (cartItems.length) {
//       axios.post(`${process.env.REACT_APP_API_URL}/api/cart`, {
//         cartId,
//         items: cartItems.map((i) => ({
//           product: i._id || i.product?._id,
//           quantity: i.quantity,
//           color: i.color,
//         })),
//       }).catch(err => console.error("Error saving cart:", err));
//     }
//   }, [cartItems, cartId]);

//   // Cart actions
//   const addToCart = (product, selectedColor) => {
//     const exists = cartItems.find(
//       (item) => item._id === product._id && item.color === selectedColor
//     );

//     if (exists) {
//       toast.info("This product is already in your cart!"); // toast if already exists
//       return; // stop here
//     }

//     setCartItems((prev) => [...prev, { ...product, color: selectedColor, quantity: 1 }]);
//     toast.success("Product added to cart!"); // toast on success
//   };

//   const removeFromCart = (id, color) => {
//     setCartItems((prev) =>
//       prev.filter((item) => !(item._id === id && item.color === color))
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // export const useCart = () => useContext(CartContext);
// import { createContext, useContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { toast } from "react-toastify";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartId, setCartId] = useState(localStorage.getItem("cartId") || uuidv4());

//   // Persist cartId
//   useEffect(() => {
//     localStorage.setItem("cartId", cartId);
//   }, [cartId]);

//   // Load cart from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("cartItems");
//     if (stored) {
//       try {
//         setCartItems(JSON.parse(stored));
//       } catch {
//         console.warn("Invalid cart in localStorage");
//       }
//     }
//   }, []);

//   // Save cart to localStorage & backend
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     if (cartItems.length) {
//       axios.post(`${process.env.REACT_APP_API_URL}/api/cart`, {
//         cartId,
//         items: cartItems.map((i) => ({
//           product: i._id || i.product?._id,
//           quantity: i.quantity,
//           color: i.color,
//         })),
//       }).catch(err => console.error("Error saving cart:", err));
//     }
//   }, [cartItems, cartId]);

//   // Add to cart
//   const addToCart = (product, selectedColor) => {
//     setCartItems((prev) => {
//       const existing = prev.find(
//         (item) => item._id === product._id && item.color === selectedColor
//       );

//       if (existing) {
//         // Increase quantity if already in cart
//         toast.info("Product quantity updated in cart!");
//         return prev.map((item) =>
//           item._id === product._id && item.color === selectedColor
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       // Add new product
//       toast.success("Product added to cart!");
//       return [...prev, { ...product, color: selectedColor, quantity: 1 }];
//     });
//   };

//   // Remove from cart
//   const removeFromCart = (id, color) => {
//     setCartItems((prev) =>
//       prev.filter((item) => !(item._id === id && item.color === color))
//     );
//   };
// // Clear the cart
// const clearCart = () => {
//   setCartItems([]);
//   localStorage.removeItem("cartItems"); // optional: also clear from localStorage
// };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// import { createContext, useContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { toast } from "react-toastify";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartId, setCartId] = useState(localStorage.getItem("cartId") || uuidv4());

//   // Persist cartId
//   useEffect(() => {
//     localStorage.setItem("cartId", cartId);
//   }, [cartId]);

//   // Load cart from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("cartItems");
//     if (stored) {
//       try {
//         setCartItems(JSON.parse(stored));
//       } catch {
//         console.warn("Invalid cart in localStorage");
//       }
//     }
//   }, []);

//   // Save cart to localStorage & backend
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     if (cartItems.length) {
//       axios
//         .post(`${process.env.REACT_APP_API_URL}/api/cart`, {
//           cartId,
//           items: cartItems.map((i) => ({
//             product: i._id || i.product?._id,
//             quantity: i.quantity,
//             color: i.color,
//           })),
//         })
//         .catch((err) => console.error("Error saving cart:", err));
//     }
//   }, [cartItems, cartId]);

//   // ➕ Add to cart
//   const addToCart = (product, selectedColor) => {
//     setCartItems((prev) => {
//       const existing = prev.find(
//         (item) => item._id === product._id && item.color === selectedColor
//       );

//       if (existing) {
//         toast.info("Product quantity updated in cart!");
//         return prev.map((item) =>
//           item._id === product._id && item.color === selectedColor
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       toast.success("Product added to cart!");
//       return [...prev, { ...product, color: selectedColor, quantity: 1 }];
//     });
//   };

//   // ❌ Remove from cart
//   const removeFromCart = (id, color) => {
//     setCartItems((prev) =>
//       prev.filter((item) => !(item._id === id && item.color === color))
//     );
//   };

//   // 🔄 Update quantity
//   const updateQuantity = (id, color, newQuantity) => {
//     if (newQuantity < 1) return; // prevent negative or zero
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id && item.color === color
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   // 🧹 Clear cart
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem("cartItems");
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // export const useCart = () => useContext(CartContext);
// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const CartContext = createContext();

// export const CartProvider = ({ children, userId }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartId, setCartId] = useState(null);

//   // Load cart from backend only once
//   useEffect(() => {
//     const loadCart = async () => {
//       try {
//         let id;

//         // If user is logged in, fetch cart by userId
//         if (userId) {
//           const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/db/cart/user`, { params: { userId } });
//           if (res.data) {
//             id = res.data.cartId;
//             setCartItems(res.data.items || []);
//           }
//         }

//         // If guest or no cart exists, create new cart
//         if (!id) {
//           const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/db/cart/init`, { userId });
//           id = res.data.cartId;
//           setCartItems([]);
//         }

//         setCartId(id);
//       } catch (err) {
//         console.error("Error loading cart:", err);
//       }
//     };

//     loadCart();
//   }, [userId]);

//   // Save cart to backend whenever cartItems change
//   useEffect(() => {
//     const saveCart = async () => {
//       if (!cartId) return;

//       try {
//         await axios.post(`${process.env.REACT_APP_API_URL}/api/db/cart`, {
//           cartId,
//           items: cartItems.map((i) => ({ ...i })), // save **full product object**
//         });
//       } catch (err) {
//         console.error("Error saving cart:", err);
//       }
//     };

//     saveCart();
//   }, [cartItems, cartId]);

//   // Cart actions
//   const addToCart = (product, selectedColor) => {
//     setCartItems((prev) => {
//       const existing = prev.find(
//         (item) => item._id === product._id && item.color === selectedColor
//       );

//       if (existing) {
//         toast.info("Product quantity updated in cart!");
//         return prev.map((item) =>
//           item._id === product._id && item.color === selectedColor
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       toast.success("Product added to cart!");
//       return [...prev, { ...product, color: selectedColor, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id, color) => {
//     setCartItems((prev) =>
//       prev.filter((item) => !(item._id === id && item.color === color))
//     );
//   };

//   const updateQuantity = (id, color, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id && item.color === color
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartId }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children, userId }) => {
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const isInitialMount = useRef(true); // <--- prevent save on first load

  // -----------------------------
  // LOAD CART (GUEST OR USER)
  // -----------------------------
  useEffect(() => {
    const loadCart = async () => {
      try {
        let savedId = localStorage.getItem("cartId");

        if (userId) {
          const { data: userCart } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/db/cart/user`,
            { params: { userId } }
          );

          if (userCart) {
            setCartId(userCart.cartId);
            setCartItems(userCart.items || []);
            localStorage.setItem("cartId", userCart.cartId);

            if (savedId && savedId !== userCart.cartId) {
              await axios.post(`${process.env.REACT_APP_API_URL}/api/db/cart/assign`, {
                userId,
                guestCartId: savedId,
              });
            }

            return;
          }
        }

        if (savedId) {
          const { data: guestCart } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/db/cart`,
            { params: { cartId: savedId } }
          );
          setCartId(savedId);
          setCartItems(guestCart.items || []);
          return;
        }

        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/db/cart/init`
        );
        localStorage.setItem("cartId", data.cartId);
        setCartId(data.cartId);
        setCartItems([]);
      } catch (err) {
        console.error("LOAD CART ERROR:", err);
      }
    };

    loadCart();
  }, [userId]);

// const addToCart = (product, color) => {
//   setCartItems((prev) => {
//     const exist = prev.find((i) => i.productId === product._id && i.color === color);

//     let updatedCart;
//     if (exist) {
//       toast.info("Quantity updated");
//       updatedCart = prev.map((i) =>
//         i.productId === product._id && i.color === color
//           ? { ...i, quantity: i.quantity + 1 }
//           : i
//       );
//     } else {
//       toast.success("Added to cart");
//       updatedCart = [
//         ...prev,
//         {
//           productId: product._id, // store productId separately
//           name: product.name,
//           price: product.price,
//           discountPrice: product.discountPrice,
//           image: product.images?.[0] || "",
//           color,
//           quantity: 1,
//         },
//       ];
//     }

//     // Call backend with **correct product IDs** and single mapping
//     axios.post(`${process.env.REACT_APP_API_URL}/api/db/cart`, {
//       cartId,
//       userId: userId || null,
//       items: updatedCart.map((i) => ({
//         product: {
//           _id: i.productId,   // <- always use productId
//           name: i.name,
//           price: i.price,
//           discountPrice: i.discountPrice,
//           image: i.image,      // <- single string
//         },
//         quantity: i.quantity,
//         color: i.color || "",
//       })),
//     });

//     return updatedCart;
//   });
// };
// const addToCart = (product, color) => {
//   setCartItems((prev) => {
//     const exist = prev.find(
//       (i) => i.product._id === product._id && i.color === color
//     );

//     let updatedCart;

//     if (exist) {
//       toast.info("Quantity updated");
//       updatedCart = prev.map((i) =>
//         i.product._id === product._id && i.color === color
//           ? { ...i, quantity: i.quantity + 1 }
//           : i
//       );
//     } else {
//       toast.success("Added to cart");
//       updatedCart = [
//         ...prev,
//         {
//           product: {
//             _id: product._id,
//             name: product.name,
//             price: product.price,
//             discountPrice: product.discountPrice,
//             image: product.images?.[0] || "",
//           },
//           quantity: 1,
//           color,
//         },
//       ];
//     }

//     axios.post(`${process.env.REACT_APP_API_URL}/api/db/cart`, {
//       cartId,
//       userId: userId || null,
//       items: updatedCart,
//     });

//     return updatedCart;
//   });
// };
const addToCart = ({ product, color, size, quantity }) => {
  setCartItems((prev) => {
    const exist = prev.find(
      (i) =>
        i.product._id === product._id &&
        i.color === color &&
        i.size === size
    );

    let updatedCart;

    if (exist) {
      toast.info("Quantity updated");
      updatedCart = prev.map((i) =>
        i.product._id === product._id &&
        i.color === color &&
        i.size === size
          ? { ...i, quantity: i.quantity + quantity }
          : i
      );
    } else {
      toast.success("Added to cart");
      updatedCart = [
        ...prev,
        {
          product: {
            _id: product._id,
            name: product.name,
            price: product.price,
            discountPrice: product.discountPrice,
            image: product.image || "",
          },
          color,
          size,
          quantity,
        },
      ];
    }

    // 🔥 Sync FULL cart to backend
    axios.post(`${process.env.REACT_APP_API_URL}/api/db/cart`, {
      cartId,
      userId: userId || null,
      items: updatedCart.map((i) => ({
        product: {
          _id: i.product._id,
          name: i.product.name,
          price: i.product.price,
          discountPrice: i.product.discountPrice,
          image: i.product.image,
        },
        color: i.color,
        size: i.size,
        quantity: i.quantity,
      })),
    });

    return updatedCart;
  });
};

// const removeFromCart = (id, color) => {
//   setCartItems((prev) => prev.filter((i) => !(i.productId === id && i.color === color)));
// };

const removeFromCart = async (id, color) => {
  try {
    // Filter using product._id
    const updatedCart = cartItems.filter((i) => !(i.product._id === id && i.color === color));

    // Update state
    setCartItems(updatedCart);

    // Sync with backend
    await axios.post(`${process.env.REACT_APP_API_URL}/api/db/cart`, {
      cartId,
      userId: userId || null,
      items: updatedCart.map((i) => ({
        product: {
          _id: i.product._id,
          name: i.product.name,
          price: i.product.price,
          discountPrice: i.product.discountPrice,
          image: i.product.image,
        },
        quantity: i.quantity,
        color: i.color || "",
      })),
    });

    toast.info("Item removed from cart");
  } catch (err) {
    console.error("REMOVE FROM CART ERROR:", err);
    toast.error("Failed to remove item");
  }
};


const updateQuantity = (id, color, qty) => {
  setCartItems((prev) =>
    prev.map((i) => (i.productId === id && i.color === color ? { ...i, quantity: qty } : i))
  );
};


  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartId,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
