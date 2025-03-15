export const LEARNING_START_YEAR = 2020;

export const COMMERCIAL_START_YEAR = 2023;

export const calculateYearsOfExperience = (startYear: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export const COMMERCIAL_EXPERIENCE_YEARS = calculateYearsOfExperience(
  COMMERCIAL_START_YEAR,
);

export const LEARNING_EXPERIENCE_YEARS =
  calculateYearsOfExperience(LEARNING_START_YEAR);
