export const asyncHandler = (requestHandler) => {
  (err, req, res, next) => {
    Promise.resolve(requestHandler(err, req, res, next)).catch((err) =>
      next(err)
    );
  };
};

// export const asyncHandler = (fn) => {
//   async (err, req, res, next) => {
//     try {
//       await fn(err, req, res, next);
//     } catch (error) {
//       res.status(error.code || 500).json({
//         success: false,
//         message: error.message || "Something went wrong",
//       });
//     }
//   };
// };
