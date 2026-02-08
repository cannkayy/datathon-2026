export default function GraphIcon({ className = '', size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="4" y1="20" x2="20" y2="20" />
      <line x1="6" y1="16" x2="6" y2="20" />
      <line x1="10" y1="12" x2="10" y2="20" />
      <line x1="14" y1="8" x2="14" y2="20" />
      <line x1="18" y1="4" x2="18" y2="20" />
    </svg>
  )
}
