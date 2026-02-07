/**
 * Placeholder for Tableau or other embedded visualizations.
 * Use the `embed` prop to pass a React node (e.g. iframe) when ready.
 */
export default function VizPlaceholder({ embed, className = '', style = {} }) {
  return (
    <div
      className={`viz-placeholder ${className}`}
      style={style}
      role="img"
      aria-label="Visualization placeholder"
    >
      {embed ?? null}
    </div>
  )
}
