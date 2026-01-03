import { createClient } from "@supabase/supabase-js";

import { envConfig } from "@/app.config";

export const supabase = createClient(envConfig.API_HOST_URL, envConfig.API_HOST_KEY)