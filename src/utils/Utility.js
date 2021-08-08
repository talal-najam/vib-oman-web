/**
 * Convert json response keys into human readable labels
 * @param   {String} key
 * @returns {String}
 */

export const generateLabel = (key) => {
  return key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ");
};
