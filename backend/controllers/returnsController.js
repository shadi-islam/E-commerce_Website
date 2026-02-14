export const getReturns = async (_req, res) => res.json({ feature: "returns", items: [] });
export const createReturns = async (req, res) => res.status(201).json({ feature: "returns", payload: req.body });
