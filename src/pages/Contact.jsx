import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta features? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="formLabel">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="formInput mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="formLabel">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="formInput mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="formLabel">
              Your Message
            </label>
            <textarea
              type="text"
              rows="6"
              id="message"
              placeholder="Leave a comment...."
              className="formInput mt-1"
            />
          </div>

          <button className="btn rounded sm:w-fit" type="submit">Submit</button>
        </form>
      </div>
    </section>
      
  )
}

export default Contact
