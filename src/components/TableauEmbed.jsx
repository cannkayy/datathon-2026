import { useEffect } from 'react'

const VIZ_ID = 'viz1770522312797'
const TABLEAU_SCRIPT = 'https://public.tableau.com/javascripts/api/viz_v1.js'

export default function TableauEmbed() {
  useEffect(() => {
    const div = document.getElementById(VIZ_ID)
    if (!div) return
    const vizElement = div.getElementsByTagName('object')[0]
    if (!vizElement) return

    const setSize = () => {
      vizElement.style.width = '100%'
      vizElement.style.height = div.offsetHeight ? `${div.offsetHeight}px` : `${div.offsetWidth * 0.75}px`
    }
    setSize()

    if (document.querySelector(`script[src="${TABLEAU_SCRIPT}"]`)) {
      return
    }
    const scriptElement = document.createElement('script')
    scriptElement.src = TABLEAU_SCRIPT
    vizElement.parentNode.insertBefore(scriptElement, vizElement)

    const resizeObserver = new ResizeObserver(setSize)
    resizeObserver.observe(div)
    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div
      id={VIZ_ID}
      className="tableauPlaceholder"
      style={{
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
            alt="The Unhealthy %: Tracking America's Most At-Risk States"
            src="https://public.tableau.com/static/images/F4/F4NXCJ96H/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none', width: '100%' }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="path" value="shared/F4NXCJ96H" />
        <param name="toolbar" value="no" />
        <param name="static_image" value="https://public.tableau.com/static/images/F4/F4NXCJ96H/1.png" />
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
