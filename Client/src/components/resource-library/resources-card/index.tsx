
import { Mail, MoveRightIcon } from "lucide-react";
import { motion } from "framer-motion";
interface ResourceCardProps {
    img? : string,
    month? : string,
    topic? :string,
    title? : string
}

const ResourceCard = ({img, month, topic, title} : ResourceCardProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 75 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, delay: 0.5 }}
    viewport={{ once: true }}
    className="w-full max-w-[320px]">
      <div className="flex flex-col rounded-lg overflow-hidden bg-offwhite shadow-lg">
        <div className="relative">
          <img src={img} alt="Consultation" className="w-full h-48 object-cover" />
          <div className="bg-white w-[280px] absolute bottom-2 left-2 rounded-lg px-3 py-2 flex flex-row justify-start gap-1 font-semibold">
            <p className="font-semibold">{month}</p>
            <div className="flex flex-row justify-start items-center gap-1 ">
              <Mail size={20} color="grey" strokeWidth={1} />
              <p className="text-primary">{topic}</p>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-3">
          <div className="flex flex-col gap-2 justify-start">
            <h5 className="font-semibold para-large">
             {title}
            </h5>
            <p className="text-primary font-semibold">Read More <MoveRightIcon className="inline ms-2"/></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
