type ListJobDetailProps = {
  name: string;
  description: string;
};

type ExperienceProps = {
  startDate: string;
  endDate: string;
  role: string;
  company: string;
  description: string;
  listJobDetail: ListJobDetailProps[];
};

type EducationProps = {
  startDate: string;
  endDate: string;
  schoolName: string;
  major: string;
};

type SkillProps = {
  name: string;
  description: string;
};

type CertificatesProps = {
  date: string;
  name: string;
  description: string;
};
type PortofolioProps = {
  startDate: string;
  endDate: string;
  name: string;
  description: string;
  imageUrl: string[];
  link: string;
};

export type dataUserProps = {
  name: string;
  phone: string;
  email: string;
  experience: ExperienceProps[];
  education: EducationProps[];
  skill: SkillProps[];
  certificate: CertificatesProps[];
  portofolio: PortofolioProps[];
};

export type tabsProps = {
  label: string;
  path: string;
};
