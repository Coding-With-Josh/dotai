import { LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"

const fallback = () => null

export const Icons = {
  gitHub: dynamic(dynamicIconImports["github"], { ssr: false, loading: fallback }),
  google: dynamic(dynamicIconImports["google"], { ssr: false, loading: fallback }),
}