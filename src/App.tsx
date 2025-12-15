import { Button } from "./components/controls/button/Button.component"
import { LoginHeader } from "./components/examples/pageheader"
import { PublicLayout } from "./PublicLayout"
import { GlassDemo } from "./showTheme"

export type Asdf = {
  asdf: string
}

export const App = ({ asdf }: Asdf) => (
  <>
    <PublicLayout>
      <div className="bg-popover border-popover-border w-full max-w-sm rounded-3xl border p-8 text-center shadow-2xl backdrop-blur-lg">
        tutaj login form
        <Button type="submit">submit</Button>
      </div>
    </PublicLayout>
    <GlassDemo />
  </>
)
