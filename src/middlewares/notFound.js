export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Opps Site not found Route: ${req.originalUrl}`,
  });
};
