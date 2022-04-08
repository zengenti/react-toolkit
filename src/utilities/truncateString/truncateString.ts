/** Shorten a string to a specified length, with the option to add additional string to the end. For example ellipsis '...' */

export type Props = {
  string: string;
  length: number;
  endsWith?: string;
};

function truncateString({ string, length, endsWith = "" }: Props): string {
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
