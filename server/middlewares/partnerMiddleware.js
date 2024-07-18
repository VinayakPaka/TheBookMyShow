const partnerMiddleware = (req, res, next) => {
  if (req.body.user.role !== "partner") {
    return res.send({
      success: false,
      message: "You are not authorized to perform this action!",
    });
  }
  next();
};
