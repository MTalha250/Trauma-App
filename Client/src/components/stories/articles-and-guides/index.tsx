import Blog from "../../../assets/blog.png"
import { motion } from "framer-motion"

function ArticlesAandGuides() {
    return (
        <div className="container my-10 rounded-lg">
            <motion.div
             initial={{ opacity: 0, y: 75 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.25 }}
             viewport={{ once: true }}
            className="bg-[#9ECDD8] min-h-[220px] w-full flex flex-col md:flex-row items-center justify-between gap-y-5">
                <div className="p-5 w-full flex flex-col md:flex-row gap-y-5 items-center justify-between">
                    <h3 className="text-center md:text-start heading-3">Articles and Guides</h3>
                    <button className="px-8 py-4 bg-white rounded-lg text-primary font-bold transform transition-transform duration-300 hover:scale-105">Download Guides</button>
                </div>
                <img src={Blog} alt="Library" />
            </motion.div>
        </div>
    )
}

export default ArticlesAandGuides