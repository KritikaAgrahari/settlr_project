export default {
    providers: [
        {
            // got this key while making jwt template
            // domain:process.env.CLERK_JWT_ISSUER_DOMAIN,
            domain: process.env.CLERK_JWT_ISSUER_DOMAIN,

            applicationID:"convex",
        },
    ],

        };
    
