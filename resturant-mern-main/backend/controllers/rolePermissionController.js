export const getRolepermission = async (_req, res) => res.json({ feature: "rolePermission", items: [] });
export const createRolepermission = async (req, res) => res.status(201).json({ feature: "rolePermission", payload: req.body });
