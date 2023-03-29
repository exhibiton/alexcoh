import emailjs, { init } from 'emailjs-com'
import { useState } from 'react'
import Swal from 'sweetalert2'
init('0OD6TpBjNB_JW4m4k')

interface InterestedItem {
  text: string
  selected: boolean
}

export default function useContactForm() {
  const initialState = {
    interested: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const [contactForm, setContactForm] = useState(initialState)
  const [isLoading, setLoading] = useState(false)

  const interested: InterestedItem[] = [
    {
      text: 'TRIATHLON COACHING',
      selected: false,
    },
    {
      text: 'CYCLING COACHING',
      selected: false,
    },
    {
      text: 'RUNNING COACHING',
      selected: false,
    },
    {
      text: 'NUTRITION PLANNING',
      selected: false,
    },
    {
      text: 'BIKEFITTING',
      selected: false,
    },
  ]
  const [interestedList, setInterestedList] = useState<InterestedItem[]>(interested)
  const [selectedList, setSelectedList] = useState<string[]>([])

  const handleInterested = (value: InterestedItem) => {
    const data = interestedList.map((obj: InterestedItem) => {
      if (obj.text === value.text) {
        obj.selected = !obj.selected
        if (obj.selected) {
          setSelectedList([...selectedList, obj.text])
        } else {
          setSelectedList(selectedList.filter((item) => item !== obj.text))
        }
      }
      return obj
    })
    setInterestedList(data)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)
    const finalMessage = `${
      contactForm.name
    } is contacting you because he is interested in ${selectedList.toString()}. His email is ${
      contactForm.email
    } and phone number ${contactForm.phone}. He left you the following message: ${contactForm.message}.`
    emailjs
      .send('service_lcungj8', 'website_contact_form', {
        message: finalMessage,
        from_name: contactForm.name,
      })
      .then(() => {
        setLoading(false)
        Swal.fire('Great!', 'Thank you for get in touch!', 'success')
      })
      .catch((e) => {
        setLoading(false)
        Swal.fire('Oops!', 'Failed to submit form, Please Try again!', 'error')
      })
  }

  return { contactForm, setContactForm, isLoading, handleSubmit, handleInterested, interestedList }
}
