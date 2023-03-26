import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";
import { Article } from "@prisma/client";
import { Observable } from "@trpc/server/observable";

export const articleRouter = createTRPCRouter({
  generate: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        response: `Generated ${input.text}`,
      };
    }),

  search: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input, ctx }) => {
      if (!input.text || typeof input.text) {
        return {
          searchResults: [],
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const searchResults = ctx.prisma.article.findMany({
        select: {
          id: true,
          title: true,
        },
        where: {
          title: {
            contains: "hello",
          },
        },
      });

      return {
        searchResults,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    // return ctx.prisma.example.findMany();
    return "example";
  }),
});
