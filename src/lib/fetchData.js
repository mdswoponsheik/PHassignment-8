import { toast } from "react-toastify";




// export const dynamic = "force-dynamic";


const baseUrl =
  process.env.BETTER_AUTH_URL || "http://localhost:3000";

// const res = await fetch(`${baseUrl}/instructorData.json`,{cache:"no-store"});


export const coursesFetch = async () => {
  const data = [
  {
    "id": 1,
    "title": "Complete Web Development Bootcamp",
    "instructor": "John Doe",
    "duration": "20 hours",
    "releaseDate": "2025-04-01",
    "rating": 4.8,
    "level": "Beginner",
    "description": "Learn full-stack web development from scratch.",
    "image": "https://i.ibb.co.com/7J01QW26/Web-Development.png",
    "category": "Development",
    "curriculum": [
      "HTML Basics",
      "CSS Fundamentals",
      "JavaScript Basics",
      "Responsive Design",
      "React Introduction",
      "Backend Basics (Node.js)",
      "REST API Development",
      "Final Project"
    ]
  },
  {
    "id": 2,
    "title": "Python for Data Science",
    "instructor": "Jane Smith",
    "duration": "15 hours",
    "releaseDate": "2026-05-01",
    "rating": 4.7,
    "level": "Intermediate",
    "description": "Master Python for data analysis and visualization.",
    "image": "https://i.ibb.co.com/vvVdWsTR/Python-Data-Science.png",
    "category": "Data Science",
     "curriculum": [
      "Python Basics",
      "NumPy Introduction",
      "Pandas Data Handling",
      "Data Cleaning",
      "Data Visualization (Matplotlib)",
      "Exploratory Data Analysis",
      "Mini Project"
    ]
  },
  {
    "id": 3,
    "title": "UI/UX Design Fundamentals",
    "instructor": "Michael Lee",
    "duration": "12 hours",
    "releaseDate": "2026-04-01",
    "rating": 4.6,
    "level": "Beginner",
    "description": "Learn the basics of user interface and user experience design.",
    "image": "https://i.ibb.co.com/35dbwGFB/UI-UX-Design.png",
    "category": "Design",
    "curriculum": [
      "Design Principles",
      "Color Theory",
      "Typography",
      "Wireframing",
      "Prototyping",
      "Figma Basics",
      "User Research",
      "Final UI Project"
    ]
  },
  {
    "id": 4,
    "title": "Machine Learning A-Z",
    "instructor": "Andrew Clark",
    "duration": "25 hours",
    "releaseDate": "2026-01-01",
    "rating": 4.9,
    "level": "Advanced",
    "description": "Comprehensive guide to machine learning algorithms and models.",
    "image": "https://i.ibb.co.com/bjHWRKdC/Machine-Learning.png",
    "category": "AI & ML",
      "curriculum": [
      "Introduction to ML",
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression Models",
      "Classification",
      "Neural Networks",
      "Model Evaluation",
      "Capstone Project"
    ]
  },
  {
    "id": 5,
    "title": "Digital Marketing Masterclass",
    "instructor": "Sarah Johnson",
    "duration": "10 hours",
    "releaseDate": "2025-05-01",
    "rating": 4.5,
    "level": "Beginner",
    "description": "Learn SEO, social media marketing, and online branding.",
    "image": "https://i.ibb.co.com/DJVtZNL/Digital-Marketing.png",
    "category": "Marketing",
    "curriculum": [
      "Marketing Basics",
      "SEO Fundamentals",
      "Social Media Marketing",
      "Facebook & Google Ads",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Tracking"
    ]
  },
  {
    "id": 6,
    "title": "React JS Crash Course",
    "instructor": "David Brown",
    "duration": "8 hours",
    "releaseDate": "2025-06-15",
    "rating": 4.7,
    "level": "Intermediate",
    "description": "Build modern web apps using React JS.",
    "image": "https://i.ibb.co.com/B52dwvjG/React-JS-Crash.png",
    "category": "Development",
    "curriculum": [
      "React Basics",
      "JSX",
      "Components",
      "Props & State",
      "Hooks (useState, useEffect)",
      "Routing",
      "API Integration",
      "Mini React Project"
    ]
  }
]



  // const res = await fetch(`${baseUrl}/coursesData.json`,{cache:"no-store"});
  // if (!res.ok) {
  //   throw new toast.error("Failed to fetch data");
  // }
  // const data = await res.json();
  return data;
};



export const instructorFetch = async () => {
const data =[
  {
    "id": 1,
    "name": "John Doe",
    "expertise": "Web Development",
    "experience": "5 years",
    "rating": 4.8,
    "courses": 12,
    "image": "https://i.ibb.co.com/9mkn0tNv/man-1.jpg",
    "bio": "Full-stack developer specializing in MERN stack."
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "expertise": "Data Science",
    "experience": "7 years",
    "rating": 4.7,
    "courses": 10,
    "image": "https://i.ibb.co.com/WNYySv3W/woman-1.webp",
    "bio": "Data scientist with expertise in Python and machine learning."
  },
  {
    "id": 3,
    "name": "Michael Lee",
    "expertise": "UI/UX Design",
    "experience": "6 years",
    "rating": 4.6,
    "courses": 8,
    "image": "https://i.ibb.co.com/KpCM07db/man-2.jpg",
    "bio": "Creative designer focused on user-centered design."
  },
  {
    "id": 4,
    "name": "Sarah Johnson",
    "expertise": "Digital Marketing",
    "experience": "4 years",
    "rating": 4.5,
    "courses": 6,
    "image": "https://i.ibb.co.com/6Rk8QnYK/woman-2.webp",
    "bio": "Marketing expert in SEO, social media, and branding."
  }
]






  // const res = await fetch(`${baseUrl}/instructorData.json`,{cache:"no-store"});
  // if (!res.ok) {
  //   throw new toast.error("Failed to fetch data");
  // }
  // const data = await res.json();
  return data;
 
  };

 
