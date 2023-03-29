import useContactForm from '../../../hooks/useContactForm'
import Loader from '../common/Loader'

const FormAbout = () => {
  const { contactForm, setContactForm, isLoading, handleSubmit, handleInterested, interestedList } =
    useContactForm()

  return (
    <>
      <div className="px-30">
        <form onSubmit={handleSubmit}>
          <div className="btn_resp">
            {interestedList &&
              interestedList.map((obj, index) => (
                <div key={index}>
                  <span
                    onClick={() => handleInterested(obj)}
                    className={`about_btn_common mt-24 ${obj.selected ? 'active-blue' : ''}`}>
                    {obj.text}
                  </span>
                </div>
              ))}
          </div>

          <div className="about_form">
            <input
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              value={contactForm.name}
              required
              className="about_input"
              type="text"
              placeholder="Your Name"
            />
            <input
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              value={contactForm.email}
              required
              className="about_input"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
              value={contactForm.phone}
              required
              className="about_input"
              type="number"
              placeholder="Phone"
            />
            <textarea
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              value={contactForm.message}
              required
              className="about_input"
              placeholder="Message"
            />
          </div>
          <button className="btn_send_message"> {isLoading ? <Loader /> : 'Send Message'}</button>
        </form>
      </div>
    </>
  )
}

export default FormAbout
