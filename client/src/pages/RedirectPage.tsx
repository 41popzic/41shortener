import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RedirectPage() {
    const { code } = useParams();

    useEffect(() => {
        async function getLink() {
            const response = await fetch(
                `http://localhost:3000/api/links/${code}`
            );

            if (!response.ok) {
                return;
            }

            const data = await response.json();

            window.location.href = data.url;
        }

        getLink();
    }, [code]);

    return <p>Redirecting...</p>;
}

export default RedirectPage;