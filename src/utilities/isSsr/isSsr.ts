/** Check whether Server Side Rendered */
export default function isSsr(): boolean {
  return typeof window === 'undefined';
}
