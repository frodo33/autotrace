import { useLogin } from "@/api/auth/hooks/useLogin/useLogin"
import { Button } from "@/components/controls/button/Button.component"
import { Typography } from "@/components/controls/typography/Typography.component"
import { ChangeLanguageForm } from "@/components/features/user-profile/ChangeLanguageForm/ChangeLanguageForm.component"
import { ChangePasswordForm } from "@/components/features/user-profile/ChangePasswordForm/ChangePasswordForm.component"
import { DeleteAccountButton } from "@/components/features/user-profile/DeleteAccountButton/DeleteAccountButton.component"
import { UserDetailsForm } from "@/components/features/user-profile/UserDetailsForm/UserDetailsForm.component"

export const UserProfile = () => {
  const login = useLogin()
  
  return (
    <div className="max-w-100">
      <div className="bg-popover mb-8 flex items-center justify-between gap-4 rounded-2xl p-4 shadow-2xl backdrop-blur-lg">
        <div>
          <Typography variant="h3">Username</Typography>
          <Typography variant="p">test@test.pl</Typography>
        </div>
        <div>
          <Button className="h-12 w-12 rounded-full">
          AV
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <UserDetailsForm />
      </div>

      <div className="border-muted-foreground my-8 border-t" />

      <div className="mb-6">
        <ChangeLanguageForm />
      </div>

      <div className="border-muted-foreground my-8 border-t" />

      <div className="mb-6">
        <ChangePasswordForm />
      </div>

      <div className="border-muted-foreground my-8 border-t" />

      <div className="mb-6">
        <DeleteAccountButton />
      </div>
    </div>
  )
}
