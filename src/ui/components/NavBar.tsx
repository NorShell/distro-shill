/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import { FC } from "hono/jsx";

interface Props { }

export const Navbar: FC<Props> = (props: Props) => {
  return (
    <nav
      x-data="{ isOpen: false }"
      className="box-border text-xs lg:text-lg w-full p-5 border-b-4 border-dashed border-zinc-700"
    >
      <div className="flex items-center justify-between lg:justify-center gap-10">
        <a href="https://x.com/NorDotShell" target="_blank">
          <img
            src={"/static/MainNorNoBg.PNG"}
            alt="Nor"
            className="text-xl w-14 h-14 lg:w-20 lg:h-20"
          />
        </a>
        <span className="flex-1" ></span>
        <a
          className="hidden lg:inline"
          hx-target="#content"
          hx-get="/"
          hx-swap="outerHTML"
        >Home</a>
        <a
          className="hidden lg:inline"
          hx-target="#content"
          hx-get="/pick"
          hx-swap="outerHTML"
        >Shill</a>
        <a
          className="hidden lg:inline"
          hx-target="#content"
          hx-get="/leaderboard"
          hx-swap="outerHTML"
        >Leaderboard</a>
        <a
          className="hidden lg:inline"
          hx-target="#content"
          hx-get="/request-distro"
          hx-swap="outerHTML"
        >Add a distro</a>
        <a
          href="https://github.com/NorShell/distro-shill"
          target="_blank"
          className="hidden lg:inline"
        >Github</a>
        <button
          className="lg:hidden"
          x-on:click="isOpen  = !isOpen"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
      <div
        x-show="isOpen"
        className="fixed inset-0 bg-black/50"></div>
      <div 
        x-show="isOpen"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 -translate-x-full"
        x-transition:enter-end="opacity-100 translate-x-0"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100 translate-x-0"
        x-transition:leave-end="opacity-0 -translate-x-full"
        className="fixed inset-0 z-50 lg:hidden"
        x-on:click="isOpen = false"
      >
        <div className="box-border fixed inset-y-0 left-0 w-64 bg-zinc-950 shadow-lg h-screen border-4 border-dashed border-zinc-700">
          <div className="flex flex-col gap-5 text-zinc-50">
            <a className="w-full flex items-center justify-center border-b-4 border-dashed border-zinc-700 " href="https://x.com/NorDotShell" target="_blank">
              <img
                src={"/static/MainNorNoBg.PNG"}
                alt="Nor"
                className="w-24 h-24"
              />
            </a>
            <a
              x-on:click="isOpen = false"
              hx-target="#content"
              hx-get="/"
              hx-swap="outerHTML"
              className="text-lg box-border border-b-4 border-dashed border-zinc-700 p-2 pb-6"
            >Home</a>
            <a
              x-on:click="isOpen = false"
              hx-target="#content"
              hx-get="/pick"
              hx-swap="outerHTML"
              className="text-lg box-border border-b-4 border-dashed border-zinc-700 p-2 pb-6"
            >Shill</a>
            <a
              x-on:click="isOpen = false"
              hx-target="#content"
              hx-get="/leaderboard"
              hx-swap="outerHTML"
              className="text-lg box-border border-b-4 border-dashed border-zinc-700 p-2 pb-6"
            >Leaderboard</a>
            <a
              x-on:click="isOpen = false"
              hx-target="#content"
              hx-get="/request-distro"
              hx-swap="outerHTML"
              className="text-lg box-border border-b-4 border-dashed border-zinc-700 p-2 pb-6"
            >Add a distro</a>
            <a
              href="https://github.com/NorShell/distro-shill"
              target="_blank"
              x-on:click="isOpen = false"
              className="text-lg box-border border-b-4 border-dashed border-zinc-700 p-2 pb-6"
            >Github</a>
          </div>
        </div>
      </div>
    </nav >
  );
}
