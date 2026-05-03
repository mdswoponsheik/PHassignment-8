"use client"
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";



const NewReleases = () => {

    const [courses, setCourses] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/coursesData.json");
          const data = await res.json();
    
          const topCourses = data.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 2);
          setCourses(topCourses);
        };
    
        fetchData();
    
      }, []);
  return (
    <div>
      <div>

        <h3 className="text-center text-4xl sm:text-5xl font-bold my-10">New Releases</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto mb-10  gap-5 ">
          {courses.map(course => {
            return <div key={course.id} className="">
              <Card className="w-full bg-green-50 items-stretch md:flex-row">
                <div className=" shrink-0 overflow-hidden rounded-2xl h-[140px] sm:h-[140px] w-full sm:w-[260px] flex items-center">
                  {/* <Image src={course.image} alt="course image" width={50} height={50}></Image> */}
                  <img src={course.image} alt="image"></img>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <Card.Header className="gap-1">
                    <Card.Title className="pr-8 text-2xl font-bold mb-2">{course.title}</Card.Title>
                    <p className="text-xl font-semibold"><span className="font-bold">Instructor:</span> {course.instructor}</p>

                  </Card.Header>
                  <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col text-sm  text-foreground">

                      <span className="font-bold mr-2 "> Rating</span>
                      <h3 className="text-2xl font-bold text-green-400">{course.rating}</h3>
                      <div className="flex gap-0.5">
                        <IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf />
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-green-500">Release Date:<br />{course.releaseDate}</h2>
                    <Link href={`/courses/${course.id}`}>
                      <Button className="w-full sm:w-auto">See Details</Button>
                    </Link>
                  </Card.Footer>
                </div>
              </Card>
            </div>
          })}
        </div>
    </div>
    </div>
  )
}

export default NewReleases
