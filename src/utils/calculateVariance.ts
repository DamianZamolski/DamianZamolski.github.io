export const calculateVariance = (values: number[]) => {
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;

  return (
    values.reduce((variance, value) => variance + (value - mean) ** 2, 0) /
    values.length
  );
};
