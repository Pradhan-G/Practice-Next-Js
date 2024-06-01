import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

export const metadata = {
  title: "Practice JS",
  description: "Created by Abishek Pradhan for practice",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
