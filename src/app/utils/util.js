export const CalculateMaxAge = () => {
  let today = new Date();
  today.setFullYear(today.getFullYear() - 21);
  let maxDate = today.toISOString().slice(0, 10);

  return maxDate;
};
