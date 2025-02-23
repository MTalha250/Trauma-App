import Avatar from "../../assets/3d_avatar_16.png";
import ArticleImage from "../../assets/artical-image.png";
import { motion } from "framer-motion";
import img from "@/assets/dr.2.png";

function ResourceLibrayDeatil() {
  return (
    <div className="flex justify-center">
      <div className="container flex gap-10  my-10 w-full md:w-[85%]">
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          viewport={{ once: true }}
          className="hidden lg:block w-full h-fit relative"
        >
          <img src={img} alt="" className="w-full h-full" />
          <button className="bg-primary absolute left-1/2 -translate-x-1/2 bottom-5 text-white p-2 shadow whitespace-nowrap">
            Book Now
          </button>
        </motion.div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-5"
          >
            <p className="para-large text-primary font-semibold">
              Self Assessment Tools
            </p>
            <h3 className="heading-3">Symptoms, and Pathways to Healing</h3>
            <div className="flex gap-3 justify-start items-center">
              <img src={Avatar} alt="avatar" className="w-[40px]" />
              <p className="para-medium font-medium">
                By Natasha Nyeke, MBACP, Couples, Family Issues, Anxiety, Self
                esteem <br />
                Published on 11th September, 2024
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 my-10"
          >
            <p className="para-large font-light">
              We envision a world where individuals affected by trauma are
              empowered to heal and thrive. We aim to provide a safe, supportive
              space where survivors can share their stories, access professional
              resources, and find comfort in community. Through education,
              empathy, and a holistic approach to healing, we seek to foster
              resilience and inspire hope in those walking the path of recovery.
            </p>
            <img src={ArticleImage} alt="Article" className="rounded-lg mt-5" />
            <h3 className="heading-3 mt-9">Overview</h3>
            <ul className="pl-3 md:pl-10 flex flex-col gap-3 para-large font-light list-disc list-inside">
              <li>
                Healing from trauma involves both psychological and
                physiological pathways, often requiring a holistic approach.
                Therapy, such as Cognitive Behavioral Therapy (CBT), Eye
                Movement Desensitization and Reprocessing (EMDR), or
                trauma-focused counseling, can help individuals process and
                reframe their experiences. Somatic therapies, which focus on
                reconnecting the mind and body, are also highly beneficial in
                releasing stored trauma in the body.{" "}
              </li>
              <li>
                Trauma can manifest in a wide range of emotional, psychological,
                and physical symptoms that vary from person to person. Common
                emotional symptoms include feelings of anxiety, fear, guilt,
                shame, or irritability, while psychological symptoms may include
                flashbacks, nightmares, difficulty concentrating, and
                hypervigilance. Physical symptoms often show up as fatigue,
                headaches, muscle tension, or even gastrointestinal issues.
              </li>
            </ul>
          </motion.div>

          <div className="flex gap-3 flex-col md:flex-row md:justify-between items-center">
            <p className="para-large text-primary font-semibold">
              {" "}
              &lt; Practical Strategies for Everyday
            </p>
            <p className="para-large text-primary font-semibold">
              A Guide for Families and Friends &gt;
            </p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="bg-offwhite w-full p-7 rounded-lg my-8 flex flex-col md:flex-row gap-8"
          >
            <div className="flex flex-col justify-between items-center min-w-[200px]">
              <img src={Avatar} alt="avatar" className="w-[120px]" />
              <p className="para-large font-semibold">Brighton, BN42</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="para-large font-semibold">
                Written by Natasha Nyeke, MBACP, Couples, Family Issues,
                Anxiety, Self esteem
              </p>
              <p className="para-large font-light">
                Natasha Nyeke is a therapist, Mindset coach and couples
                counsellor. Her Imperfect Mum community helps to normalise
                matrescence—the transformation we all go through when we become
                mothers—and supports women in becoming the mothers they needed.
              </p>
              <div className="flex flex-wrap md:flex-row gap-4">
                <button className="hvr-scl-primary bg-primary px-4 py-2 text-white rounded-md">
                  Save Profile
                </button>
                <button className="hvr-scl-secondary bg-secondary px-4 py-2 text-white rounded-md">
                  Email me
                </button>
                <button className=" bg-white px-4 py-2 text-primary hvr-scl-outline font-semibold border-2 border-primary rounded-md">
                  View Profile
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResourceLibrayDeatil;
