import "./globals.css";

export const metadata = {
  title: "Practice JS",
  description: "Created by Abishek Pradhan for practice",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
