const data = [
  {
    id: 1,
    title: 'HN Quán',
    tags: [1, 2, 3],
    address: '21 Cầu Giấy, Hà Nội',
    description: 'Quán này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    menu: ['Bánh táo', 'Bánh Chuối'],
    note: {
      'Thú cưng': true,
      'Ăn tại quán': false,
      'Hút thuốc': false,
    },
  },
  {
    id: 2,
    title: 'SG Quán',
    tags: [1, 3],
    address: '21 Cầu Giấy, Hà Nội',
    describe: 'Quán này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    menu: ['Bánh táo', 'Bánh Chuối'],
    note: {
      'Ăn tại quán': true,
      'Hút thuốc': false,
    },
  },
];

const lastKey = data.length;

export const RESTAURANT_DATA = {data, lastKey};
