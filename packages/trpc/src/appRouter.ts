import { z } from "zod";
import { serverTRPC } from "./serverTRPC";



let value = 0;

export const appRouter = typeof window !== "undefined" ? null : serverTRPC.router({
  hello: serverTRPC.procedure.query(() => `Hello: ${value}`),
  add: serverTRPC.procedure
    .input(z.object({ num: z.number() }))
    .mutation(({ input }) => {
      value += input.num;
      return value;
    }),
});

export type AppRouter = NonNullable<typeof appRouter>;