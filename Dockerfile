FROM oven/bun:1.1

WORKDIR /app

COPY package.json package.json
COPY bun.lockb bun.lockb

RUN bun install

COPY ./src ./src
COPY codegen.yml codegen.yml
COPY tsconfig.json tsconfig.json

EXPOSE 4000

CMD ["bun", "start"]