import { useState } from "react";

function Home() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [customCode, setCustomCode] = useState("");

    

    async function shorten() {
        const response = await fetch(
            "http://localhost:3000/api/links",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url,
                    customCode,
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            alert(data.error);
            return;
        }

        setShortUrl(
            `http://localhost:5173/${data.code}`
        );
    }

    return (
        <div>
            <h1>Link Shortener</h1>

            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
            />
            <input
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                placeholder="Custom URL (optional)"
            />

            <button onClick={shorten}>
                Shorten
            </button>

            {shortUrl && (
                <p>
                    Short URL: {shortUrl}
                </p>
            )}
        </div>
    );
}

export default Home;