// -----------------------------------------------------------------
// Function to format an array of query terms,
// to be able to match with Contentful tags. 
// E.g. "Self-directed courses" -> "selfDirectedCourses";
// "Tools & resources" -> "toolsResources" 
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

// -----------------------------------------------------------------
// Function to format an array of terms,
// to create hashes.
// E.g. "Self-directed courses" -> "self-directed-courses";
// -----------------------------------------------------------------

const dashes = (str) => {
  // Remove all special characters
  let splitStr = str.toLowerCase().split(/[\s-]/);
  // Rejoin with "-"
  return splitStr.join("-");
};

export const createHash = (array) => {
  const editedTags = [];
  array.forEach((tag) => {
    editedTags.push(dashes(tag));
  });
  return editedTags;
}