import Product from "../models/productModel.js";
export const listProducts = async (req, res) => {
  const { q } = req.query;
  const query = q ? { name: { $regex: q, $options: "i" } } : {};
  const products = await Product.find(query).sort({ createdAt: -1 });
  res.json(products);
};
export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};
export const createProduct = async (req, res) => {
  const created = await Product.create(req.body);
  res.status(201).json(created);
};
