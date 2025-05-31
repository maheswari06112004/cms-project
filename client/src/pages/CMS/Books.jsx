


import React, { useState, useEffect } from 'react';



import React, { useState } from 'react';


export default function Books() {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    cost: '',
    author: '',

    type: '',
    url: '',  

    type: ''

  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const books = JSON.parse(localStorage.getItem('books') || '[]');


    // Add favorite property default to false on new book
    books.push({ ...form, favorite: false });

    localStorage.setItem('books', JSON.stringify(books));
    setForm({ name: '', quantity: '', cost: '', author: '', type: '', url: '' }); // reset including url
    setShowModal(true);

    books.push(form);
    localStorage.setItem('books', JSON.stringify(books));
    setForm({ name: '', quantity: '', cost: '', author: '', type: '' });
    setShowModal(true); // Show animated popup

  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-300 to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-center text-purple-900 mb-6 drop-shadow">
          📚 Add a New Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: 'name', label: '📖 Book Name' },
            { name: 'quantity', label: '🔢 Quantity', type: 'number' },
            { name: 'cost', label: '💰 Cost', type: 'number' },
            { name: 'author', label: '✍️ Author' },
            { name: 'url', label: '🔗 Official URL (optional)', type: 'url' },
          ].map((field) => (
            <div className="relative" key={field.name}>
              <input
                name={field.name}
                type={field.type || 'text'}
                value={form[field.name]}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 bg-white/90 border border-purple-500 rounded-lg outline-none text-purple-900 focus:ring-2 focus:ring-purple-500"
                {...(field.name !== 'url' ? { required: true } : {})} // all required except url
              />
              <label className="absolute left-4 top-2 text-sm text-purple-700 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-700">
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
              className="peer w-full px-4 pt-5 pb-2 bg-white/90 border border-purple-500 rounded-lg text-purple-900 focus:ring-2 focus:ring-purple-500"
            >
              <option value="" hidden></option>
              <option value="Fiction">📘 Fiction</option>
              <option value="Non-fiction">📗 Non-fiction</option>
              <option value="Comics">🦸 Comics</option>
              <option value="Biography">👤 Biography</option>
              <option value="Other">✨ Other</option>
            </select>
            <label className="absolute left-4 top-2 text-sm text-purple-700 peer-focus:text-sm peer-focus:text-purple-700">
              📂 Book Type
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-400 text-purple-900 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transform transition hover:scale-105"
          >
            ➕ Add Book
          </button>
        </form>
      </div>


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="animate-slideIn bg-white rounded-xl shadow-xl p-5 max-w-xs w-full text-center border-t-4 border-purple-500">
            <div className="text-purple-500 text-3xl mb-2">✅</div>
            <h3 className="text-lg font-bold text-purple-800 mb-1">Book Added!</h3>
            <p className="text-gray-600 mb-3">Saved successfully 📚</p>
            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-purple-600 hover:underline"

      {/* Animated Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center animate-fadeScale">
            <h3 className="text-2xl font-bold text-purple-700 mb-2">🎉 Book Added!</h3>
            <p className="text-gray-600 mb-4">Your book has been successfully saved 📚</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors"

            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(-15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.35s ease-out;
        }
      `}</style>
    </div>
  );
}

