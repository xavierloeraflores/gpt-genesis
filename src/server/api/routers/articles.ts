import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";
import openai, { CompletionResponse } from "npm/server/openai";

export const articleRouter = createTRPCRouter({
  generate: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log("generating from openai", input.text);
      const openaiResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You are an AI that produces articles about different topics similar to Wikipedia articles. Generate an article about the following topic:${input.text}.`,
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 0.9,
        n: 1,
        stream: false,
        logprobs: null,
        stop: null,
      });
      console.log("received from openai", openaiResponse);
      console.log("Writing to database", openaiResponse.data?.choices[0]?.text);

      const response = await ctx.prisma.article.create({
        data: {
          title: input.text,
          content: openaiResponse.data?.choices[0]?.text || "GPT FAILED",
        },
      });

      return {
        response,
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
      console.log("searchResults", searchResults);

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
