/** Check whether Browser/Client Rendered */
export default function isClient(): boolean {
  return typeof window !== 'undefined';
}
