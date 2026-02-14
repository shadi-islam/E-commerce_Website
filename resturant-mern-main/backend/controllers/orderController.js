import Cart from "../models/cartModel.js";
import Order from "../models/orderModel.js";
export const placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
  if (!cart || !cart.items.length) return res.status(400).json({ message: "Cart is empty" });
  const items = cart.items.map((i) => ({ product: i.product._id, quantity: i.quantity, price: i.product.price }));
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const order = await Order.create({ user: req.user.id, items, totalAmount });
  cart.items = [];
  await cart.save();
  res.status(201).json(order);
};
export const listMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
};
