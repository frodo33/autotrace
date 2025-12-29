import { usePosts } from "@/api/posts/posts.hooks"

export const DashboardPage = () => {
  const { postsQuery } = usePosts()
  const { data: posts, isLoading, error } = postsQuery

  console.log(posts, "lelelel", isLoading, error)
  return (
    <>
    DashboardPage
    </>
  )
}
