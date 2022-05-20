const data = [
  {
    id: 1,
    title: 'Bánh táo',
    tags: [1, 2],
    ingredients: [101, 301, 501],
    image: require('../../../assets/foods/Mini-Apple-Pies.png'),
    description:
      'Apple Pie - bánh Pie nhân táo là một món bánh bảo dễ cũng đúng mà bảo khó cũng không sai. Dễ là bởi vì làm rất nhanh, không có nhiều thao tác, chỉ nhồi, cán bột rồi cho nhân vào, mang đi nướng. Khả năng hỏng (theo nghĩa không ăn được) – là cực thấp. Còn khó là bởi vì tuy không có nhiều khâu, nhưng ở mỗi khâu đều cần cẩn thận và kĩ thuật tốt, lệch đi một tẹo thôi là bánh có thể không đạt yêu cầu rồi.',
    address: ['địa chỉ 1', 'địa chỉ 2'],
  },
  {
    id: 2,
    title: 'Bún bò Huế',
    tags: [4, 101],
    ingredients: [102, 302],
    image: require('../../../assets/foods/bun-bo-Hue.jpg'),
    description: 'Bún này ngonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    address: ['địa chỉ 1', 'địa chỉ 2'],
  },
  {
    id: 3,
    title: 'Egg Benedict',
    tags: [3],
    ingredients: [101, 202, 801],
    image: require('../../../assets/foods/egg-benedict.jpg'),
    description:
      'Bữa sáng truyền thống với nguyên liệu chủ đạo là trứng. Bao gồm trứng chần (poached egg), thịt nguội, bánh nướng xốp (English muffin) và xốt Hollandaise. Món ăn đơn giản nhưng tinh tế và yêu cầu kỹ năng cao của người đầu bếp',
    address: ['địa chỉ 1', 'địa chỉ 2'],
  },
  {
    id: 4,
    title: 'Tiramisu',
    tags: [1, 3, 102],
    ingredients: [301, 101, 203, 701, 601, 702],
    description:
      'Khi thưởng thức, tiramisu có vị thanh ngọt nhẹ nhàng, hơi hơi nồng của mùi rượu, thơm đậm đà mùi cà phê. Sự kết hợp hài hoà này giúp Tiramisu dễ chiếm được cảm tình của nhiều người yêu ẩm thực.',
    address: ['Paris Gateaux'],
  },
  {
    id: 5,
    title: 'Bánh Opera',
    tags: [1, 3, 103],
    ingredients: [301, 101, 703, 701, 202, 704],
    description:
      'Một chút đắng nhẹ từ socola, một chút man mát từ kem tươi, vị ngọt ngào từ gato hạnh nhân…hương vị đặc biệt này chắc chắn sẽ chinh phục được gu thưởng thức của khách hàng, kể cả những thực khách khó tính.',
    address: ['Paris Gateaux'],
  },
  {
    id: 6,
    title: 'Mousse Chocolate',
    tags: [1, 3, 103],
    ingredients: [101, 204, 701, 702],
    description:
      'Dark chocolate and espresso add the slightly bitter notes needed to balance this easy chocolate mousse. Remember, the higher the cacao percentage, the less sweet the chocolate.',
    address: [],
  },
  {
    id: 7,
    title: 'Panna Cotta Dâu tây',
    tags: [1, 102],
    ingredients: [205, 705, 502],
    image: require('../../../assets/foods/strawberry-panna-cotta.jpg'),
    description:
      'Panna Cotta is a classic italian dessert made with heavy cream, vanilla and sugar. Gelatin sheets, added to the mixture, create a custard-like consistency.',
    address: [],
  },
  {
    id: 8,
    title: 'Black Forest',
    tags: [1, 3, 104],
    ingredients: [301, 101, 704, 503, 702],
    description:
      'Khéo léo kết hợp với anh đào đen và thạch anh đào tạo nên một chiếc bánh có hương vị ấn tượng, vị kem béo ngậy, ngọt thanh vừa phải, vị thạch anh đào thơm ngon, dai giòn. Lớp xung quanh bánh là socola bào được phủ kín, nhìn rất lạ mắt và kích thích vị giác.',
    address: ['Paris Gateaux'],
  },
];

const lastKey = data.length;

export const FOOD_DATA = {data, lastKey};
