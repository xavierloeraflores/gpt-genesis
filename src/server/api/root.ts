import { createTRPCRouter } from "npm/server/api/trpc";
import { articleRouter } from "npm/server/api/routers/articles";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  articles: articleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
