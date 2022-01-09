import Dexie from 'dexie';

export const db = new Dexie('ecommerce');
db.version(1).stores({
  cart: '++id, title, price, category', // Primary key and indexed props
});