import "../globals.css";
import "/public/assets/css/style.css";

export const metadata = {
    title: "User Profile",
    description: "Generated by BitWave Bio",
};

export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
