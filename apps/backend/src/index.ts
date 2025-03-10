import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRouter, fastifyTRPCPlugin } from "@my-monorepo/trpc";


const fastify = Fastify({ logger: true });

fastify.register(cors);

fastify.register(fastifyTRPCPlugin as any, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter },
});

fastify.listen({ port: 4000 }, () => {
  console.log("🚀 Server running on http://localhost:4000");
});
