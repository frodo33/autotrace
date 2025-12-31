import { act, renderHook } from "@testing-library/react"
import { describe, it, expect, beforeEach, afterEach } from "vitest"

import { useTheme } from "./useTheme"
import { localStorageMock } from "@/tests/utils/localStorageMock"

const resetDOMAndStorage = () => {
  window.localStorage.clear()
  document.documentElement.classList.remove("dark")
}

describe("useTheme", () => {
  let originalLocalStorage: Storage

  beforeEach(() => {
    originalLocalStorage = window.localStorage
    window.localStorage = localStorageMock() as Storage
    resetDOMAndStorage()
  })

  afterEach(() => {
    window.localStorage = originalLocalStorage
    resetDOMAndStorage()
  })

  it("reads initial theme from document class", () => {
    document.documentElement.classList.add("dark")
    const { result } = renderHook(useTheme)
    expect(result.current.theme).toBe("dark")
    expect(localStorage.getItem("mode")).toBe("dark")
  })

  it("toggles theme correctly", () => {
    const { result } = renderHook(useTheme)

    act(() => result.current.toggleTheme())

    expect(result.current.theme).toBe("dark")
    expect(document.documentElement.classList.contains("dark")).toBe(true)
    expect(localStorage.getItem("mode")).toBe("dark")

    act(() => result.current.toggleTheme())

    expect(result.current.theme).toBe("light")
    expect(document.documentElement.classList.contains("dark")).toBe(false)
    expect(localStorage.getItem("mode")).toBe("light")
  })
})
