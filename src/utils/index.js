export default function filterObjectsById(objects, ids) {
  return objects.filter((object) => ids.includes(object.exchangeId));
}
