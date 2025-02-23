import { motion } from "framer-motion";
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
      className="w-[350px] space-y-2"
    >
      <img src={image} alt="card" className="w-full h-[200px]  object-cover" />
      <p className="font-medium">{title}</p>
      <p className="font-light">{description}</p>
    </motion.div>
  );
};

export default StoriesCard;
