export const getBranding = async (_req, res) => res.json({ feature: "branding", items: [] });
export const createBranding = async (req, res) => res.status(201).json({ feature: "branding", payload: req.body });
