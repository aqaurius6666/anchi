export const FOOD_DATA = [
  {
    id: 1,
    title: 'Bánh táo',
    tags: [1, 2, 3],
    description: 'Bánh này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    ingredients: [1, 2, 3],
    address: ['địa chỉ 1', 'địa chỉ 2'],
  },
  {
    id: 2,
    title: 'Bún bò Huế',
    tags: [1, 2, 3],
    food_desc: 'Bún này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    food_ingredient: [1, 2, 3],
    food_address: ['địa chỉ 1', 'địa chỉ 2'],
  },
];

export const RESTAURANT_DATA = [
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

export const TAG_DATA = [
  {
    tag_id: 1,
    tag_title: 'Bánh ngọt',
  },
  {
    tag_id: 2,
    tag_title: 'Tráng miệng',
  },
];

export const INGREDIENT_DATA = [
  {
    id: 1,
    title: 'Trứng',
  },
  {
    id: 2,
    title: 'Sữa',
  },
];

export const FAVORITE_DATA = {food: [1, 6, 33], store: [11, 16, 33]};

export const BLACKLIST_DATA = {
  food: [2, 4],
  store: [22, 44],
};
