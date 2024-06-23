import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import data from "./data";
import fs from "fs/promises";
import path from "path";

import type { Resolvers } from "./__generated__/resolvers-types";

const typeDefs = await fs.readFile(
  path.resolve(import.meta.dir, "./schema.graphql"),
  "utf-8"
);

const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello World!",
    categories: async () => {
      const categories = await data.categories.list();
      return categories;
    },
    joke: async (parent, args) => {
      const joke = await data.jokes.getById(args.id);
      return joke;
    },
    randomJoke: async (parent, args) => {
      const joke = await data.jokes.getRandom(args.category);
      return joke;
    },
    searchJokes: async (parent, args) => {
      const searchResult = await data.jokes.search(args.query);
      return searchResult;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = Number(process.env.PORT) || 4000;

await startStandaloneServer(server, { listen: { port } });

console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
