// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import store from "@/store/index";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <ThemeProvider attribute="class">{children}</ThemeProvider>
          </NextUIProvider>
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}
