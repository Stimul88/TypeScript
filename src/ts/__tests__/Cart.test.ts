import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';


const cart = new Cart();

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('add Book test', () => {
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  const correct = {
    author: "Leo Tolstoy",
    id: 1001,
    name: "War and Piece",
    pages: 1225,
    price: 2000
  };

  expect(cart.items).toEqual([correct]);
});


test('add item test', () => {
  cart.add(new Movie(1010, 'Avengers', 2012, 'fantasy', 'USA', 'Avengers Assemble!', '127 мин.', 250))
  expect(cart.items.length).toBe(2);
});

test('allSumPrice test', () => {
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.allSumPrice).toBe(3150);
});

test('allSumPriceProc test', () => {
  expect(cart.allSumPriceProc(10)).toBe(2835);
});


test('dellObject test', () => {
  cart.dellObject(1008)
  expect(cart.items.length).toBe(2);
});
