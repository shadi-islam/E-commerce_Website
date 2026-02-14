export const getUser = async (_req, res) => res.json({ feature: "user", items: [] });
export const createUser = async (req, res) => res.status(201).json({ feature: "user", payload: req.body });
