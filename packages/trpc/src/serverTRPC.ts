import { initTRPC } from "@trpc/server";


const serverTRPC = (typeof window !== "undefined" ? null : initTRPC.create()) as ReturnType<typeof initTRPC.create>;


export { serverTRPC };