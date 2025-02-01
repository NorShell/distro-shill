
/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";

interface Props {
}


export const RequestDistroForm: FC<Props> = ({ }: Props) => {
  return <form method="post" action="/request-distro" className="w-full max-w-md flex flex-col gap-4">
    <input type="text" name="name" placeholder="Distro Name" required className="border-4 border-zinc-700 border-dashed p-2 w-full outline-none" />
    <button type="submit" className="border-4 border-zinc-700 border-dashed p-2 w-full outline-none hover:border-zinc-400">
      Submit Request
    </button>
  </form>

}
