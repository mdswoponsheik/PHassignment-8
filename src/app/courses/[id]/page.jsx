// "use client"

// import { use, useEffect, useState } from "react";
import { Card, } from "@heroui/react";
import { IoStar, IoStarHalf } from "react-icons/io5";
// import { useRouter } from "next/navigation";
import { coursesFetch } from "@/lib/fetchData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";



const Details = async ({ params }) => {

    const { id } = await params;

    // const router = useRouter();
    // const [courses, setCourses] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("/coursesData.json");
    //         const data = await res.json();

    //         setCourses(data);
    //     };

    //     fetchData();

    // }, []);

    // const coursesDetails = courses.find(c => c.id == id);


    // useEffect(() => {
    //     const rawUser = localStorage.getItem("user");
    //     const user = rawUser ? JSON.parse(rawUser) : null;

    //     if (!user) {
    //         router.push("/login");
    //     } else {
    //         setLoading(false);
    //     }
    // }, []);

    // if (loading) return <p>Loading...</p>;


    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    if (!user) {
        redirect("/login");
    }

    const coursesDetail = await coursesFetch()
    const courseDetails = coursesDetail.find(c => c.id == id);
    // console.log(coursesDetails);


    return (
        <div className="bg-green-50 py-10">
           

            <div className="card bg-green-200 grid grid-cols-1 lg:grid-cols-2 w-9/10 p-10 mx-auto shadow-sm">
                <figure className="">
                    <Image
                        src={courseDetails?.image}
                        alt={`${courseDetails?.title}'s Image`}
                        className=" rounded-xl" width={260} height={140} />
                </figure>

                <div className="">
                    <div className="card-body items-center text-center mb-7">
                        <h2 className="card-title pr-8 text-2xl sm:text-4xl font-bold mb-2">{courseDetails?.title}</h2>
                        <p className="text-lg">{courseDetails?.description}</p>
                        <p className="text-xl font-semibold"><span className="font-bold">Instructor:</span> {courseDetails?.instructor}</p>
                    </div>
                    <div className="flex justify-around my-5">
                        <p className="text-xl "><span className="font-semibold">Label:</span>{courseDetails?.level}</p>
                        <p className="text-xl "><span className="font-semibold">Category:</span>{courseDetails?.category}</p>
                    </div>
                    <div className="flex justify-around my-5">
                        <p className="text-xl"><span className="font-semibold">Duration:</span>{courseDetails?.duration}</p>

                        <p className="flex items-center text-xl">
                            <span className="font-semibold mr-2 "> Rating</span><br />
                            <span className="text-2xl font-bold text-green-400 mr-1">{courseDetails?.rating}</span>
                            <span className="flex gap-0.5"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
                        </p>
                    </div>
                </div>
            </div>




            <div className="card w-9/10 mx-auto h-100 bg-blue-200 mt-1 ">
                <h2 className="text-center pb-4 mb-2 text-3xl sm:text-5xl font-bold">Course curriculum</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
                    {courseDetails?.curriculum.map((topic, i) => {
                        return <div key={i}>
                            <li className="text-4xl font-semibold bg-white rounded-2xl p-2 m-2">{i + 1}. {topic}</li>
                        </div>
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Details