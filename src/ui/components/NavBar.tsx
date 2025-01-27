/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";

interface Props {
}

export const Navbar: FC<Props> = (props: Props) => {
  return <nav className="box-border text-xs lg:text-md w-full p-5 border-b-4 border-dashed border-zinc-700 flex items-center justify-center gap-10" >
    <a href="/">
      <img
        src={"/static/MainNorNoBg.PNG"}
        alt="Nor"
        className="w-20 h-20"
      />
    </a>
    <a href="/">Home</a>
    <a href="/leaderboard">Leader Board</a>
    <a href="https://github.com/NorShell/distro-shill" target="_blank">Github</a>
  </nav>
}
