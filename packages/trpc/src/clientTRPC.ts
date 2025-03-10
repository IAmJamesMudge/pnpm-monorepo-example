import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "./appRouter";


export const clientTRPC = createTRPCReact<AppRouter>();


export const clientTRPCClient = clientTRPC.createClient({
    links: [httpBatchLink({ url: "http://localhost:4000/trpc" })],
});