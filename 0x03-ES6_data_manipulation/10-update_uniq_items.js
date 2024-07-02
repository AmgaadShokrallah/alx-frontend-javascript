export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const elements of map) {
    if (e[1] === 1) {
      map.set(e[0], 100);
    }
  }
  return map;
}
