import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const { handlers, auth }=NextAuth(
    {
        providers: [GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,

            profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    username: profile.login,
                };
            }
        }),
        ],
        secret: process.env.AUTH_SECRET,
        callbacks: {
            async redirect({ baseUrl }) {
                return `${baseUrl}/welcome`;
            }
        }
    }
);