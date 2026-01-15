import type { TFunction } from "i18next"
import * as yup from "yup"

import type { LoginFormState } from "./LoginForm.types"

export const LoginFormSchema = (t: TFunction): yup.ObjectSchema<LoginFormState> => (
  yup.object().shape({
    password: yup
      .string()
      .required(t("errors:validation.field_required")),
    email: yup
      .string()
      .email(t("errors:validation:email_invalid"))
      .required(t("errors:validation:field_required")),
  })
)
