export const getAddress = async (_req, res) => res.json({ feature: "address", items: [] });
export const createAddress = async (req, res) => res.status(201).json({ feature: "address", payload: req.body });
