"use client"

import { ContactImages } from "./_components/contact-images"
import { ContactInfo } from "./_components/contact-info"
import { ContactShops } from "./_components/contact-shops"

const ContactsPage = () => {
  return (
    <div className="h-full w-full flex-1">
      <div className="w-full gap-5 md:flex">
        <ContactInfo />
        <ContactImages />
      </div>
      <ContactShops />
    </div>
  )
}

export default ContactsPage
