type SectionCaptionProps = {
  children: string
  className?: string
}

/** Plain eyebrow label above a section title. */
export function SectionCaption({ children, className = '' }: SectionCaptionProps) {
  return (
    <p className={['caption-quirk', className].filter(Boolean).join(' ')}>
      {children.trim()}
    </p>
  )
}
