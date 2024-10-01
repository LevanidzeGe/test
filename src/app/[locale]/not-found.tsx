// src/app/[locale]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you&apos;re looking for doesn&apos;t exist. Please check
        the URL or go back to the homepage.
      </p>
      <Link href="/">
        <a
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Go to Home
        </a>
      </Link>
    </div>
  );
}
