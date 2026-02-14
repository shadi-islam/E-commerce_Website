export const getMenu = async (_req, res) => res.json({ feature: "menu", items: [] });
export const createMenu = async (req, res) => res.status(201).json({ feature: "menu", payload: req.body });
