import Banner from "@/components/Banner/Banner";
import LearningTips from "@/components/LearningTips/LearningTips";
import NewReleases from "@/components/NewReleases/NewReleases";
import TOpCourses from "@/components/topcourses/TopCourses";
import {  instructorFetch } from "@/lib/fetchData";
import Image from "next/image";
import { IoStar, IoStarHalf } from "react-icons/io5";







export default async function Home() {
  const instructors = await instructorFetch();
  // console.log(instructors);
  return (
    <div>

      <Banner></Banner>
      <TOpCourses></TOpCourses>
      <LearningTips></LearningTips>
      <NewReleases></NewReleases>
      

      <div className="bg-purple-50 py-10 border-t mt-1">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10 ">{instructors?.length} Instructor Info</h2>
        <div className="w-9/10 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-3">


          {instructors?.map(instructor => {
            return <div key={instructor.id} className="">


              <div className="card bg-purple-100  grid grid-cols-1 lg:grid-cols-2 mx-auto shadow-sm">
                <figure className="">
                  <Image
                    src={instructor.image}
                    alt={`${instructor.name}'s Image`}
                    className=" rounded-xl" width={500} height={180} />
                </figure>

                <div className="">
                  <div className="card-body items-center text-center mb-7">
                    <h2 className="card-title pr-8 text-2xl sm:text-3xl font-bold mb-2">{instructor?.name}</h2>
                    <p className="text-lg">{instructor?.bio}</p>
                  </div>
                  <div className="flex justify-around my-5">
                    <p className="text-sm "><span className="text-xl font-semibold">Expertise:</span><br />{instructor?.expertise}</p>
                    <p className="text-sm "><span className="text-xl font-semibold">Experience:</span> <br />{instructor?.experience}</p>
                  </div>
                  <div className="flex justify-around my-5">
                    <p className="text-2xl"><span className= "text-xl font-semibold">courses: </span><span className="font-bold text-yellow-500">{instructor?.courses}</span></p>

                    <div className=" text-lg">
                      <p className="flex items-center"><span className="font-semibold mr-2 "> Rating <br /></span>
                      <span className="text-2xl font-bold text-green-400 mr-1">{instructor?.rating}</span></p>
                      <span className="flex gap-0.5"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
                    </div>
                  </div>
                </div>
              </div>



              {/* <div className="card bg-base-100 shadow-sm">
              <figure>
                <img
                  src={instructor.image}
                  alt={instructor.name} />
              </figure>
              <div className="card-body">
                <h3>{instructor.name}</h3>
                <p>{instructor.bio}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div> */}
            </div>
          })}

        </div>

      </div>
    </div>
  );
}
