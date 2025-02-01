/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { SelectRequestedDistro } from "../../models";

interface Props {
  requestedDistros: SelectRequestedDistro[]
}


export const RequestDistroList: FC<Props> = ({ requestedDistros }: Props) => {

  if (requestedDistros.length === 0) {
    return <span>No new distros requested so far ... </span>
  }

  return <section className="flex flex-col items-center justify-center gap-5 " >
    <h2>Distros that people want</h2>
    <div className="grid grid-cols-2 gap-5 text-zinc-500">
      <div>Distro</div>
      <div>Status</div>
    </div>
    {requestedDistros.map(d => <div className="grid grid-cols-2 gap-5">
      <div>{d.name}</div>
      <div className="text-zinc-500" >{d.status.toUpperCase()}</div>
    </div>)}
  </section>
}
