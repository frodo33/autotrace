import { Link } from "@tanstack/react-router"
import { Trans, useTranslation } from "react-i18next"

import { Button } from "@/components/controls/button/Button.component"
import { Typography } from "@/components/controls/typography/Typography.component"
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
        <Typography variant="small">
          <Trans
            i18nKey="user:register:alreadyHaveAccount"
            components={{
              link: (
                <Button 
                  variant="link"
                  className="p-0 text-xs"
                  asChild
                >
                  <Link to={Routes.PUBLIC.LOGIN} />
                </Button>
              )
            }}
          />
        </Typography>
      </div>
    </div>
  )
}
