import { SelectDistro } from "../models";

export async function getTwoRandomDistros(db: D1Database) {
  const { results } = await db.prepare(`
  SELECT * 
  FROM DISTRO 
  ORDER BY RANDOM() 
  LIMIT 2;
`).all<SelectDistro>()

  return results

}

export async function getAllDistros(db: D1Database) {

  const { results } = await db.prepare(`
  SELECT * 
  FROM DISTRO 
  ORDER BY score DESC
`).all<SelectDistro>()

  return results

}

export async function increment(db: D1Database, distroId: string) {
  await db.prepare(`
  UPDATE DISTRO
  SET upvotes = upvotes + 1,
      score = score + 1
  WHERE id = ?;
`).bind(distroId).run();
}

export async function decrement(db: D1Database, distroId: string) {
  await db.prepare(`
  UPDATE DISTRO
  SET downvotes = downvotes + 1,
      score = score - 1
  WHERE id = ?;
`).bind(distroId).run();
}
