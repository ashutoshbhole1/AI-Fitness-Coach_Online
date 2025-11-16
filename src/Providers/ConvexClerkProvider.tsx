"use client"

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import React from 'react';


function ConvexClerkProvider({ children }: { children: React.ReactNode }) {
    // Create the Convex client lazily inside the client component so
    // it isn't instantiated at module-evaluation time (which runs during
    // Next.js prerender/build). If NEXT_PUBLIC_CONVEX_URL isn't set in the
    // environment (e.g. on Vercel), this avoids throwing during prerender.
    const convex = React.useMemo(() => {
        const url = process.env.NEXT_PUBLIC_CONVEX_URL;
        if (!url) return null;
        try {
            return new ConvexReactClient(url);
        } catch (e) {
            // If the URL is malformed, don't crash the whole app during prerender.
            // We'll render without Convex functionality so the app can still show.
            // You can log to Sentry or console here if desired.
            // eslint-disable-next-line no-console
            console.error('Failed to construct ConvexReactClient:', e);
            return null;
        }
    }, []);

    // If we don't have a convex client (missing env var at build/deploy),
    // render Clerk only so pages can prerender. When deployed correctly with
    // NEXT_PUBLIC_CONVEX_URL present, Convex features will be enabled.
    if (!convex) {
        return (
            <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
                {children}
            </ClerkProvider>
        );
    }

    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
export default ConvexClerkProvider;




