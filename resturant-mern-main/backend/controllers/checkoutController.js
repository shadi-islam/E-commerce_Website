export const getCheckout = async (_req, res) => res.json({ feature: "checkout", items: [] });
export const createCheckout = async (req, res) => res.status(201).json({ feature: "checkout", payload: req.body });
