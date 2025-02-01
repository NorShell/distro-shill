/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";

interface Props {
}

export const Navbar: FC<Props> = (props: Props) => {
  return <nav className="box-border text-xs lg:text-lg w-full p-5 border-b-4 border-dashed border-zinc-700 flex items-center justify-center gap-10" >
    <a href="https://x.com/NorDotShell" target="_blank" >
      <img
        src={"/static/MainNorNoBg.PNG"}
        alt="Nor"
        className="w-14 h-14 lg:w-20 lg:h-20"
      />
    </a>
    <a href="/pick">Shill</a>
    <a href="/leaderboard">Leaderboard</a>
    <a href="/request-distro">Add a distro</a>
  </nav>
}
