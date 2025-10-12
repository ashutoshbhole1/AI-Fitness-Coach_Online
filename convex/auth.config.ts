// https://busy-turkey-76.clerk.accounts.dev

export default {
  providers: [
    {
      // Replace with your own Clerk Issuer URL from your "convex" JWT template
      // or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
      // and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      
      domain: "https://busy-turkey-76.clerk.accounts.dev", // or use this url https://busy-turkey-76.clerk.accounts.dev
      // domain: process.env.CLERK_JWT_ISSUER_DOMAIN, // or use this url https://busy-turkey-76.clerk.accounts.dev
      applicationID: "convex",
    },
  ]
};