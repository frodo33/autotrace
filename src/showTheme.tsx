import { useState } from "react"

import { Button } from "@/components/controls/button/Button.component"
import { Typography } from "@/components/controls/typography/Typography.component"

export const GlassDemo = () => {
  const [darkMode, setDarkMode] = useState(false)
  const a: any = ""

  return (
    <div
      className={`${darkMode ? "dark" : ""} text-foreground min-h-screen bg-[image:var(--background-gradient)] p-8 transition-colors duration-300`}
    >
      <h1 className="mb-6 text-3xl font-bold">Glass UI Demo</h1>

      <Button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-primary text-primary-foreground mb-6 rounded px-4 py-2 transition hover:opacity-90"
      >
        Toggle Dark / Light Mode
      </Button>

      <div className="flex flex-col items-center gap-12">
        {/* Light/Dark Card */}
        <div className="bg-popover border-popover-border w-full max-w-sm rounded-3xl border p-8 text-center shadow-2xl backdrop-blur-lg">
          {/* <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 max-w-sm text-center"> */}
          <h2 className="mb-4 text-xl font-bold">Glass Card</h2>
          <p className="mb-6">Przykładowa karta z efektem glassmorphism.</p>

          <div className="mb-6 flex flex-col gap-3">
            <Typography variant="h1">Default</Typography>
            <Typography variant="h2">Default</Typography>
            <Typography variant="h3">Default</Typography>
            <Typography variant="p">Default</Typography>
            <Typography variant="small">Default</Typography>
            <Typography />
          </div>

          <div className="mb-6 flex flex-col gap-3">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <Button variant="default">Default</Button>
            <Button loading={true} variant="destructive">
              Destructive
            </Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
            <Button variant="default" disabled>
              Link
            </Button>
          </div>

          <div className="mb-6 flex flex-col gap-3">
            <Button size="default">Default</Button>
            <Button size="sm">Sm</Button>
            <Button size="lg">Lg</Button>
            <Button size="icon">Icon</Button>
            <Button size="icon-sm">Icon-sm</Button>
            <Button size="icon-lg">Icon-lg</Button>
            <Button size="icon-lg" disabled>
              Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
