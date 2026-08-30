function downloadBlob(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function exportAsMarkdown(content: string, filename = "documento.md") {
  downloadBlob(content, filename, "text/markdown;charset=utf-8")
}

export function exportAsHtml(
  renderedHtml: string,
  filename = "documento.html"
) {
  const document = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<title>Documento exportado</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.6; }
  pre { background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; overflow-x: auto; }
  code { font-family: ui-monospace, monospace; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ddd; padding: 8px; }
  blockquote { border-left: 4px solid #ccc; margin: 0; padding-left: 1rem; color: #555; }
</style>
</head>
<body>
${renderedHtml}
</body>
</html>`
  downloadBlob(document, filename, "text/html;charset=utf-8")
}
