export const getBooking = async (_req, res) => res.json({ feature: "booking", items: [] });
export const createBooking = async (req, res) => res.status(201).json({ feature: "booking", payload: req.body });
