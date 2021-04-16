export function activeLink(path, href) {
  return path.split("#")[0] === "/" + href ? "active" : "";
}

export function convertToHref(string) {
  return string
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
