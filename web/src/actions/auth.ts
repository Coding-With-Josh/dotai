import { signIn } from "@/lib/auth"
import { useRouter } from "next/navigation"

export const useAuth = () => {
    const login = async ({email, password}: {email: string, password: string}) => {
        // TODO: Implement sign in logic with pisma db
        signIn('credentials', {
            email,
            password,
            redirect: false
        })
        await prisma?.user.create({
            data: {
                email,
                password
            }
        })
    }
}
  