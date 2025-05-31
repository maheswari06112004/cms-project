

import React, { useEffect, useState } from 'react';

export default function FavoritePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books') || '[]');
    setBooks(storedBooks);
  }, []);

  const toggleFavorite = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].favorite = !updatedBooks[index].favorite;
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const deleteBook = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');
    if (!confirmDelete) return;

    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  // Silent update of localStorage ONLY, no UI button or alert
  useEffect(() => {
    let storedBooks = JSON.parse(localStorage.getItem('books') || '[]');

    if (storedBooks.length > 0) {
      storedBooks[0].name = "Updated Book Name (LocalStorage Only)";
      // Add other changes if needed
      localStorage.setItem('books', JSON.stringify(storedBooks));
      // UI state not updated, so UI won't change until reload
    }
  }, []); // runs once after component mounts

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-8 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-10 drop-shadow-md">
        Book Collection 📚
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl">
        {books.map((book, index) => (
          <div
            key={index}
            className={`relative group p-6 rounded-3xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              book.favorite
                ? 'bg-gradient-to-br from-purple-200 via-pink-100 to-purple-100 border-purple-500 shadow-lg'
                : 'bg-white border-purple-300 shadow-md'
            }`}
          >
         
            <button
              onClick={() => deleteBook(index)}
              className="absolute top-3 right-3 bg-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
              title="Delete Book"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

        
            <div onClick={() => toggleFavorite(index)} className="cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-purple-800">{book.name}</h2>
                {book.favorite && <span className="text-2xl animate-pulse">⭐</span>}
              </div>
              <p className="text-gray-800 text-sm mb-1">
                ✍️ <strong>Author:</strong> {book.author}
              </p>
              <p className="text-gray-800 text-sm mb-1">
                📂 <strong>Type:</strong> {book.type}
              </p>
              <p className="text-gray-800 text-sm mb-1">
                💰 <strong>Cost:</strong> ₹{book.cost}
              </p>
              <p className="text-gray-800 text-sm mb-1">
                🔢 <strong>Quantity:</strong> {book.quantity}
              </p>

          
              {book.favorite && book.url && (
                <p className="text-purple-700 text-sm mt-2">
                  🔗 Official site:{' '}
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-purple-900"
                    onClick={e => e.stopPropagation()} 
                  >
                    Visit Here
                  </a>
                </p>
              )}

              <div className="mt-5 text-right font-medium text-purple-600 text-sm italic">
                {book.favorite ? '💜 Unfavorite' : '🤍 Favorite'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
