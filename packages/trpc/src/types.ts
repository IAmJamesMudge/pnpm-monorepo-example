import { AnyRouter, inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export type AppRouter = AnyRouter & {
  hello: {
    input: void;
    output: string;
  };
  add: {
    input: { a: number; b: number };
    output: number;
  };
};

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;