import type { TFunction } from "i18next"
import * as yup from "yup"

import type { RegisterFormState } from "./RegisterForm.types"
import { passwordRules } from "@/utils/passwordRules"

export const RegisterFormSchema = (t: TFunction): yup.ObjectSchema<RegisterFormState> => (
  yup.object().shape({
    cPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("errors:validation:password_not_match"))
      .required(t("errors:validation:field_required")),
    email: yup
      .string()
      .email(t("errors:validation:email_invalid"))
      .required(t("errors:validation:field_required")),
    username: yup
      .string()
      .required(t("errors:validation:field_required")),
    password: yup
      .string()
      .required(t("errors:validation:field_required"))
      .min(passwordRules.minLength, t("errors:validation:password_too_short", { count: passwordRules.minLength }))
      .matches(passwordRules.uppercase, t("errors:validation:password_uppercase_required"))
      .matches(passwordRules.number, t("errors:validation:password_number_required"))
      .matches(passwordRules.symbol, t("errors:validation:password_symbol_required")),
  })
)