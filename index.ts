import { makeApi, Zodios } from "@zodios/core";
import { z } from "zod";

const api = makeApi([
  {
    method: "get",
    alias: "getTodo",
    path: "/todos/:id",
    parameters: [
      {
        name: "q",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "page",
        type: "Query",
        schema: z.string(),
      },
    ],
    response: z.object({
      userId: z.number(),
      id: z.number(),
      title: z.string(),
      completed: z.boolean(),
    }),
  },
]);

const client = new Zodios("https://jsonplaceholder.typicode.com", api);

client.getTodo({ params: { id: 12 }, queries: {} });
