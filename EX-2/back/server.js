// import sequelize from "./databases/database.js";

// const start = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("SUCCESS");
//   } catch (error) {
//     console.error("ERROR", error);
//   }
// };

// start();

import sequelize from './databases/database.js';
import Author from './models/Author.js';
import Book from './models/Book.js';

const setup = async () => {
  try {
    await sequelize.sync({ force: true }); // recreates tables
    console.log("DB synced");

    const authors = await Promise.all([
      Author.create({ name: "Ronan", birthYear: 1990 }),
      Author.create({ name: "Kim Ang", birthYear: 1995 }),
      Author.create({ name: "Hok Tim", birthYear: 2015 }),
    ]);

    // Add books to each author
    await authors[0].createBook({ title: "Book 1", publicationYear: 2025, pages: 25 });
    await authors[0].createBook({ title: "Book 2", publicationYear: 2024, pages: 24 });

    await authors[1].createBook({ title: "Book 3", publicationYear: 2023, pages: 23 });
    await authors[1].createBook({ title: "Book 4", publicationYear: 2022, pages: 22 });

    await authors[2].createBook({ title: "Book 5", publicationYear: 2021, pages: 21 });
    await authors[2].createBook({ title: "Book 6", publicationYear: 2020, pages: 20 });

    const kimAng = await Author.findOne({ where: { name: "Kim Ang" } });
    const kimAngBooks = await kimAng.getBooks();
    console.log("Books by Kim Ang:", kimAngBooks.map(book => book.title));

    await kimAng.createBook({title : "Book 0", publicationYear : 2010, pages : 10});
    console.log("Books by Kim Ang:", kimAngBooks.map(book => book.title));

    const authorsWithBooks = await Author.findAll({
      include: Book
    });
    authorsWithBooks.forEach(author => {
      console.log(`${author.name}'s books:`);
      author.Books.forEach(book => {
        console.log(`- ${book.title} (${book.publicationYear})`);
      });
    });

    console.log("Sample data created");
  } catch (err) {
    console.error("ERROR", err);
  }
};

setup();

