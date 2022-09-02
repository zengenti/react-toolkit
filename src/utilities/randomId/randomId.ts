/** A string containing a randomly generated ID. */
export default function(): string {
  return self.crypto.randomUUID();
}
