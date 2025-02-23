import HomeCare from "../../../assets/homepagge-get--the-care-banner.png";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="container mt-16">
      <div className="flex justify-between items-center flex-col md:flex-row space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="heading-2">
            Get the care you need
            <span className="text-primary"> with just a single click.</span>
          </h2>
          <p className="para-large font-figtree">
            Our compassionate professionals provide trauma-informed support,
            ensuring a safe and comfortable healing environment t ailored to
            your needs.
          </p>
          <div className="flex justify-start gap-2 ">
            <button className="bg-primary text-base text-white py-2 px-7 rounded-sm hvr-scl-primary">
              Contact Us
            </button>
            <button className="bg-secondary text-base text-white py-2 px-7 rounded-sm hvr-scl-secondary">
              About Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 "
        >
          <img src={HomeCare} alt="banner" className="max-w-[550px] w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
