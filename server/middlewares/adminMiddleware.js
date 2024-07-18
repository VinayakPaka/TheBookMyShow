const adminMiddleware = (req, res, next) => {
  if (req.body.user.role !== "admin") {
    return res.send({
      success: false,
      message: "You are not authorized to perform this action!",
    });
  }
  next();
};
