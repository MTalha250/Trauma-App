import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.15 }}
      viewport={{ once: true }}
      className="bg-offwhite"
    >
      <div className=" container w-full ">
        <div className="min-h-[54px] py-2  flex justify-end space-x-2  items-center">
          {/* <button className="bg-primary text-white md:text-lg text-sm md:px-5 px-3 py-1 rounded-3xl hvr-scl-primary">
            Emergency Help!
          </button> */}
          <Link to={"/login"}>
            {" "}
            <button className="bg-white text-primary border-2 border-primary md:text-lg text-sm md:px-5 px-3 py-[3px] rounded-3xl font-medium hvr-scl-outline">
              Join us as a Professional
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderTop;
