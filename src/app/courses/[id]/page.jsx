"use client"

import { use, useEffect, useState } from "react";
import { Card, } from "@heroui/react";
import { IoStar, IoStarHalf } from "react-icons/io5";



const Details = ({ params }) => {
    const { id } = use(params);
    // const { id } = await params;


    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/coursesData.json");
            const data = await res.json();

            setCourses(data);
        };

        fetchData();

    }, []);

    const coursesDetails = courses.find(c => c.id == id);

    // useEffect(() => {
    //     const curriculumFetch = async () => {
    //         const res = await fetch("/curriculumData.json");
    //         const data = await res.json();

    //         setCurriculums(data);
    //     };

    //     curriculumFetch();

    // }, []);

    // console.log(curriculums);



    return (
        <div className="bg-green-50 py-10">

            <div className="card bg-green-200 grid grid-cols-1 lg:grid-cols-2 w-9/10 p-10 mx-auto shadow-sm">
                <figure className="">
                    <img
                        src={coursesDetails?.image}
                        alt={`${coursesDetails?.title}'s Image`}
                        className=" rounded-xl" />
                </figure>

                <div className="">
                    <div className="card-body items-center text-center mb-7">
                        <h2 className="card-title pr-8 text-2xl sm:text-4xl font-bold mb-2">{coursesDetails?.title}</h2>
                        <p className="text-lg">{coursesDetails?.description}</p>
                        <p className="text-xl font-semibold"><span className="font-bold">Instructor:</span> {coursesDetails?.instructor}</p>
                    </div>
                    <div className="flex justify-around my-5">
                        <p className="text-xl "><span className="font-semibold">Label:</span>{coursesDetails?.level}</p>
                        <p className="text-xl "><span className="font-semibold">Category:</span>{coursesDetails?.category}</p>
                    </div>
                    <div className="flex justify-around my-5">
                        <p className="text-xl"><span className="font-semibold">Duration:</span>{coursesDetails?.duration}</p>

                        <p className="flex items-center text-xl">
                            <span className="font-semibold mr-2 "> Rating</span><br />
                            <span className="text-2xl font-bold text-green-400 mr-1">{coursesDetails?.rating}</span>
                            <span className="flex gap-0.5"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
                        </p>
                    </div>
                </div>
            </div>




            <div className="card w-9/10 mx-auto h-100 bg-blue-200 mt-1 ">
                <h2 className="text-center pb-4 mb-2 text-3xl sm:text-5xl font-bold">Course curriculum</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
                    {coursesDetails?.curriculum.map((topic, i) => {
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