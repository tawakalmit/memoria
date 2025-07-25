import "./globals.css";

export const metadata = {
  title: "My Photo Album",
  description: "A simple photo album application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="max-w-[431px] mx-auto w-full">
        {children}
      </body>
    </html>
  );
}
