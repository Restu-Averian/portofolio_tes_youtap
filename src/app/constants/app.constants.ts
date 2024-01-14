import { dataUserProps, tabsProps } from './app.types';

const dataUser: dataUserProps = {
  name: 'Restu Averian Putra',
  phone: '082391365098',
  email: 'restuaverianputra123@gmail.com',
  certificate: [
    {
      date: '2024-01-2',
      description: 'description of certificates',
      name: 'Belajar Membuat FrontEnd Web untuk Pemula',
    },
    {
      date: '2024-01-2',
      description: 'description of certificates',
      name: 'Pelatihan Junior Web Developer',
    },
    {
      date: '2024-01-2',
      description: 'description of certificates',
      name: 'Javascript Certification Course',
    },
  ],
  education: [
    {
      endDate: '2023-12-23',
      major: 'Bachelor of Engineering',
      schoolName: 'Padang State Polytechnic',
      startDate: '2019-07',
    },
  ],
  experience: [
    {
      company: 'PT. Indodev Niaga Internet',
      description: 'Junior FrontEnd using React js',
      endDate: '5 feb 2024',
      listJobDetail: [
        {
          name: 'Created a form customization feature allowing flexible adjustments',
          description: 'Can removing existing fields, adding new fields',
        },
        {
          name: 'Developed reusable components from the antd library for use by many developers',
          description: '',
        },
        {
          name: 'Conducted React JS training sessions for new employees twice, with 3 participants in one session and 6 participants in the other',
          description: '',
        },
      ],
      role: 'Junior FrontEnd',
      startDate: '6 feb 2024',
    },
  ],
  portofolio: [
    {
      description: 'Website for read news',
      endDate: '',
      imageUrl: [
        'https://res.cloudinary.com/dcvolkyfb/image/upload/v1655367833/Project-Screenshot/Vue/newsapp_vue_jpmpk6.png',
      ],
      link: 'https://vuetify-news-app-restu.netlify.app/',
      name: 'News App',
      startDate: '',
    },
    {
      description: 'Website for stream and download anime for free without ads',
      endDate: '',
      imageUrl: [
        'https://res.cloudinary.com/dcvolkyfb/image/upload/v1703611590/Project-Screenshot/React/lhh7ck7oikc9iw1zjowm.png',
      ],
      link: 'https://www.resnime.my.id/',
      name: 'Resnime',
      startDate: '',
    },
  ],
  skill: [
    {
      description: 'Using React js around 1.5 years',
      name: 'React js',
    },
  ],
};

const dataTabs: tabsProps[] = [
  {
    label: 'Experience',
    path: 'experience',
  },
  {
    label: 'Education',
    path: 'education',
  },
  {
    label: 'Skill',
    path: 'skill',
  },
  {
    label: 'Certificate',
    path: 'certificate',
  },
  {
    label: 'Portofolio',
    path: 'portofolio',
  },
];

export { dataUser, dataTabs };
