export const getAdmin = async (_req, res) => res.json({ feature: "admin", items: [] });
export const createAdmin = async (req, res) => res.status(201).json({ feature: "admin", payload: req.body });
