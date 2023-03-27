import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";

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
    .query(async ({ input, ctx }) => {
      if (!input.text || typeof input.text !== "string") {
        return {
          searchResults: [],
        };
      }

      const searchResults = await ctx.prisma.article.findMany({
        select: {
          id: true,
          title: true,
        },
        where: {
          title: {
            contains: input.text,
          },
        },
      });

      return {
        searchResults,
      };
    }),
  getArticle: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.article.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    // return ctx.prisma.example.findMany();
    return "example";
  }),
});
