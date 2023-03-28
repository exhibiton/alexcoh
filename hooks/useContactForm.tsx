import emailjs, { init } from 'emailjs-com'
import { useState } from 'react'
import Swal from 'sweetalert2'
init('0OD6TpBjNB_JW4m4k')

export default function useContactForm() {
  const initialState = {
    interested: [],
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const [contactForm, setContactForm] = useState(initialState)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)

    const finalMessage = `${contactForm.name} is contacting you because he is interested in ${contactForm.interested}. His email is ${contactForm.email} and phone number ${contactForm.phone}. He left you the following message: ${contactForm.message}.`

    emailjs
      .send('service_lcungj8', 'website_contact_form', {
        message: finalMessage,
      })
      .then(() => {
        setLoading(false)
        Swal.fire('Great!', 'Thank you for get in touch!', 'success')
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
        Swal.fire('Oops!', 'Failed to submit form, Please Try again!', 'error')
      })
  }
  return { contactForm, setContactForm, isLoading, handleSubmit }
}
