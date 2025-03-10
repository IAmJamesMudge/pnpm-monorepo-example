import { clientTRPC } from "@my-monorepo/trpc"


export const AppRouterTest = () => {
    const utils = clientTRPC.useUtils();
    const helloQuery = clientTRPC.hello.useQuery();
    const addMutation = clientTRPC.add.useMutation({
      onSuccess: () => {
        utils.hello.invalidate(); // This forces `hello` to refetch
      },
    });
  
    return (
      <div>
        <h1>Testing App Router</h1>
        <p>{helloQuery.data || "Loading..."}</p>
        <button onClick={() => addMutation.mutate({ num: 1 })}>
          Add 1
        </button>
      </div>
    );
}