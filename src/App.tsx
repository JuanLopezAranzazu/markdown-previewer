import { useRef, useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { MarkdownEditor } from "@/components/markdown-editor"
import { MarkdownPreview } from "@/components/markdown-preview"
import { EditorToolbar } from "@/components/editor-toolbar"
import { useMarkdownStorage } from "@/hooks/use-markdown-storage"
import { exportAsHtml, exportAsMarkdown } from "@/lib/export-markdown"

function App() {
  const { content, setContent, savedAt, reset } = useMarkdownStorage()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const handleExportHtml = () => {
    exportAsHtml(previewRef.current?.innerHTML ?? "")
  }

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <EditorToolbar
        savedAt={savedAt}
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => setIsFullscreen((v) => !v)}
        onExportMd={() => exportAsMarkdown(content)}
        onExportHtml={handleExportHtml}
        onReset={reset}
      />

      <ResizablePanelGroup orientation="horizontal" className="flex-1">
        {!isFullscreen && (
          <>
            <ResizablePanel defaultSize={50} minSize={20}>
              <MarkdownEditor value={content} onChange={setContent} />
            </ResizablePanel>
            <ResizableHandle withHandle />
          </>
        )}
        <ResizablePanel defaultSize={isFullscreen ? 100 : 50} minSize={20}>
          <MarkdownPreview ref={previewRef} content={content} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default App
