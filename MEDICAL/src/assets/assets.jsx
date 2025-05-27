import doctor from "./Physician.png";
import blackdoctors from "./Blackdoctors 1.png";
import services_top from "./Rectangle 3 (1).png";
import freecheckup from "./Rectangle 3 (2).png";
import contacts from "./Rectangle 3 (3).png";
import book_appointment from "./Rectangle 3 (4).png";
import blog_post from "./Rectangle 3 (5).png";
import patients_first from "./Rectangle 3 (6).png";
import female_drs from "./Rectangle 3.png";
import patient_dr from "./Rectangle 13 (1).png";
import pregnant_patient from "./Rectangle 13.png";
import three_female_drs from "./Rectangle 14.png";
import fm_dr from "./Rectangle 20 (1).png";
import m_dr from "./Rectangle 20.png";
import booking from "./Rectangle 33.png";
import patient_docs from "./Rectangle 34.png";
import testimonials_bac from "./Rectangle 53.png";
import male_doc from "./Rectangle 20 (2).png";
import map from "./Map.png";
import oldDoc from "./oldDoc.jpg"
import fmDoc  from './fmDoc.jpg'
import anotherDoc from './anotherDoc.jpg'
import female from './twofemales.png'
import news_doctor from './Rectangle 62.png'
import news_female from './Rectangle 61.png'
import news_patient from './Rectangle 63.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";


export const assets = {
  doctor,
  blackdoctors,
  services_top,
  freecheckup,
  contacts,
  book_appointment,
  blog_post,
  patients_first,
  female_drs,
  patient_dr,
  pregnant_patient,
  three_female_drs,
  fm_dr,
  m_dr,
  booking,
  patient_docs,
  testimonials_bac,
  male_doc,
  map,
  female,
  news_doctor,
  news_female,
  news_patient,
};
export const specialists_doctors = [
  "Neurogist",
  "Bones",
  "Oncology",
  "Otorhinolaryngology",
  "Ophathanlmology",
  "Cardiovascular",
  "Pulmonology",
  "Renal Medicine",
  "Gastroenterology",
  "Urology",
  "Dermatology",
  "Gynaecology",
];


const Icons = () => (
  <>
    <FiEye />
    <h6>68</h6>
    <pre><FaRegHeart /></pre>
    <h6>86</h6>
  </>
);

export const news = [
  {
    image: patient_docs,
    date: "Monday 05,September 2021|By Author",
    article: "This Article's Title goes Here,but not too long.",
    icons:<Icons/>,
  },
  {
    image: patient_docs,
    date: "Tuesday 06,September 2021|By Author",
    article: "This Article's Title goes Here,but not too long.",
    icons:<Icons/>,
  },
  {
    image: patient_docs,
    date: " Wenesday 07,September 2021|By Author",
    article: "This Article's Title goes Here,but not too long.",
    icons:<Icons/>,
  },
  {
    image: patient_docs,
    date: "Thursday 08,september 2021|By Author",
    article: "This Article's Title goes Here,but not too long.",
    icons:<Icons/>,
  },
];

export const singleNews = [
  {
    image: female_drs,
    date: "Monday 05,September 2021",
    author: "|By Author1",
    views: 68,
    likes: 86,
    article: "This Article's Title goes Here,but not too long.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo sunt consequatur dignissimos cumque qui odio quia beatae. Optio dolore perferendis praesentium quia nesciunt necessitatibus fugiat officiis magni dicta expedita.",
  },
  {
    image: patient_docs,
    date: "Tuesday 06,September 2021",
    author: "|By Author1",
    views: 75,
    likes: 66,
    article: "This Article's Title goes Here,but not too long.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo sunt consequatur dignissimos cumque qui odio quia beatae. Optio dolore perferendis praesentium quia nesciunt necessitatibus fugiat officiis magni dicta expedita.",
  },
  {
    image: pregnant_patient,
    date: " Wednesday 07,September 2021",
    author: "|By Author1",
    views: 38,
    likes: 96,
    article: "This Article's Title goes Here,but not too long.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo sunt consequatur dignissimos cumque qui odio quia beatae. Optio dolore perferendis praesentium quia nesciunt necessitatibus fugiat officiis magni dicta expedita.",
  },
  {
    image: patient_dr,
    date: "Thursday 08,september 2021|",
    author: "|By Author1",
    views: 88,
    likes: 76,
    article: "This Article's Title goes Here,but not too long.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo sunt consequatur dignissimos cumque qui odio quia beatae. Optio dolore perferendis praesentium quia nesciunt necessitatibus fugiat officiis magni dicta expedita.",
  },
  {
    image: patient_docs,
    date: "Tuesday 06,September 2021",
    author: "|By Author1",
    views: 75,
    likes: 66,
    article: "This Article's Title goes Here,but not too long.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo sunt consequatur dignissimos cumque qui odio quia beatae. Optio dolore perferendis praesentium quia nesciunt necessitatibus fugiat officiis magni dicta expedita.",
  },
];
export const category = [
  {
    category: "Sugery",
    number: 3,
  },
  {
    category: "Health",
    number: 5,
  },
  {
    category: "Medical",
    number: 8,
  },
  {
    category: "Professional",
    number: 10,
  },
];

