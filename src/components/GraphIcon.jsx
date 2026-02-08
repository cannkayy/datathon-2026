import { useId } from 'react'

const GRADIENT_STOPS = [
  { offset: '0%', color: '#FFE414' },
  { offset: '33%', color: '#45FCB3' },
  { offset: '66%', color: '#EA45FC' },
  { offset: '100%', color: '#FC7345' },
]

export default function GraphIcon({ className = '', size = 24 }) {
  const gradId = useId().replace(/:/g, '')
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradId})`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          {GRADIENT_STOPS.map(({ offset, color }) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <line x1="4" y1="20" x2="20" y2="20" />
      <line x1="6" y1="16" x2="6" y2="20" />
      <line x1="10" y1="12" x2="10" y2="20" />
      <line x1="14" y1="8" x2="14" y2="20" />
      <line x1="18" y1="4" x2="18" y2="20" />
    </svg>
  )
}
