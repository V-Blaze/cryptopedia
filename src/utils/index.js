import {
// eslint-disable-next-line
  Australia, China, EU, Indonesia, Japan, Russia, Seychelles, Singapore, South_Korea, UK, US, otherCountries,
} from '../constants';

export default function filterObjectsById(objects, ids) {
  return objects.filter((object) => ids.includes(object.exchangeId));
}

export const filterCountry = (country, exchanges) => {
  let item;
  switch (country) {
    case 'Australia':
      item = filterObjectsById(exchanges, Australia);
      break;
    case 'China':
      item = filterObjectsById(exchanges, China);
      break;
    case 'EU':
      item = filterObjectsById(exchanges, EU);
      break;
    case 'Indonesia':
      item = filterObjectsById(exchanges, Indonesia);
      break;
    case 'Japan':
      item = filterObjectsById(exchanges, Japan);
      break;
    case 'Russia':
      item = filterObjectsById(exchanges, Russia);
      break;
    case 'Seychelles':
      item = filterObjectsById(exchanges, Seychelles);
      break;
    case 'Singapore':
      item = filterObjectsById(exchanges, Singapore);
      break;
    case 'South_Korea':
      item = filterObjectsById(exchanges, South_Korea);
      break;
    case 'UK':
      item = filterObjectsById(exchanges, UK);
      break;
    case 'US':
      item = filterObjectsById(exchanges, US);
      break;
    case 'otherCountries':
      item = filterObjectsById(exchanges, otherCountries);
      break;
    case 'allCountries':
      item = exchanges;
      break;
    default:
      item = exchanges;
      break;
  }

  return item;
};