export const doctors = [
  {
    image: oldDoc,
    name: "Dr.Davis",
    title: "Dentist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aut aspernatur? Nihil facilis, itaque modi magnam voluptatum aspernatur unde ipsum odit dolorum explicabo velit quo facere. Maiores minima doloribus blanditiis?",
  },
  {
    image:anotherDoc ,
    name: "Dr.Aaron",
    title: "Dentist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aut aspernatur? Nihil facilis, itaque modi magnam voluptatum aspernatur unde ipsum odit dolorum explicabo velit quo facere. Maiores minima doloribus blanditiis?",
  },
  {
    image:fmDoc  ,
    name: "Dr.Honorine",
    title: "Dentist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aut aspernatur? Nihil facilis, itaque modi magnam voluptatum aspernatur unde ipsum odit dolorum explicabo velit quo facere. Maiores minima doloribus blanditiis?",
  },
  {
    image: m_dr,
    name: "Dr.Roger",
    title: "Dentist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aut aspernatur? Nihil facilis, itaque modi magnam voluptatum aspernatur unde ipsum odit dolorum explicabo velit quo facere. Maiores minima doloribus blanditiis?",
  },
  {
    image: fm_dr,
    name: "Dr.Landra",
    title: "Dentist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aut aspernatur? Nihil facilis, itaque modi magnam voluptatum aspernatur unde ipsum odit dolorum explicabo velit quo facere. Maiores minima doloribus blanditiis?",
  },
  {
    image:   male_doc,
    name: "Dr.Navis",
    title: "Dentist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aut aspernatur? Nihil facilis, itaque modi magnam voluptatum aspernatur unde ipsum odit dolorum explicabo velit quo facere. Maiores minima doloribus blanditiis?",
  },
];

export const titles =[
  {
    h3:"WELCOME TO MEDDICAL",
    h1:"A Great Place to Receive Care"
  },
  {
    h3:"ALWAYS CARING",
    h1:"Our Specialties",
  },
  {
    h3:"ALWAYS CARING",
    h1:"Our Specialties",
  },
  {
    h3:"TRUSTED CARE",
    h1:"Our Doctors",
  }
];
 
const SocialIcons = () => (
  <>
    <FaLinkedinIn />
    <FaFacebook />
    <FaInstagram />
  </>
);

export const outdoctors = [
  {
    image: m_dr,
    name: "Doctor's name",
    title: "NEUROLOGY",
    icon: <SocialIcons />,
    more: "view profile",
  },
  {
    image: male_doc,
    name: "Doctor's name",
    title: "NEUROLOGY",
    icon: <SocialIcons />,
    more: "view profile",
  },
  {
    image: fm_dr,
    name: "Doctor's name",
    title: "NEUROLOGY",
    icon: <SocialIcons />,
    more: "view profile",
  },
];


export const Contact = [
  {
    icon: <BiPhoneCall />,
    title:"EMERGENCY",
    descr1:"(237) 681-812-255",
    descr2:"(237) 666-331-894",
  },
  {
    icon: <SlLocationPin />,
    title:"LOCATION",
    descr1:"0123 Some place",
    descr2:"9876 Some country",
  },
  {
    icon: <MdOutlineEmail />,
    title:"EMAIL",
    descr1:"fildineeesoe@gmil.com",
    descr2:"myebstudios@gmail.com",
  },
  {
    icon:<MdOutlineWatchLater />,
    title:"WORKING HOURS",
    descr1:"Mon-Sat 09:00-20:00",
    descr2:"Sunday Emergency only",
  }
];

