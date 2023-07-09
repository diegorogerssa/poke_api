export const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);
  if (err.statusCode && err.message) {
    const { message, statusCode } = err;
    console.log(message);
    return res.status(statusCode).json({message})
  }
  
  console.log('caiu no erro geral');
  return res.status(500).json({message: 'Internal server error'});
}