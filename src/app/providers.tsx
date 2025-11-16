"use client";

import ConvexClerkProvider from "@/Providers/ConvexClerkProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ConvexClerkProvider>{children}</ConvexClerkProvider>;
}
