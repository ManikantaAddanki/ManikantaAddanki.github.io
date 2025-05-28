import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { resumeData, TResumeItem } from "../../constants/resumeData";

const ResumeCard: React.FC<{ index: number } & TResumeItem> = ({
  index,
  title,
  institution,
  date,
  description,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary w-full rounded-2xl p-5 sm:w-[500px]"
  >
    <h3 className="text-[20px] font-bold text-white">{title}</h3>
    <p className="text-secondary mt-1 text-[16px] font-semibold">{institution}</p>
    <p className="text-secondary text-[14px] italic">{date}</p>
    <p className="text-secondary mt-3 text-[14px]">{description}</p>
  </motion.div>
);

const Resume = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.resume} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.resume.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {resumeData.map((item: TResumeItem, index: number) => (
          <ResumeCard key={`resume-${index}`} index={index} {...item} />
        ))}
      </div>

      <a
        href="src\components\sections\A.Manikanta_Pramod_Resume.pdf"
        download="A.Manikanta_Pramod_Resume.pdf"
        className="text-white underline text-lg mt-6 block cursor-pointer"
      >
        📄 Download Resume
      </a>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
