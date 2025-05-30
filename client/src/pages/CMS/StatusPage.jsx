import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";

const purplePalette = ["#7C3AED", "#A78BFA", "#C4B5FD", "#F3E8FF"];

function StatusPage() {
  const { books } = useContext(BooksContext);

  const cartCount = books.length; // total books in "cart"

  const stats = [
    { label: "Active Users", value: 1240 },
    { label: "New Signups", value: 87 },
    { label: "Revenue ($)", value: 5320 },
    { label: "Bounce Rate", value: "23%" },
    { label: "Books in Cart", value: cartCount },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #F3E8FF 0%, #C4B5FD 100%)",
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: 500,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 16px rgba(124,58,237,0.10)",
          padding: "32px 28px",
        }}
      >
        <h2
          style={{
            color: "#7C3AED",
            fontWeight: 800,
            fontSize: "2rem",
            marginBottom: 8,
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Status Overview
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
            margin: "32px 0 24px 0",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: purplePalette[i % purplePalette.length],
                borderRadius: 12,
                padding: "18px 0",
                textAlign: "center",
                color: "#fff",
                fontWeight: 600,
                boxShadow: "0 1px 6px rgba(124,58,237,0.07)",
              }}
            >
              <div style={{ fontSize: "1.7rem", fontWeight: 700 }}>{stat.value}</div>
              <div style={{ fontSize: "1rem", opacity: 0.85 }}>{stat.label}</div>
            </div>
          ))}
        </div>
        {/* You can add more UI or buttons here if needed */}
      </div>
    </div>
  );
}

export default StatusPage;
