import { Link } from "@tanstack/react-router"
import { Trans, useTranslation } from "react-i18next"

import { Typography } from "@/components/common/Typography/Typography.component"
import { LoginForm } from "@/components/forms/LoginForm/LoginForm.component"
import { Routes } from "@/routes/router/routes.config"

export const LoginPage = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <div className="bg-popover border-popover-border w-full max-w-md rounded-3xl border p-6 shadow-2xl backdrop-blur-lg">
        <Typography variant="h1">
          {t("user:login:title")}
        </Typography>

        <Typography variant="p">
          {t("user:login:subtitle")}
        </Typography>
        
        <LoginForm />
        
        <div className="flex items-center justify-center">
          <Typography variant="small" className="my-3">
            <Trans i18nKey="user:login:noAccountPrompt">
              Don&apos;t have an account?&nbsp;
              <Link
                to={Routes.PUBLIC.REGISTER}
                className="text-primary text-xs"
              >
                Sign up
              </Link>
            </Trans>
          </Typography>
        </div>
      </div>
    </>
  )
}
