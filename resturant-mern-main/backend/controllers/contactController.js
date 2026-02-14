export const getContact = async (_req, res) => res.json({ feature: "contact", items: [] });
export const createContact = async (req, res) => res.status(201).json({ feature: "contact", payload: req.body });
