import type { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

import type { ApiErrorResponse } from "@/api/api.types"

export const useFormErrorHandler = <T extends FieldValues>(form: UseFormReturn<T>) => {
  const { t } = useTranslation()
  
  const handleError = (err: unknown) => {
    const error = err as ApiErrorResponse
    const { validationErrors, message } = error

    if (validationErrors) {
      Object.entries(validationErrors).forEach(([field, fieldErrors]) => {
        form.setError(field as Path<T>, {
          type: "manual",
          message: fieldErrors
            .map(key => t(`errors:validation:${key}`))
            .join("\n")
        });
      });
    } else {
      toast.error(message ?? t("errors:unexpected"))
    }
  }

  return { handleError }
}