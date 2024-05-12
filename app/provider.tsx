// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import store from "@/store/index";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </NextUIProvider>
    </Provider>
  );
}
