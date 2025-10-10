export const formatValidationError = errors => {
  if (!errors || !errors.issues) return 'Validation Failed';

  if (Array.isArray(errors.issues))
    return errors.issues.map(i => i.message).json(',');

  return JSON.stringify(errors);
};
