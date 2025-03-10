
import { clientTRPC, clientTRPCClient } from "@my-monorepo/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

console.log("Query client is running", clientTRPC);

const queryClient = new QueryClient();

export const QueryProviders = (props: { children: React.ReactNode }) => (
    <clientTRPC.Provider client={clientTRPCClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    </clientTRPC.Provider>
);
