type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TFormField = {
  span: string;
  placeholder: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    resumeLink: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: TSection & {
    form: {
      name: TFormField;
      email: TFormField;
      message: TFormField;
    };
  };
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
    resume: Required<TSection> & { link: string };
  };
};

export const config: TConfig = {
  html: {
    title: "Manikanta Pramod",
    fullName: "Manikanta Pramod Addanki",
    email: "addankimanikanatapramod29@gmail.com",
    resumeLink: "/desktop_pc/A.Manikanta_Pramod_Resume.pdf",
  },
  hero: {
    name: "Manikanta Pramod Addanki",
    p: ["I develop 3D visuals,", "user interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a passionate and results-driven Computer Science and Engineering student at Koneru Lakshmaiah University
with a strong foundation in Python, Machine Learning, Deep Learning, and Cloud AI/ML. I have hands-on
experience in building intelligent solutions using cutting-edge technologies. My expertise spans across software
development, cloud computing, and data-driven decision-making. I am eager to contribute my skills to innovative
projects and collaborate with industry professionals to drive technological advancements.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Education.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcase my skills and experience through
real-world examples of my work. Each project is briefly described with
links to code repositories and live demos in it. It reflects my
ability to solve complex problems, work with different technologies,
and manage projects effectively.`,
    },
 resume: {
    p: "Resume",
    h2: "My qualifications & experience",
    content: "Here are some highlights from my education and career path.",
    link: "/desktop_pc/A.Manikanta_Pramod_Resume.pdf",
  },

  },
};
