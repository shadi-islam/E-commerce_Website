export const getShipping = async (_req, res) => res.json({ feature: "shipping", items: [] });
export const createShipping = async (req, res) => res.status(201).json({ feature: "shipping", payload: req.body });
