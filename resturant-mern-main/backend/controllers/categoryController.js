export const getCategory = async (_req, res) => res.json({ feature: "category", items: [] });
export const createCategory = async (req, res) => res.status(201).json({ feature: "category", payload: req.body });
