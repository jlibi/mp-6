"use client";

import { signIn } from "next-auth/react";

export default function Home() {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <h1>Welcome to the OAuth App!</h1>
            <button
                onClick={() => signIn("github")}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#24292e",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    marginTop: "1rem",
                    cursor: "pointer",
                }}
            >
                Sign in with GitHub
            </button>
        </main>
    );
}
