// import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer()
  const body = await readBody(event)
  const { name, email, message, recaptchaToken } = body

  // TODO: Add reCAPTCHA verification
  // const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
  // debugger
  // const recaptchaResponse = await $fetch('https://www.google.com/recaptcha/api/siteverify', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     secret: recaptchaSecret,
  //     response: recaptchaToken
  //   })
  // })

  // if (!recaptchaResponse.success) {
  //   return { success: false, message: 'Failed to verify reCAPTCHA. Please try again.' }
  // }

  try {
    await sendMail({
      from: process.env.GMAIL_USER,
      subject: `Terms Monitor: Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      to: process.env.CONTACT_EMAIL
    })
    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Email us directly on info@trust-ai.nl.' }
  }
})
