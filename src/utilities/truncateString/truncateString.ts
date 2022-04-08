/** This function shortens a string, adding an elipsis to the end if longer than provided length. */
function truncateString(
  string: string,
  length: number,
  endsWith: string = ""
): string {
  if (typeof string != "string") {
    throw new TypeError("First argument must be a string");
  }
  if (typeof length != "number") {
    throw new TypeError("Second argument must be a number");
  }
  // removes any whitespace from the end
  const trimString = string.trimEnd();
  // if string is within the max size, just return it
  if (trimString.length <= length) return trimString;
  // ensure sliceAmount is >= 0 so it doesn't slice from end of string, only from the start
  let sliceAmount = length;
  if (sliceAmount < 0) {
    sliceAmount = 0;
  }
  // this will still add endsWith e.g. '...' onto the string, even if the final length > truncation amount
  // if the string is very small, else it replaces the last characters with the endsWith string.
  return trimString.slice(0, sliceAmount) + endsWith;
}

export default truncateString;

// write a function to truncate a string to a certain length, adding an elipsis to the end if longer than provided length.
