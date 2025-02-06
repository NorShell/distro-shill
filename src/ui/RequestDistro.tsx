/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";
import { SelectRequestedDistro } from "../models";
import { RequestDistroForm } from "./components/RequestDistroForm";
import { RequestDistroList } from "./components/RequestDistroList";

interface Props {
  requestedDistros: SelectRequestedDistro[]
}


export const RequestDistro: FC<Props> = ({ requestedDistros }: Props) => {
  return <Layout>
    <div className="w-full flex flex-col items-center justify-center px-5 py-10 gap-5">
      <h1 className="text-3xl">Request a New Distro</h1>
      <p className="text-zinc-500">Suggest a new Linux distro to be added to the leaderboard!</p>
      <RequestDistroForm />
      <span>The main reason a distro will be rejected is that I cannot find a transparent bg picture that I can use.</span>
      <div className=" h-2 w-full border-b-4 border-zinc-700 border-dashed "></div>
      <RequestDistroList requestedDistros={requestedDistros} />
    </div>
  </Layout>
}
