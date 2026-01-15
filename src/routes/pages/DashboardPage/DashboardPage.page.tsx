import { usePosts } from "@/api/posts/posts.hooks"
import { useAuthStore } from "@/store/auth/auth.store"

export const DashboardPage = () => {
  const { postsQuery } = usePosts()
  const { data: posts, isLoading, error } = postsQuery

  console.log("STORE DASHBOARD", useAuthStore.getState())
  console.log(posts, "lelelel", isLoading, error)
  return (
    <div className="flex flex-wrap">
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
      <div className="bg-primary m-4 h-50 w-full"></div>
    </div>
  )
}
