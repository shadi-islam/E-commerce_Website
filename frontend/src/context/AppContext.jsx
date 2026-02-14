import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  cart: "app_cart_items",
  wishlist: "app_wishlist_items",
  user: "user",
  token: "token",
};

const products = [
  {
    id: "p1",
    name: "Smart Watch",
    category: "Wearables",
    brand: "NovaTech",
    price: 129,
    inStock: true,
    stockCount: 18,
    description: "Premium smartwatch with health tracking and long battery life.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "p2",
    name: "Wireless Earbuds",
    category: "Audio",
    brand: "Pulse",
    price: 79.99,
    inStock: true,
    stockCount: 25,
    description: "Noise-cancelling earbuds with immersive sound and compact charging case.",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "p3",
    name: "Portable Speaker",
    category: "Audio",
    brand: "Aether",
    price: 59.5,
    inStock: false,
    stockCount: 0,
    description: "Bluetooth speaker with deep bass and weather-resistant design.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "p4",
    name: "Smart Lamp",
    category: "Home",
    brand: "Orbit",
    price: 44.99,
    inStock: true,
    stockCount: 9,
    description: "App-controlled lamp with adaptive brightness and warm ambience modes.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
  },
];

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readJson(STORAGE_KEYS.cart, []));
  const [wishlistItems, setWishlistItems] = useState(() =>
    readJson(STORAGE_KEYS.wishlist, [])
  );
  const [user, setUser] = useState(() => readJson(STORAGE_KEYS.user, null));
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEYS.token) || "");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.user);
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem(STORAGE_KEYS.token, token);
    } else {
      localStorage.removeItem(STORAGE_KEYS.token);
    }
  }, [token]);

  const addToCart = useCallback((item, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + quantity } : entry
        );
      }
      return [...current, { ...item, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const updateCartQuantity = useCallback((id, quantity) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, Number(quantity) || 1) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const isWishlisted = useCallback(
    (id) => wishlistItems.some((item) => item.id === id),
    [wishlistItems]
  );

  const toggleWishlist = useCallback((item) => {
    setWishlistItems((current) => {
      const exists = current.some((entry) => entry.id === item.id);
      return exists ? current.filter((entry) => entry.id !== item.id) : [...current, item];
    });
  }, []);

  const removeFromWishlist = useCallback((id) => {
    setWishlistItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const moveWishlistItemToCart = useCallback((id) => {
    setWishlistItems((current) => {
      const found = current.find((item) => item.id === id);
      if (found) {
        setCartItems((cartCurrent) => {
          const existing = cartCurrent.find((entry) => entry.id === found.id);
          if (existing) {
            return cartCurrent.map((entry) =>
              entry.id === found.id ? { ...entry, quantity: entry.quantity + 1 } : entry
            );
          }
          return [...cartCurrent, { ...found, quantity: 1 }];
        });
      }
      return current.filter((item) => item.id !== id);
    });
  }, []);

  const setSession = useCallback((nextUser, nextToken) => {
    setUser(nextUser || null);
    setToken(nextToken || "");
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken("");
  }, []);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0),
    [cartItems]
  );
  const cartSubtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      wishlistItems,
      user,
      token,
      isAuthenticated: Boolean(token),
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
      moveWishlistItemToCart,
      setSession,
      logout,
      products,
    }),
    [
      cartItems,
      wishlistItems,
      user,
      token,
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
      moveWishlistItemToCart,
      setSession,
      logout,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
