
const basePath =
  process.env.NODE_ENV === "production"
    ? "/I-AM-MYSELF"
    : "";

export function assetPath(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  return `${basePath}/${path.replace(/^\/+/, "")}`;
}
