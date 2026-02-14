export const getWebhook = async (_req, res) => res.json({ feature: "webhook", items: [] });
export const createWebhook = async (req, res) => res.status(201).json({ feature: "webhook", payload: req.body });
