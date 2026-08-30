import { useRef, useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarkdownEditor } from "@/components/markdown-editor"
import { MarkdownPreview } from "@/components/markdown-preview"
import { EditorToolbar } from "@/components/editor-toolbar"
import { useMarkdownStorage } from "@/hooks/use-markdown-storage"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { exportAsHtml, exportAsMarkdown } from "@/lib/export-markdown"

function App() {
  const { content, setContent, savedAt, reset } = useMarkdownStorage()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

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

      {isMobile ? (
        <Tabs
          defaultValue="editor"
          className="flex flex-1 flex-col gap-0 overflow-hidden"
        >
          <TabsList className="w-full shrink-0 rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="editor"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none"
            >
              Editor
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none"
            >
              Vista previa
            </TabsTrigger>
          </TabsList>
          <TabsContent value="editor" className="flex-1 overflow-hidden">
            <MarkdownEditor value={content} onChange={setContent} />
          </TabsContent>
          <TabsContent value="preview" className="flex-1 overflow-hidden">
            <MarkdownPreview ref={previewRef} content={content} />
          </TabsContent>
        </Tabs>
      ) : (
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
      )}
    </div>
  )
}

export default App
