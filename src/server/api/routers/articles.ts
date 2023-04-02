import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";
import openai, { CompletionResponse } from "npm/server/openai";

export const articleRouter = createTRPCRouter({
  createArticle: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const response = await ctx.prisma.article.create({
        data: {
          title: input.title,
        },
      });
      return {
        response,
      };
    }),

  generate: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log(`generating from openai for article ${input.id}`);

      const article = await ctx.prisma.article.findUnique({
        where: {
          id: input.id,
        },
      });
      console.log("Success on retriving article from database");

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
      console.log("Success on retriving article from openai");

      const openaiImageResponse = await openai.createImage({
        prompt: `Create an image that that would be used in an article about the following topic:${
          article?.title || "error"
        }.`,
        n: 1,
        size: "512x512",
      });
      console.log(
        "Success on retriving image from openai",
        openaiImageResponse.data.data[0]?.url
      );

      const imageResponse = await ctx.prisma.articleImages.create({
        data: {
          articleId: input.id,
          image: openaiImageResponse.data.data[0]?.url || "OPENAI FAILED",
        },
      });

      console.log("success on writing image to database");

      const response = await ctx.prisma.article.update({
        where: {
          id: input.id,
        },
        data: {
          content: openaiResponse.data?.choices[0]?.text || "OPENAI FAILED",
          generated: 1,
        },
      });

      return {
        response,
      };
    }),

  regenerate: publicProcedure
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
  getArticleById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.article.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getArticleByIdWithContent: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.article.findUnique({
        where: {
          id: input.id,
        },
        include: {
          images: true,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    // return ctx.prisma.example.findMany();
    return "example";
  }),
});
