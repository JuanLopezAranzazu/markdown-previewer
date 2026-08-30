import {
  Download,
  FileCode,
  Maximize2,
  Minimize2,
  RotateCcw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModeToggle } from "@/components/mode-toggle"

interface EditorToolbarProps {
  savedAt: Date | null
  isFullscreen: boolean
  onToggleFullscreen: () => void
  onExportMd: () => void
  onExportHtml: () => void
  onReset: () => void
}

export function EditorToolbar({
  savedAt,
  isFullscreen,
  onToggleFullscreen,
  onExportMd,
  onExportHtml,
  onReset,
}: EditorToolbarProps) {
  return (
    <header className="flex h-12 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <FileCode className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Editor de Markdown</span>
        {savedAt && (
          <span className="ml-2 text-xs text-muted-foreground">
            Guardado {savedAt.toLocaleTimeString()}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" onClick={onExportMd}>
                  <Download className="h-4 w-4" />
                </Button>
              }
            />
            <TooltipContent>Exportar como .md</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" onClick={onExportHtml}>
                  <FileCode className="h-4 w-4" />
                </Button>
              }
            />
            <TooltipContent>Exportar como .html</TooltipContent>
          </Tooltip>

          <Separator orientation="vertical" className="mx-1 h-6" />

          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="ghost" size="icon" onClick={onReset}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              }
            />
            <TooltipContent>Reiniciar documento</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggleFullscreen}
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </Button>
              }
            />
            <TooltipContent>
              {isFullscreen
                ? "Salir de pantalla completa"
                : "Pantalla completa"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <ModeToggle />
      </div>
    </header>
  )
}
