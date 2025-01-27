/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { FC } from "hono/jsx";
import { Layout } from "./layout";

export const Pick: FC = (props) => {
  return <Layout>
    <h1>Hello from pick a distro</h1>
    <a href="/app/pick" >Pick another</a>
  </Layout>
}
