import { Inter } from "next/font/google";

import { Meta } from "@/layouts/Meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <main className={inter.className}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
