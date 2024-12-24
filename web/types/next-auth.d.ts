// types/next-auth.d.ts

import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        id: string
        email?: string | null
        role: UserRole
    }
    interface Session {
        user: User
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        role: UserRole
    }
}

type UserRole = 'USER' | 'ADMIN' | 'MODERATOR';