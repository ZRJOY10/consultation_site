const ADMIN_EMAIL = 'sydney@globaltalentedu.au'
const DEFAULT_ENDPOINT = `https://formsubmit.co/ajax/${ADMIN_EMAIL}`

export async function sendContactEmails(formData) {
  if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
    throw new Error('Please run the site via a web server (npm run dev or npm run preview), not by opening index.html directly.')
  }

  const endpoint = import.meta.env.VITE_FORMSUBMIT_ENDPOINT || DEFAULT_ENDPOINT

  const now = new Date().toLocaleString('en-AU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const acknowledgementText =
    'Dear,\nWe Recieved your mail. Thanks for mailing us. Our one expert will contact with you soon.\n\nHere is the information we got from you\n\nBest Regards\nGlobal Talent Education Consultation'
  const welcomeText = 'Welcome to Global Talent Education Consultation'

  const payload = new URLSearchParams({
    
    acknowledgement: acknowledgementText,
    name: formData.name,
    email: formData.email,
    phone: formData.phone || 'Not provided',
    subject: formData.subject || 'Website Contact Form Submission',
    message: formData.message,
    welcome: welcomeText,
    source: formData.source || 'Website Contact Form',
    submitted_at: now,
    _replyto: formData.email,
    _cc: formData.email,
    _subject: `Global Talent Welcomes You`,
    _template: 'box',
    _captcha: 'false',
    _autoresponse: acknowledgementText,
  })

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: payload.toString(),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok || data?.success === 'false') {
    throw new Error(data?.message || 'Failed to send contact form via FormSubmit.')
  }
}
