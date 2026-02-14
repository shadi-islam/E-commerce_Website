import Cart from "../models/cartModel.js";
export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
  res.json(cart || { user: req.user.id, items: [] });
};
export const addToCart = async (req, res) => {
  const { product, quantity = 1 } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });
  const idx = cart.items.findIndex((i) => i.product.toString() === product);
  if (idx >= 0) cart.items[idx].quantity += quantity;
  else cart.items.push({ product, quantity });
  await cart.save();
  res.status(201).json(cart);
};
