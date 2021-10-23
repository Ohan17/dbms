import React, { useState, useEffect } from "react";
import testApi from "../api/testApi";
export const products = [
  {
    id: 1,
    name: "KN95 Face Mask 25 PCs",
    description:
      "WWDOLL Multiple Colour 5 Layers KN95 Masks, Dispoasable Masks Protection for Women and Men.The Filter Efficiency More Than 95% - Our KN95 mask is made of 2 non-woven outer layers, 2 melt-blown inner filter, 1 non-woven cotton middle layer, offers more protection than a standard disposable 3-Ply mask. The filter efficiency is 95% .",
    price: 10.2,
    img: "https://m.media-amazon.com/images/I/716eu2-g+sL._SL1500_.jpg",
    quantity: 10,
    rate: 4.5,
    supplier: "Amazon",
  },
  {
    id: 6,
    name: "Ultra ComfortCare Toilet Paper with Cushiony CleaningRipples",
    description: `24 family mega toilet paper rolls (4 packs of 6), 325 sheets per roll; 24 family mega rolls = 108 regular rolls*; packaging may vary from images shown
      3x thicker & 3x more absorbent per sheet vs. the leading national value brand; Cottonelle's thickest, softest toilet paper
      Made with plant-based fibers, bath tissue is clog-safe, sewer-safe, septic-safe; Sustainably sourced from responsibly managed forests
      Soft, cushiony 2-ply toilet paper
      Pair with Cottonelle Flushable Wipes for a refreshing clean - hypoallergenic and 100% flushable`,
    price: 25.18,
    img: "https://m.media-amazon.com/images/I/81TgHB9p+FL._AC_SL1500_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Amazon",
  },
  {
    id: 9,
    name: "Amazon Brand - Presto",
    description: `Includes 12 Mega Rolls with 308 2-ply sheets per roll
      12 Mega Rolls = 48 Regular Rolls (based on a regular roll with 77 sheets)
      Leaves less lint behind (versus the leading Ultra-Premium Soft Brand, based on laboratory testing)
      RV/Septic-safe bath tissue
      Made with pulp sourced from sustainably managed forests and controlled sources
      Mega Rolls are our longer-lasting rolls
      Sheet dimensions - 4 x 4 inches
      `,
    price: 12.99,
    img: "https://m.media-amazon.com/images/I/81w1WNjBI+L._AC_SL1500_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Amazon",
  },
  {
    id: 2,
    name: "3 Ply Earloop Face Masks",
    description:
      "Outer layer is for blocking splash and small particles in the air, middle layer is for filtering the breath-in air, contact layer is for absorbing the vapor of exhaled air.",
    price: 25.9,
    img: "https://m.media-amazon.com/images/I/51J41YUop8L.jpg",
    quantity: 2,
    rate: 4.5,
    supplier: "Amazon",
  },
  {
    id: 3,
    name: "100pcs Adult Disposable Face Masks",
    description:
      "3 Layers of Material - The mask is made of 3 layers of high-quality non-woven fabric,adjustable soft nose clip design for a better fit on the face. Provide you with a comfortable wearing experience.",
    price: 20,
    img: "https://m.media-amazon.com/images/I/51gboD5UM5L._SL1000_.jpg",
    quantity: 0,
    rate: 1.5,
    supplier: "Amazon",
  },
  {
    id: 4,
    name: "Protect Reusable Face Mask for Adults",
    description:
      "Protect Reusable Face Mask for Adults, 5 Count | Cloth Black Face Masks Reusable with 3 Layers of Protection | Black Face Mask Comfortable, Adjustable Nose Wire and Machine Washable Masks.",
    price: 10,
    img: "https://m.media-amazon.com/images/I/61Au0vn3TGL._SL1500_.jpg",
    quantity: 5,
    rate: 4,
    supplier: "Addidas",
  },
  {
    id: 5,
    name: "Modenna Face Mask Disposable Blue 50Pcs",
    description:
      "3 Layers of Material - The mask is made of 3 layers of high-quality non-woven fabric,adjustable soft nose clip design for a better fit on the face. Provide you with a comfortable wearing experience.",
    price: 11,
    img: "https://m.media-amazon.com/images/I/61+crsQHEgL._AC_SL1002_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Addidas",
  },
  {
    id: 7,
    name: "KN95 Disposable Face Mask",
    description:
      "Multi-effect Protection 5-Layer Face Mask - High breathable 5-ply protection masks use standard safety materials. The outermost 1 layer non-woven fabric can filter large particles, middle 2-layer melt-blown fabric can block more than 95% particles, 1 layer hot air cotton can filter pm2.5 and the innermost 1 layer non-woven fabric is skin-friendly and softer that give you the comfortable usage experience at the same time it protects your breath with high filter efficiency.",
    price: 50,
    img: "https://m.media-amazon.com/images/I/71p89wtqf3S._SL1500_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Amazon",
  },
  {
    id: 8,
    name: "Suave Hand Sanitizer Alcohol",
    description: `Suave hand sanitizer kills 99.9% of germs (effective at eliminating over 99.9% of many common harmful germs and bacteria)
      This hand sanitizer formula should be used when soap and water are not available
      This antibacterial hand sanitizer has no added fragrance
      Suave hand sanitizer reduces bacteria on the hands
      Wet hands thoroughly with our antibacterial hand sanitizer and allow to dry without wiping. Rub lightly until dry. Do not rinse
      Travel hand sanitizer in a convenient 10 ounce spray bottle fits easily on countertops or desks`,
    price: 25,
    img: "https://m.media-amazon.com/images/I/81Haim2xRaL._SL1500_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Amazon",
  },

  {
    id: 10,
    name: "Tea Tree Special Shampoo",
    description: `Tea Tree Special Shampoo gently washes away impurities. Great for all hair types, this invigorating cleanser leaves strands refreshingly clean and full of shine. Natural Tea Tree oil and peppermint soothe the scalp, while light notes of lavender leave hair smelling fresh. Natural Tea Tree oil, peppermint and lavender invigorate the scalp and leave hair smelling great. Apply a small amount to damp hair. Lather and rinse completely.`,
    price: 35.5,
    img: "https://m.media-amazon.com/images/I/51tvu13LblL._SL1000_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Amazon",
  },
  {
    id: 11,
    name: "Dove Nutritive Solutions",
    description: `LIGHTWEIGHT MOISTURIZING SHAMPOO: Dove Nutritive Solutions Daily Moisture Shampoo (4 pack) leaves your hair feeling silky soft – without weighing it down
      HYDRATING SHAMPOO & NOURISHING FOR DRY HAIR: Infused with our Pro-Moisture Complex, this shampoo for dry hair deeply nourishes so that hair feels smooth, soft and even more manageable
      EVERYDAY CLEANSING MOISTURE SHAMPOO: This Dove Hydrating Shampoo is suitable for everyday hair care. And with a progressively nourishing formula, it cares for your hair from within`,
    price: 12.99,
    img: "https://m.media-amazon.com/images/I/81qf01Wd8LL._SL1500_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Amazon",
  },
  {
    id: 12,
    name: "Nexxus Keraphix Shampoo",
    description: `POWERFUL PROTEIN INFUSION: Visibly heal signs of hair damage with Nexxus Keraphix Shampoo for Damaged Hair. The first step of Nexxus’ keratin hair treatment that brings the salon experience home.
    SMOOTHING KERATIN SHAMPOO reaches into the hair fiber to help repair from within. Continued use enables the keratin to increase hair’s resilience, leaving you with silky and luminous hair.
    KERATIN TREATMENT INFUSED WITH PROTEINFUSION: Inspired by Nexxus New York City salon, Nexxus shampoo with Keratin Protein and Black Rice is your new weapon to heal signs of damaged hair.
    SALON-CRAFTED HAIR CARE: Take the first step to rejuvenated hair with our hair repair treatment for damaged hair. `,
    price: 18.97,
    img: "https://m.media-amazon.com/images/I/71vSE00xMDL._SL1500_.jpg",
    quantity: 2,
    rate: 5,
    supplier: "Amazon",
  },
];

