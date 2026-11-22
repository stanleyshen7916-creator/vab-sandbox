export function toSlug(s) {
  const t = String(s).trim().toLowerCase().replace(/\s+/g, '-');
  return t || 'untitled';
}
