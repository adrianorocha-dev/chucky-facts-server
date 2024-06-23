import type { Joke } from "../../types/joke";

export default async function getJokeById(id: string) {
  const response = await fetch(`https://api.chucknorris.io/jokes/${id}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    return null;
  }

  const joke = (await response.json()) as Joke;

  return joke;
}
