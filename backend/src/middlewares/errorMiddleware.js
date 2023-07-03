export const errorMiddleware = (err, _req, res, _next) => {
  if (err.statusCode && err.message) {
    const { message, statusCode } = err;
    return res.status(statusCode).json({message})
  }

  return res.status(500).json({message: 'Internal server error'});
}