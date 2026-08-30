import { useMemo } from "react"
import { cn } from "@/lib/utils"

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function MarkdownEditor({
  value,
  onChange,
  className,
}: MarkdownEditorProps) {
  const stats = useMemo(() => {
    const lines = value.split("\n").length
    const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length
    const chars = value.length
    return { lines, words, chars }
  }, [value])

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder="Escribe tu Markdown aquí..."
        className={cn(
          "w-full flex-1 resize-none bg-transparent p-4",
          "font-mono text-sm leading-relaxed",
          "outline-none focus-visible:ring-0",
          "placeholder:text-muted-foreground"
        )}
      />
      <div className="flex items-center justify-end gap-3 border-t px-4 py-1.5 text-xs text-muted-foreground">
        <span>{stats.lines} líneas</span>
        <span>{stats.words} palabras</span>
        <span>{stats.chars} caracteres</span>
      </div>
    </div>
  )
}
