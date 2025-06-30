import { DataTypes } from "sequelize";
import sequelize from "../databases/database.js";
import Author from "./Author.js";

const Book = sequelize.define('Book', {
    title : {
        type : DataTypes.STRING,
    },
    publicationYear : {
        type : DataTypes.INTEGER,
    },
    pages : {
        type : DataTypes.INTEGER,
    },
});

Author.hasMany(Book);
Book.belongsTo(Author);

export default Book;