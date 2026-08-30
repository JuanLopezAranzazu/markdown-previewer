import { forwardRef } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { cn } from "@/lib/utils"
import "./markdown-preview.css"

interface MarkdownPreviewProps {
  content: string
  className?: string
}

export const MarkdownPreview = forwardRef<HTMLDivElement, MarkdownPreviewProps>(
  ({ content, className }, ref) => {
    return (
      <div className={cn("h-full overflow-y-auto p-4 sm:p-6", className)}>
        <div ref={ref} className="markdown-body max-w-none">
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
