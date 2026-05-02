import Banner from "@/components/Banner/Banner";
import LearningTips from "@/components/LearningTips/LearningTips";
import TOpCourses from "@/components/topcourses/TopCourses";
import { IoStar, IoStarHalf } from "react-icons/io5";



const istructorData = async () => {
  const res = await fetch("http://localhost:3000/instructorData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}


export default async function Home() {
  const istructors = await istructorData();
  console.log(istructors);
  return (
    <div>

      <Banner></Banner>
      <TOpCourses></TOpCourses>
      <LearningTips></LearningTips>
      

      <div className="bg-purple-50 py-10 border-t mt-1">
        <h2 className="text-center text-4xl sm:text-5xl font-bold my-10 ">{istructors?.length} Istructor Info</h2>
        <div className="w-9/10 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-3">


          {istructors?.map(istructor => {
            return <div key={istructor.id} className="">


              <div className="card bg-purple-100  grid grid-cols-1 lg:grid-cols-2 mx-auto shadow-sm">
                <figure className="">
                  <img
                    src={istructor.image}
                    alt={`${istructor.name}'s Image`}
                    className=" rounded-xl" />
                </figure>

                <div className="">
                  <div className="card-body items-center text-center mb-7">
                    <h2 className="card-title pr-8 text-2xl sm:text-3xl font-bold mb-2">{istructor?.name}</h2>
                    <p className="text-lg">{istructor?.bio}</p>
                  </div>
                  <div className="flex justify-around my-5">
                    <p className="text-sm "><span className="text-xl font-semibold">Expertise:</span><br />{istructor?.expertise}</p>
                    <p className="text-sm "><span className="text-xl font-semibold">Experience:</span> <br />{istructor?.experience}</p>
                  </div>
                  <div className="flex justify-around my-5">
                    <p className="text-2xl"><span className= "text-xl font-semibold">courses: </span><span className="font-bold text-yellow-500">{istructor?.courses}</span></p>

                    <p className=" text-lg">
                      <div className="flex items-center"><span className="font-semibold mr-2 "> Rating <br /></span>
                      <span className="text-2xl font-bold text-green-400 mr-1">{istructor?.rating}</span></div>
                      <span className="flex gap-0.5"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></span>
                    </p>
                  </div>
                </div>
              </div>



              {/* <div className="card bg-base-100 shadow-sm">
              <figure>
                <img
                  src={istructor.image}
                  alt={istructor.name} />
              </figure>
              <div className="card-body">
                <h3>{istructor.name}</h3>
                <p>{istructor.bio}</p>
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
