import type { Joke } from "../../types/joke";

export default async function getRandomJoke(category?: string | null) {
  const url = new URL("https://api.chucknorris.io/jokes/random");
  if (category) {
    url.searchParams.set("category", category);
  }

  const response = await fetch(url, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Could not fetch random joke");
  }

  const joke = (await response.json()) as Joke;

  return joke;
}
