export const getCoupon = async (_req, res) => res.json({ feature: "coupon", items: [] });
export const createCoupon = async (req, res) => res.status(201).json({ feature: "coupon", payload: req.body });
