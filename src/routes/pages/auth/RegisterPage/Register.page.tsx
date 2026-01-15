import { Link } from "@tanstack/react-router"
import { Trans, useTranslation } from "react-i18next"

import { Typography } from "@/components/common/Typography/Typography.component"
import { RegisterForm } from "@/components/forms/RegisterForm/RegisterForm.component"
import { Routes } from "@/routes/router/routes.config"

export const RegisterPage = () => {
  const { t } = useTranslation()
  
  return (
    <div className="bg-popover border-popover-border w-full max-w-md rounded-3xl border p-6 shadow-2xl backdrop-blur-lg">
      <Typography variant="h1">{t("user:register:title")}</Typography>
      <Typography variant="p">{t("user:register:subtitle")}</Typography>
        
      <RegisterForm />

      <div className="flex items-center justify-center">
        <Typography variant="small" className="my-3">
          <Trans i18nKey="user:register:alreadyHaveAccount">
            Already have an account?&nbsp;
            <Link
              to={Routes.PUBLIC.LOGIN}
              className="text-primary text-xs"
            >
              Sign in
            </Link>
          </Trans>
        </Typography>
      </div>
    </div>
  )
}
