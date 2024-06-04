import CustomHead from "@/app/_components/head_head/ui/CustomHead";
import { ContactImages } from "./_components/contact-images";
import { ContactInfo } from "./_components/contact-info";
import ContactMap from "./_components/contact-map/ui/contact-map";
import ShopList from "./_components/contact-shops/ui/contact-shop";


const ContactsPage = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} />
      <div className="w-full md:flex items-center justify-center">
        <ContactInfo />
        <ContactImages />
      </div>
      <ContactMap/>
      <ShopList/>
    </div>
  );
};

export default ContactsPage;

