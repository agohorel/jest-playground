const stock = [
  { id: 1, item_name: 'CPU 1200', stock: 12 },
  { id: 2, item_name: 'GPU 2400', stock: 3 },
  { id: 3, item_name: 'MOBO 550', stock: 12 },
  { id: 4, item_name: 'RAM 980', stock: 19 },
];

function filterStock(arr, key, filterTerm) {
  return arr.filter((item) => item[key] === filterTerm);
}

// jest will create a __snapshots__ folder with the data resolved from the tests
// should the output change, it will fail the test
describe('test snapshots on serializable data', () => {
  test('returning all items with matching id', () => {
    expect(filterStock(stock, 'id', 1)).toMatchSnapshot();
  });

  test('returning all items with matching stock', () => {
    expect(filterStock(stock, 'stock', 12)).toMatchSnapshot();
  });
});
