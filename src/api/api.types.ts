export type ApiErrorResponse = {
  status: number;
  error: string;
  message: string;
  code?: string | null;
  details?: unknown;
  validationErrors?: Record<string, string[]>;
};