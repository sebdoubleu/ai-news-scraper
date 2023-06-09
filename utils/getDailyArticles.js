import { getDb } from '../models/db.js';

export default async function getDailyArticles(filter) {
  const now = new Date();
  let date;
  if (filter === 'yesterday') {
    date = `${now.getMonth() + 1}-${now.getDate() - 1}-${now.getFullYear()}`;
  } else if (filter === 'favorites') {
    return 'working on favorites';
  } else {
    date = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`;
  }

  let articles;

  try {
    const db = getDb();
    const collection = db.db.collection('dashboard');

    articles = await collection.find({ 'createdOn.date': date }).sort({ 'createdOn.time': -1 }).toArray();
  } catch (error) {
    console.error("Error:", error);
  } 
  return articles;
}