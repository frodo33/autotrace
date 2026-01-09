import { yupResolver } from "@hookform/resolvers/yup"
import type { TFunction } from "i18next"
import type { FieldValues } from "react-hook-form"
import { useTranslation } from "react-i18next"
import type { ObjectSchema } from "yup"

export const useYupResolver = <T extends FieldValues>(
  schema: (t: TFunction) => ObjectSchema<T>
) => {
  const { t } = useTranslation()

  return yupResolver(schema(t))
}