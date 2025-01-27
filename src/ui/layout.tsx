/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Navbar } from "./components/NavBar";

export const Layout: FC = (props) => {
  return <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="../../public/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="public/favicon-16x16.png" />
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      <title>Vite + React + TS</title>
    </head>
    <body className="bg-zinc-950 text-zinc-50 h-screen" >
      <Navbar />
      {props.children}
    </body>
  </html>
}
