export const getNotification = async (_req, res) => res.json({ feature: "notification", items: [] });
export const createNotification = async (req, res) => res.status(201).json({ feature: "notification", payload: req.body });
