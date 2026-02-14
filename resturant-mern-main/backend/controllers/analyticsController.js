export const getAnalytics = async (_req, res) => res.json({ feature: "analytics", items: [] });
export const createAnalytics = async (req, res) => res.status(201).json({ feature: "analytics", payload: req.body });
