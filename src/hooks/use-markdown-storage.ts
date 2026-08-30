import { useEffect, useRef, useState } from "react"

const STORAGE_KEY = "md-editor:content"
const DEFAULT_CONTENT = `# Bienvenido al editor

Escribe **Markdown** a la izquierda y mira el resultado a la derecha.

- Soporta listas
- Soporta \`código\`
- Soporta tablas de GFM

\`\`\`ts
const saludo = (nombre: string) => \`Hola, \${nombre}!\`
\`\`\`
`

export function useMarkdownStorage(delayMs = 400) {
  const [content, setContent] = useState<string>(() => {
    if (typeof window === "undefined") return DEFAULT_CONTENT
    return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_CONTENT
  })
  const [savedAt, setSavedAt] = useState<Date | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, content)
      setSavedAt(new Date())
    }, delayMs)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [content, delayMs])

  const reset = () => setContent(DEFAULT_CONTENT)

  return { content, setContent, savedAt, reset }
}
