import React from 'react';

const developers = [
    {
        name: 'Maheswari',
        role: 'Team Lead',
        photo: '/mahes.jpg',
        description: 'Frontend Developer.',
    },
    {
        name: 'Josika',
        role: 'Team Member',
        photo: '/josika.jpg',
        description: 'Frontend Developer.',
    },
];

export default function Developerspage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 py-12 px-4 font-sans">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
                <h1 className="text-4xl font-extrabold mb-2 text-purple-800 text-center drop-shadow">
                    Meet Our Developers
                </h1>
                <p className="mb-10 text-purple-600 text-center text-lg">
                    Passionate people building awesome things together.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {developers.map((dev) => (
                        <div
                            key={dev.name}
                            className="bg-gradient-to-tr from-purple-50 to-white rounded-xl shadow-md p-8 flex flex-col items-center border border-purple-100 hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={dev.photo}
                                alt={dev.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-purple-400 mb-4 shadow"
                            />
                            <h2 className="text-2xl font-bold text-purple-800 mb-1">{dev.name}</h2>
                            <p className="text-purple-600 font-medium mb-2">{dev.role}</p>
                            <p className="text-purple-500 text-center">{dev.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
