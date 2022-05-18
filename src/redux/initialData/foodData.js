const data = [
  {
    id: 1,
    title: 'Bánh táo',
    tags: [1, 2],
    ingredients: [1, 2],
    description: 'Bánh này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    address: ['địa chỉ 1', 'địa chỉ 2'],
  },
  {
    id: 2,
    title: 'Bún bò Huế',
    tags: [4],
    ingredients: [1],
    description: 'Bún này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    address: ['địa chỉ 1', 'địa chỉ 2'],
  },
  {
    id: 3,
    title: 'Egg Benedict',
    tags: [1, 2, 3],
    ingredients: [1, 3],
    description:
      'Bữa sáng truyền thống với nguyên liệu chủ đạo là trứng. Bao gồm trứng chần (poached egg), thịt nguội, bánh nướng xốp (English muffin) và xốt Hollandaise. Món ăn đơn giản nhưng tinh tế và yêu cầu kỹ năng cao của người đầu bếp',
    address: ['địa chỉ 1', 'địa chỉ 2'],
  },
];

const lastKey = data.length;

export const FOOD_DATA = {data, lastKey};
