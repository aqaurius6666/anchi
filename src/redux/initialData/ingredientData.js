// Tags and ingredients should have lowercased title

// 1. Proteins
// 2. Dairies
// 3. Cereals
// 4. Vegetable
// 5. Fruits
// 6. Alcohols
// 7. Others
const data = [
  {
    id: 101,
    title: 'trứng',
  },
  {
    id: 102,
    title: 'thịt bò',
  },
  {
    id: 201,
    title: 'sữa',
  },
  {
    id: 202,
    title: 'bơ',
  },
  {
    id: 203,
    title: 'mascarpone',
  },
  {
    id: 204,
    title: 'heavy cream',
  },
  {
    id: 205,
    title: 'whipping cream',
  },
  {
    id: 301,
    title: 'bột mì',
  },
  {
    id: 302,
    title: 'bún',
  },
  {
    id: 501,
    title: 'táo',
  },
  {
    id: 502,
    title: 'dâu tây',
  },
  {
    id: 503,
    title: 'anh đào',
  },
  {
    id: 601,
    title: 'rượu marsala',
  },
  {
    id: 701,
    title: 'cà phê',
  },
  {
    id: 702,
    title: 'bột cacao',
  },
  {
    id: 703,
    title: 'hạnh nhân',
  },
  {
    id: 704,
    title: 'chocolate',
  },
  {
    id: 705,
    title: 'bột gelatin',
  },
  {
    id: 801,
    title: 'thịt nguội',
  },
];

const lastKey = data.length;

export const INGREDIENT_DATA = {data, lastKey};
