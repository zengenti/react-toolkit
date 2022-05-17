export type TruncateStringProps = {
  string: string;
  length: number;
  endsWith?: string;
};

/** Shorten a string to a specified length, with the option to add additional string to the end. For example ellipsis '...' */
export function truncateString({
  string,
  length,
  endsWith = "",
}: TruncateStringProps): string {
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
  else {
    // ensure sliceAmount is >= 0 so it doesn't slice from end of string, only from the start
    let sliceAmount = length;
    if (sliceAmount < 0) {
      sliceAmount = 0;
    }

    return trimString.slice(0, sliceAmount) + endsWith;
  }
}
