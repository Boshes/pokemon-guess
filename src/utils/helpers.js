export function normalizeString (str) {
  return str.trim().replace(/\s+/g, '-').toLowerCase()
}