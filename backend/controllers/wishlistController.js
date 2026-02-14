export const getWishlist = async (_req, res) => res.json({ feature: "wishlist", items: [] });
export const createWishlist = async (req, res) => res.status(201).json({ feature: "wishlist", payload: req.body });