const Context = React.createContext({
  isLoggedIn: false,
  isAdmin: false,
  logoutHandler: (isAdmin = false) => {},
  loginHandler: (email, password) => {},
  cart: [],
  addToCartHandler: (item) => {},
  checkIfProductAvailable: (item, qty) => {},
  signUpHandler: (user) => {},
  fetchedProducts: [],
  loading: false,
  err: null,
});
export const ContextProvider = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [cart, addToCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await testApi.verifyToken(token);
        if (response.roleId === 1) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        setIsLoggedIn(true);
      } catch (error) {
        setToken("");
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    };
    verifyUser();
  }, [token]);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setErr(null);
      try {
        const response = await testApi.getAllProducts();
        setFetchedProducts(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setErr(err);
      }
    };
    fetchProduct();
  }, []);
  const loginHandler = async (email, password) => {
    try {
      const response = await testApi.login({
        email: email,
        password: password,
      });
      localStorage.setItem("accessToken", response.accessToken);
      setToken(response.accessToken);
      return true;
    } catch (e) {
      console.log(e);
      setErr(e);
      return false;
    }
  };
  const logoutHandler = (isAdmin = false) => {
    setToken("");
    localStorage.removeItem("accessToken");
  };
  const signUpHandler = async (user_info) => {
    try {
      const response = await testApi.signUp(user_info);
    } catch (error) {
      console.log(error);
    }
    loginHandler(user_info.email, user_info.password);
  };
  useEffect(() => {
    let data = JSON.stringify(cart);
    localStorage.setItem("cart", data);
  }, [cart]);

  const checkIfProductAvailable = (item_id, qty = 1) => {
    const record = fetchedProducts.find((product) => product.id === item_id);
    if (record && record.quantity - qty >= 0) {
      return true;
    } else {
      return false;
    }
  };
  const addToCartHandler = (item) => {
    const record = cart.find((product) => product.id === item.id);
    if (record) {
      const val = record.qty + item.qty;
      if (val === 0) {
        //neu bang ko thi loai ra khoi cart
        const product_except_record = cart.filter(
          (product) => product !== record
        );
        addToCart([...product_except_record]);
        return;
      } else {
        let temp_cart = cart;
        temp_cart.forEach((item) => {
          if (item.id === record.id) {
            item.qty = val;
          }
        });
        addToCart([...temp_cart]);
      }
    } else {
      addToCart((currentCart) => [...currentCart, item]);
    }
  };
  return (
    <Context.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        cart: cart,
        addToCartHandler: addToCartHandler,
        checkIfProductAvailable: checkIfProductAvailable,
        signUpHandler: signUpHandler,
        isAdmin: isAdmin,
        fetchedProducts: fetchedProducts,
        loading: loading,
        err: err,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
