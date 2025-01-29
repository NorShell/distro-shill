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

export async function getTwoDistros(db: D1Database) {

  const queryResult = await db.prepare(`
  SELECT * 
  FROM DISTRO
  ORDER BY score DESC
`).all<SelectDistro>()

  const distros = queryResult.results

  const randomIdx = Math.floor(Math.random() * distros.length);
  const startIdx = Math.max(randomIdx - 2, 0);
  const endIdx = Math.min(randomIdx + 2, distros.length - 1);
  const range = distros.slice(startIdx, endIdx + 1);

  const selectedDistros: SelectDistro[] = [];
  while (selectedDistros.length < 2) {
    const randomDistro = range[Math.floor(Math.random() * range.length)];
    if (selectedDistros.indexOf(randomDistro) === -1)
      selectedDistros.push(randomDistro);
  }

  return selectedDistros;

}
