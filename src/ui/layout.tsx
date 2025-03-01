/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Fragment } from "hono/jsx/dom";

export const Layout: FC = (props) => {
  return <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/static/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="public/favicon-16x16.png" />
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      <link rel="stylesheet" href="/static/main.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/loading-states.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
      <title>DISTRO SHILL</title>
    </head>
    <body id="content" className="bg-zinc-950 text-zinc-50 h-screen flex flex-col justify-between items-center " >
      <Navbar />
      {props.children}
      <Footer />
    </body>
  </html>
}
