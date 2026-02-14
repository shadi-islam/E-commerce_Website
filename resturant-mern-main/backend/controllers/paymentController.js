export const getPayment = async (_req, res) => res.json({ feature: "payment", items: [] });
export const createPayment = async (req, res) => res.status(201).json({ feature: "payment", payload: req.body });
