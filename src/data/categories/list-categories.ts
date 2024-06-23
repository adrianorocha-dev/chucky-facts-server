export default async function listCategories() {
  const response = await fetch("https://api.chucknorris.io/jokes/categories", {
    cache: "force-cache",
  });

  if (!response.ok) {
    return [];
  }

  const categories: string[] = await response.json();

  return categories;
}
