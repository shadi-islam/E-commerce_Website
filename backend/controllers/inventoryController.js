export const getInventory = async (_req, res) => res.json({ feature: "inventory", items: [] });
export const createInventory = async (req, res) => res.status(201).json({ feature: "inventory", payload: req.body });
