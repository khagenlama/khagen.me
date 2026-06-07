import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <header class="site-header">
      <a class="site-brand" href="/">
        khagen.me
      </a>
      <div class="site-right">
        <nav class="site-nav" aria-label="Primary">
          <a href="/about">About</a>
        </nav>
        <div class="site-controls">{children}</div>
      </div>
    </header>
  )
}

Header.css = ``

export default (() => Header) satisfies QuartzComponentConstructor
