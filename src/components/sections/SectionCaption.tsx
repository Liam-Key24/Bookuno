type SectionCaptionProps = {
  children: string
  className?: string
}

/** Quirky framed caption, e.g. "// Less faff. More bookings. //" */
export function SectionCaption({ children, className = '' }: SectionCaptionProps) {
  const text = children.trim()
  const labelled = text.startsWith('//') ? text : `// ${text} //`

  return (
    <p className={['caption-quirk', className].filter(Boolean).join(' ')}>
      {labelled}
    </p>
  )
}
