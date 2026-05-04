import { toast } from "react-toastify";
export const dynamic = "force-dynamic";

const baseUrl =
  process.env.BETTER_AUTH_URL || "http://localhost:3000";

const res = await fetch(`${baseUrl}/instructorData.json`);


export const coursesFetch = async () => {
  const res = await fetch(`${baseUrl}/coursesData.json`);
  if (!res.ok) {
    throw new toast.error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};



export const instructorFetch = async () => {
  const res = await fetch(`${baseUrl}/instructorData.json`);
  if (!res.ok) {
    throw new toast.error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
 
  };

 
