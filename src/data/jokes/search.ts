import type { Joke } from "../../types/joke";

type JokeSearchResult = {
  total: number;
  result: Joke[];
};

export default async function searchJokes(query: string) {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error("Could not fetch search result");
  }

  const searchResult: JokeSearchResult = await response.json();

  return searchResult;
}
