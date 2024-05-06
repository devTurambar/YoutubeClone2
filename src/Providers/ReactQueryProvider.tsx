"use client"
import { ReactNode } from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

function ReactQueryProvider({ children }: { children: ReactNode }){
    const [queryClient] = useState(() => new QueryClient());
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
export default ReactQueryProvider;