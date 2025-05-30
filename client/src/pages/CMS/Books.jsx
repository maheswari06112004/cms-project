// import React, { useState } from 'react';

// export default function Books() {
//     const [form, setForm] = useState({
//         name: '',
//         quantity: '',
//         cost: '',
//         author: '',
//         type: ''
//     });

//     const [showModal, setShowModal] = useState(false);

//     const handleChange = e => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         const books = JSON.parse(localStorage.getItem('books') || '[]');
//         books.push(form);
//         localStorage.setItem('books', JSON.stringify(books));
//         setForm({ name: '', quantity: '', cost: '', author: '', type: '' });
//         setShowModal(true); // Show the popup
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center p-6">
//             <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-purple-200">
//                 <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
//                     📚 Add a New Book
//                 </h2>
//                 <form onSubmit={handleSubmit} className="space-y-5 text-purple-900">
//                     <input
//                         name="name"
//                         placeholder="📖 Book Name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
//                     />
//                     <input
//                         name="quantity"
//                         type="number"
//                         placeholder="🔢 Quantity"
//                         value={form.quantity}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
//                     />
//                     <input
//                         name="cost"
//                         type="number"
//                         placeholder="💰 Cost"
//                         value={form.cost}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
//                     />
//                     <input
//                         name="author"
//                         placeholder="✍️ Author"
//                         value={form.author}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
//                     />
//                     <select
//                         name="type"
//                         value={form.type}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
//                     >
//                         <option value="">📂 Select Type</option>
//                         <option value="Fiction">📘 Fiction</option>
//                         <option value="Non-fiction">📗 Non-fiction</option>
//                         <option value="Comics">🦸 Comics</option>
//                         <option value="Biography">👤 Biography</option>
//                         <option value="Other">✨ Other</option>
//                     </select>
//                     <button
//                         type="submit"
//                         className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-transform transform hover:scale-105"
//                     >
//                         ➕ Add Book
//                     </button>
//                 </form>
//             </div>

//             {/* Popup Modal */}
//             {showModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center animate-bounce">
//                         <h3 className="text-xl font-bold text-purple-700 mb-2">🎉 Book Added!</h3>
//                         <p className="text-gray-600">Your book has been successfully saved 📚</p>
//                         <button
//                             onClick={() => setShowModal(false)}
//                             className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


import React, { useState, useContext } from "react";
import { BooksContext } from "./BooksContext";

export default function Books() {
  const { addBook } = useContext(BooksContext);

  const [form, setForm] = useState({
    name: "",
    quantity: "",
    cost: "",
    author: "",
    type: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(form);
    setForm({ name: "", quantity: "", cost: "", author: "", type: "" });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-purple-200">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          📚 Add a New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 text-purple-900">
          <input
            name="name"
            placeholder="📖 Book Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
          />
          <input
            name="quantity"
            type="number"
            placeholder="🔢 Quantity"
            value={form.quantity}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
          />
          <input
            name="cost"
            type="number"
            placeholder="💰 Cost"
            value={form.cost}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
          />
          <input
            name="author"
            placeholder="✍️ Author"
            value={form.author}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
          >
            <option value="">📂 Select Type</option>
            <option value="Fiction">📘 Fiction</option>
            <option value="Non-fiction">📗 Non-fiction</option>
            <option value="Comics">🦸 Comics</option>
            <option value="Biography">👤 Biography</option>
            <option value="Other">✨ Other</option>
          </select>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-transform transform hover:scale-105"
          >
            ➕ Add Book
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center animate-bounce">
            <h3 className="text-xl font-bold text-purple-700 mb-2">🎉 Book Added!</h3>
            <p className="text-gray-600">Your book has been successfully saved 📚</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

