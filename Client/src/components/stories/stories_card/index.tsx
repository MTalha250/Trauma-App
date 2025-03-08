import { motion } from "framer-motion";
import { User } from "lucide-react";
interface StoriesCardProps {
  image: string;
  title: string;
  description: string;
}

const StoriesCard = ({ image, title, description }: StoriesCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      viewport={{ once: true }}
      className="space-y-2 hover:shadow-lg transition duration-300 cursor-pointer"
    >
      <img src={image} alt="card" className="w-full h-[200px]  object-cover" />
      <div className="p-5 flex flex-col space-y-2 h-[200px]">
        <p className="font-medium text-secondary mb-2">{title}</p>
        <p className="font-light line-clamp-3">{description}</p>
        <div className="flex font-light justify-between flex-grow items-end">
          <div className="flex items-center gap-2">
            <div className="p-2 flex items-center justify-center rounded-full bg-primary">
              <User className="text-white" size={15} strokeWidth={1.5} />
            </div>
            <p>Lionel</p>
          </div>
          <p>2 days ago</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StoriesCard;
