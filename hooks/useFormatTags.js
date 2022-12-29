// -----------------------------------------------------------------
// Function to format query terms to be able to match with tag IDs
// -----------------------------------------------------------------
export const titleCase = (str) => {
  // Remove special characters
  let splitStr = str.toLowerCase().split(/[\s-]/);
  // Keep first word lowercase
  for (let i = 1; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join("").replace(/[^a-zA-Z ]/g, "");
};

export const editTags = (array) => {
  const editedTags = [];
  array.forEach((tag) => {
    editedTags.push(titleCase(tag));
  });
  return editedTags;
};
