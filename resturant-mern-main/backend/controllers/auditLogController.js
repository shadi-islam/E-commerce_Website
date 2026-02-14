export const getAuditlog = async (_req, res) => res.json({ feature: "auditLog", items: [] });
export const createAuditlog = async (req, res) => res.status(201).json({ feature: "auditLog", payload: req.body });
