import { ContactImages } from "./_components/contact-images";
import { ContactInfo } from "./_components/contact-info";
import ContactMap from "./_components/contact-map/ui/contact-map";
import { ContactShops } from "./_components/contact-shops";

const ContactsPage = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      <div className="w-full gap-5 md:flex items-center justify-center">
        <ContactInfo />
        <ContactImages />
      </div>
      <ContactMap/>
      <ContactShops />
    </div>
  );
};

export default ContactsPage;

