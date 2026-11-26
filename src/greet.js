export function greet(name) {
  const n = typeof name === 'string' ? name.trim() : '';
  return `Hello, ${n || 'stranger'}!`;
}
