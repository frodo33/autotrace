export const envConfig: Record<string, string> = {
  API_HOST_URL: import.meta.env.VITE_API_HOST_URL || "",
  API_HOST_KEY: import.meta.env.VITE_API_HOST_KEY || "",
}