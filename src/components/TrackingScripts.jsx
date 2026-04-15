import { useEffect } from 'react'

export default function TrackingScripts() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
    const fbPixelId = import.meta.env.VITE_FB_PIXEL_ID

    if (gaId) {
      const gaScript = document.createElement('script')
      gaScript.async = true
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      gaScript.setAttribute('data-managed-tracking', 'ga-loader')
      document.head.appendChild(gaScript)

      const gaInit = document.createElement('script')
      gaInit.setAttribute('data-managed-tracking', 'ga-init')
      gaInit.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`
      document.head.appendChild(gaInit)
    }

    if (fbPixelId) {
      const fbScript = document.createElement('script')
      fbScript.setAttribute('data-managed-tracking', 'fb-pixel')
      fbScript.text = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '${fbPixelId}'); fbq('track', 'PageView');`
      document.head.appendChild(fbScript)

      const fbNoScript = document.createElement('noscript')
      fbNoScript.setAttribute('data-managed-tracking', 'fb-noscript')
      fbNoScript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1"/>`
      document.body.appendChild(fbNoScript)
    }

    return () => {
      document
        .querySelectorAll('[data-managed-tracking]')
        .forEach((node) => node.parentNode?.removeChild(node))
    }
  }, [])

  return null
}
