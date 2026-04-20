import projectImg1 from '../assets/projectImg1.avif';
import projectImg2 from '../assets/projectImg2.avif';
import projectImg3 from '../assets/projectImg3.avif';
import projectImg4 from '../assets/projectImg4.avif';
import projectImg5 from '../assets/projectImg5.avif';
import projectImg6 from '../assets/projectImg6.avif';
import heroImg from '../assets/heroImg.jpg';
import profileImg1 from '../assets/profile1.jpg';
import profileImg2 from '../assets/profile2.jpg';
import profileImg3 from '../assets/profile3.jpg';
import profileImg4 from '../assets/profile4.jpg';
import profileImg5 from '../assets/profile5.jpg';



import { FaArrowRight, FaBrain, FaChartArea, FaCube, FaGlobe, FaMobileAlt, FaRobot } from 'react-icons/fa';


export const assets = {
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg5,
  projectImg6,
  heroImg,
  profileImg1,
  profileImg2,
  profileImg3,
  profileImg4
}




export const services = [
    {
      icon: FaCube,
      title: '3D Product Visualization',
      description: 'Immersive 3D models and AR experiences that showcase your products in stunning detail.',
      color: 'primary',
      linkColor: 'text-primary-light'
    },
    {
      icon: FaBrain,
      title: 'AI Integration',
      description: 'Custom AI solutions that automate processes and deliver intelligent user experiences.',
      color: 'accent',
      linkColor: 'text-accent'
    },
    {
      icon: FaGlobe ,
      title: 'Web3 Development',
      description: 'Blockchain-based solutions and decentralized applications for the new internet era.',
      color: 'secondary',
      linkColor: 'text-secondary'
    },
    {
      icon: FaMobileAlt,
      title: 'Immersive Apps',
      description: 'Next-generation mobile experiences with AR, VR, and spatial computing capabilities.',
      color: 'primary',
      linkColor: 'text-primary-light'
    },
    {
      icon: FaChartArea,
      title: 'Data Visualization',
      description: 'Interactive dashboards and data stories that make complex information accessible.',
      color: 'accent',
      linkColor: 'text-accent'
    },
    {
      icon: FaRobot ,
      title: 'Automation Systems',
      description: 'Custom workflows and intelligent automation that streamline your operations.',
      color: 'secondary',
      linkColor: 'text-secondary'
    }
  ];


export const stats = [
    { number: "200+", label: "Projects Completed", color: "text-primary-light" },
    { number: "98%", label: "Client Satisfaction", color: "text-accent" },
    { number: "15", label: "Industry Awards", color: "text-secondary" },
    { number: "8", label: "Years Experience", color: "text-primary-light" }
  ];



export const projects = [
    {
      title: "NexaVerse Platform",
      type: "Metaverse Experience",
      description: "A groundbreaking metaverse platform for virtual commerce and social interaction.",
      image: projectImg1,
      linkColor: "text-primary-light",
      typeColor: "text-primary-light"
    },
    {
      title: "NeuroLink Analytics",
      type: "AI Solution",
      description: "Predictive analytics platform powered by neural networks and machine learning.",
      image: projectImg2,
      linkColor: "text-primary-light",
      typeColor: "text-primary-light"
    },
    {
      title: "AR Commerce Hub",
      type: "AR Experience",
      description: "Augmented reality shopping experiences that drive engagement and conversions.",
      image: projectImg3,
      linkColor: "text-primary-light",
      typeColor: "text-primary-light"
    },
    {
      title: "SmartCity Dashboard",
      type: "Data Visualization",
      description: "Interactive dashboards visualizing real-time smart city metrics and analytics.",
      image: projectImg4,
      linkColor: "text-primary-light",
      typeColor: "text-primary-light"
    },
    {
      title: "Virtual Event Platform",
      type: "Web3 Solution",
      description: "A decentralized platform for hosting and managing virtual events globally.",
      image: projectImg5,
      linkColor: "text-accent",
      typeColor: "text-accent"
    },
    {
      title: "AI Design Assistant",
      type: "AI Tool",
      description: "An intelligent assistant that helps designers generate creative concepts instantly.",
      image: projectImg6,
      linkColor: "text-secondary",
      typeColor: "text-secondary"
    }
  ];

export   const testimonials = [
    {
      name: "Sarah Chen",
      position: "CTO, TechNova",
      image: profileImg1,
      text: "Nexa's 3D visualization platform transformed our product presentations. The level of detail and interactivity exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      position: "CEO, NeuroLink",
      image: profileImg2,
      text: "The AI integration Nexa developed for our platform resulted in a 40% increase in user engagement. Their technical expertise is unmatched.",
      rating: 3.5
    },
    {
      name: "Emma Zhang",
      position: "Director, FutureLabs",
      image: profileImg3,
      text: "Working with Nexa on our Web3 project was a game-changer. They delivered complex blockchain solutions with remarkable clarity.",
      rating: 4.5
    },

     {
      name: "Neha Shah",
      position: "Marketing Head, FutureLabs",
      image: profileImg4,
      text: "Their creativity and execution are top-notch. Every detail was thoughtfully designed. We saw immediate improvement in user engagement.",
      rating: 2.5
    },

    {
      name: "Rahul Mehta",
      position: "Business Owner",
      image: profileImg5,
      text: "Working with this team was an amazing experience. The design quality and attention to detail exceeded our expectations. Highly recommended!",
      rating: 4.5
    },
  ];