# Markdown Previewer

Un editor de **Markdown** moderno y responsivo con vista previa en tiempo real, desarrollado con **React**, **TypeScript**, **Vite** y **shadcn/ui**.

La aplicación permite escribir contenido utilizando sintaxis Markdown y visualizar el resultado renderizado en tiempo real.

## Características

* Editor de Markdown.
* Vista previa en tiempo real.
* Interfaz moderna utilizando shadcn/ui.
* Diseño responsivo.
* Soporte para modo claro y oscuro.
* Soporte para sintaxis Markdown común.
* Desarrollo y compilación optimizados con Vite.

## Tecnologías

* **React** — Biblioteca para construir interfaces de usuario.
* **TypeScript** — Tipado estático para JavaScript.
* **Vite** — Herramienta de desarrollo y compilación.
* **shadcn/ui** — Componentes de interfaz reutilizables.
* **Tailwind CSS** — Framework de estilos.
* **react-markdown** — Renderizado de Markdown dentro de React.
* **remark-gfm** — Soporte para GitHub Flavored Markdown.
* **rehype-highlight** — Resaltado de sintaxis para bloques de código.
* **pnpm** — Gestor de paquetes.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

* [Node.js](https://nodejs.org/) — Se recomienda utilizar la versión LTS.
* [pnpm](https://pnpm.io/installation) — Gestor de paquetes utilizado por el proyecto.

Puedes comprobar las versiones instaladas ejecutando:

```bash
node --version
pnpm --version
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/JuanLopezAranzazu/markdown-previewer.git
```

### 2. Entrar al directorio del proyecto

```bash
cd markdown-previewer
```

### 3. Instalar las dependencias

```bash
pnpm install
```

### 4. Ejecutar el servidor de desarrollo

```bash
pnpm dev
```

Después de ejecutar el comando, Vite mostrará en la terminal la dirección donde está disponible la aplicación. Generalmente será:

```text
http://localhost:5173
```

Abre esa dirección en tu navegador para utilizar la aplicación.

## Compilar para producción

Para generar la versión optimizada para producción:

```bash
pnpm build
```

Para visualizar localmente la compilación de producción:

```bash
pnpm preview
```

## Uso

1. Abre la aplicación en el navegador.
2. Escribe contenido utilizando Markdown en el editor.
3. La vista previa se actualizará automáticamente.
4. Utiliza la sintaxis Markdown para dar formato al contenido.

### Ejemplo

```markdown
# Hola Mundo

Este es un **Markdown Previewer**.

## Características

- Vista previa en tiempo real.
- Diseño responsivo.
- Soporte para Markdown.

[Visitar GitHub](https://github.com/)
```

El contenido escrito en el editor será convertido y mostrado automáticamente en la sección de vista previa.
