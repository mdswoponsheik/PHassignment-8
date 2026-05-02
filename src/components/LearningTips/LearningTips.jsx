import React from 'react'

const LearningTips = () => {
    return (

        <div className="bg-blue-50">

        <div className='w-9/10 mx-auto pb-10'>

            <div className="text-center py-7">
                <h2 className='text-center text-4xl sm:text-5xl font-bold '>Learning Tips</h2>
                <p className='text-xl md:text-2xl font-semibold'>Effective learning is not about studying harder, but studying smarter.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>



                {/* technice */}
                <div className="border-x-2 bg-blue-100 rounded-2xl p-3">
                    <h4 className='text-center text-2xl font-bold'>Study techniques</h4>
                    <div className="">

                        <h4 className='text-xl'>1. Active Recall</h4>
                        <p className=''>Test yourself instead of just reading. Try to remember information without looking at your notes.</p>

                        <h4 className='text-xl mt-3'>2. Spaced Repetition</h4>
                        <p className=''>Review topics at intervals (Day 1, Day 3, Day 7) instead of cramming everything at once.</p>

                        <h4 className='text-xl mt-3'>3. Pomodoro Technique</h4>
                        <p className=''>Study for 25 minutes, then take a 5-minute break. After 4 sessions, take a longer break.</p>
                    </div>

                </div>


                {/* time */}
                <div className="border-x-2 bg-blue-100 rounded-2xl p-3">
                    <h4 className='text-center text-2xl font-bold'>Time management tips</h4>

                    <div className="">

                        <h4 className='text-xl'>1. Plan Your Day</h4>
                        <p className=''>Set clear goals for what you want to study each day.</p>

                        <h4 className='text-xl mt-3'>2. Prioritize Tasks</h4>
                        <p className=''>Focus on important tasks before less important ones.</p>

                        <h4 className='text-xl mt-3'>3. Avoid Multitasking</h4>
                        <p className=''>Work on one task at a time to improve focus and efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LearningTips
