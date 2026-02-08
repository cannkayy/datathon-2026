import { useEffect } from 'react'

const VIZ_ID = 'viz1770527496825'
const TABLEAU_SCRIPT = 'https://public.tableau.com/javascripts/api/viz_v1.js'

export default function TableauEmbed() {
  useEffect(() => {
    const div = document.getElementById(VIZ_ID)
    if (!div) return
    const vizElement = div.getElementsByTagName('object')[0]
    if (!vizElement) return

    const setSize = () => {
      if (div.offsetWidth > 800) {
        vizElement.style.width = '1000px'
        vizElement.style.height = '827px'
      } else if (div.offsetWidth > 500) {
        vizElement.style.width = '1000px'
        vizElement.style.height = '827px'
      } else {
        vizElement.style.width = '100%'
        vizElement.style.height = '727px'
      }
    }
    setSize()

    if (!document.querySelector(`script[src="${TABLEAU_SCRIPT}"]`)) {
      const scriptElement = document.createElement('script')
      scriptElement.src = TABLEAU_SCRIPT
      vizElement.parentNode.insertBefore(scriptElement, vizElement)
    }

    const resizeObserver = new ResizeObserver(setSize)
    resizeObserver.observe(div)
    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div
      id={VIZ_ID}
      className="tableauPlaceholder"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '200px',
        background: 'transparent',
        overflow: 'hidden',
      }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Dashboard 1"
            src="https://public.tableau.com/static/images/KB/KB868T9F8/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none' }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="path" value="shared/KB868T9F8" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value="https://public.tableau.com/static/images/KB/KB868T9F8/1.png" />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-GB" />
      </object>
    </div>
  )
}
