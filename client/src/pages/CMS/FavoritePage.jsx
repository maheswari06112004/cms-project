// import React, { useEffect, useState } from 'react';

// export default function FavoritePage() {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const storedBooks = JSON.parse(localStorage.getItem('books') || '[]');
//         setBooks(storedBooks);
//     }, []);

//     const toggleFavorite = (index) => {
//         const updatedBooks = [...books];
//         updatedBooks[index].favorite = !updatedBooks[index].favorite;
//         setBooks(updatedBooks);
//         localStorage.setItem('books', JSON.stringify(updatedBooks));
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-6 flex flex-col items-center">
//             <h1 className="text-4xl font-bold text-purple-700 mb-8">❤️Favorite Books</h1>
//             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl">
//                 {books.map((book, index) => (
//                     <div
//                         key={index}
//                         onClick={() => toggleFavorite(index)}
//                         className={`cursor-pointer p-5 rounded-2xl transition-all transform hover:scale-105 border ${
//                             book.favorite
//                                 ? 'bg-purple-200 border-purple-500 shadow-xl'
//                                 : 'bg-white border-purple-300 shadow-sm'
//                         }`}
//                     >
//                         <div className="flex justify-between items-center mb-2">
//                             <h2 className="text-lg font-bold text-purple-800">{book.name}</h2>
//                             {book.favorite && <span className="text-xl">⭐</span>}
//                         </div>
//                         <p className="text-sm text-gray-700">✍️ <strong>Author:</strong> {book.author}</p>
//                         <p className="text-sm text-gray-700">📂 <strong>Type:</strong> {book.type}</p>
//                         <p className="text-sm text-gray-700">💰 <strong>Cost:</strong> ₹{book.cost}</p>
//                         <p className="text-sm text-gray-700">🔢 <strong>Qty:</strong> {book.quantity}</p>
//                         <div className="mt-3 text-right text-purple-600 text-sm">
//                             {book.favorite ? '💜 Tap to Unfavorite' : '🤍 Tap to Favorite'}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";

export default function FavoritePage() {
  const { books, toggleFavorite } = useContext(BooksContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">❤️ Favorite Books</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl">
        {books.map((book, index) => (
          <div
            key={index}
            onClick={() => toggleFavorite(index)}
            className={`cursor-pointer p-5 rounded-2xl transition-all transform hover:scale-105 border ${
              book.favorite
                ? "bg-purple-200 border-purple-500 shadow-xl"
                : "bg-white border-purple-300 shadow-sm"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-purple-800">{book.name}</h2>
              {book.favorite && <span className="text-xl">⭐</span>}
            </div>
            <p className="text-sm text-gray-700">
              ✍️ <strong>Author:</strong> {book.author}
            </p>
            <p className="text-sm text-gray-700">
              📂 <strong>Type:</strong> {book.type}
            </p>
            <p className="text-sm text-gray-700">
              💰 <strong>Cost:</strong> ₹{book.cost}
            </p>
            <p className="text-sm text-gray-700">
              🔢 <strong>Qty:</strong> {book.quantity}
            </p>
            <div className="mt-3 text-right text-purple-600 text-sm">
              {book.favorite ? "💜 Tap to Unfavorite" : "🤍 Tap to Favorite"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

