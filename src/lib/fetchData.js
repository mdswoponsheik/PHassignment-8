import { toast } from "react-toastify";


export const coursesFetch = async () => {
  const res = await fetch("http://localhost:3000/coursesData.json"); 
  if (!res.ok) {
    throw new toast.error("Failed to fetch data");  }
  const data = await res.json();
  return data;
};



export const istructorFetch = async () => {
  const res = await fetch("http://localhost:3000/instructorData.json");
  if (!res.ok) {
    throw new toast.error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
 
  };
