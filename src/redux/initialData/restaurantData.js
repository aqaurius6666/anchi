const data = [
  {
    id: 1,
    title: 'HN Quán',
    tags: [1, 2, 3],
    address: '21 Cầu Giấy, Hà Nội',
    description: 'Quán này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    image: require("../../../assets/eg/R.jpg"),
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
    description: 'Quán này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    menu: ['Bánh táo', 'Bánh Chuối'],
    note: {
      'Ăn tại quán': true,
      'Hút thuốc': false,
    },
  },
  {
    id: 3,
    title: 'Paris Gateaux Bakery & Cafe',
    tags: [1, 3, 102, 103, 104],
    address: '68 Vũ Phạm Hàm, Trung Hoà, Cầu Giấy, Hà Nội',
    description: 'Paris Gateaux',
    menu: ['Tiramisu', 'Panna Cotta', 'Mousse', 'Black Forest'],
    note: {
      'Ăn tại quán': true,
      'Hút thuốc': false,
    },
  },
  {
    id: 4,
    title: 'Artemis Pastry & Coffee Shop',
    tags: [1],
    address: '20 P. Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội',
    description: 'Artemis Pastry',
    menu: [
      'Bailey Caramel Brownie',
      'Burnt Caramel Signature',
      'Creamy Choco',
      'Berry Fruit Vanilla',
    ],
    note: {
      'Ăn tại quán': true,
      'Hút thuốc': false,
    },
  },
];

const lastKey = data.length;

export const RESTAURANT_DATA = { data, lastKey };
