"use client"
import ContactTitle from "./_components/ui/contact-title"
import ContactBlock from "./_components/ui/contact-block"
import ContactInfo from "./_components/ui/contact-info"
import ContactMagazine from "./_components/ui/magazine-block"
import ContactImages from "./_components/ui/contact-images"

const ContactsPage = () => {
  return (
    <div className="">
      <ContactTitle/>
      <ContactInfo/>
      <ContactImages/>
      <ContactBlock/>
      <ContactMagazine/>
    </div>

  )
}

export default ContactsPage
