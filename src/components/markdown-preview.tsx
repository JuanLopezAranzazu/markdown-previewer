import { forwardRef } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { cn } from "@/lib/utils"

interface MarkdownPreviewProps {
  content: string
  className?: string
}

export const MarkdownPreview = forwardRef<HTMLDivElement, MarkdownPreviewProps>(
  ({ content, className }, ref) => {
    return (
      <div className={cn("h-full overflow-y-auto p-6", className)}>
        <div
          ref={ref}
          className={cn(
            "prose prose-sm dark:prose-invert max-w-none",
            "prose-pre:bg-zinc-900 prose-pre:text-zinc-100",
            "prose-headings:scroll-mt-4"
          )}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    )
  }
)

MarkdownPreview.displayName = "MarkdownPreview"
