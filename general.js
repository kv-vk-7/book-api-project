const axios = require('axios');

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:3000/books');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`http://localhost:3000/books/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN
};
