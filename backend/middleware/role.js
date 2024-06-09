export const role = (roleName) => {
  return (req, res, next) => {
    const hadRequiredRole = req.auth.role === roleName;

    if (!hadRequiredRole) {
      return res.status(403).json({
        message: "access denied",
      });
    }

    next();
  };
};
