"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  if (!mounted) {
    return children;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
