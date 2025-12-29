import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import { getPosts } from "./posts.api"
// import { PostResponseModel, PostPayload } from "./posts.types"

export const usePosts = () => {
  const queryClient = useQueryClient()

  const postsQuery = useQuery<PostResponseModel[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
    onError: (error) => {
      console.error("Failed to fetch posts:", error.message)
    },
  })

  // const addPost = useMutation<PostResponseModel, Error, PostPayload>(createPost, {
  //   onError: (error) => {
  //     console.error("Failed to create post:", error.message)
  //   },
  //   onSuccess: () => queryClient.invalidateQueries(["posts"]),
  // })

  return { postsQuery }
}
