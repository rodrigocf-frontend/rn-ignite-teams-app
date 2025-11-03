export const AppError = (error: unknown) => {
  if (error instanceof Error) {
    throw Error(error.message);
  }
  throw Error("Unexpected Error.");
};
