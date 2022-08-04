export function cannonicalUrl(baseUrl: string) {
  /** Removes http/https/www protocol from baseUrl */
  const formatBaseUrl: string = baseUrl.replace(
    /(http|https):\/\/|www\.|\/$/g,
    ""
  );

  /** Formats & enforces https */
  const buildCannonicalUrl: string = `https://www.${formatBaseUrl}`;

  return buildCannonicalUrl;
}
