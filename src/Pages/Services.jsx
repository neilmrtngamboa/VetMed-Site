import { Link } from "react-router-dom"


function Services () {

    return (
        <main>
            <div className="bg-blue-600">
                <h1 className="text-center text-6xl font-extrabold text-white p-5">Our Services</h1>
                <div className="p-10">
                    <p className="text-center text-xl text-gray-300">Our practice philosophy is simple: We take a personal approach to our patients and their owners. When your pet is under our care, it is treated like one of our own. 
                    At Broadway Animal Hospital, we stress the basics.</p>
                    <p className="text-center mt-9 text-xl text-gray-300">
                    All decisions are made with you, not for you. A strong doctor-client-patient relationship is based on trust, and together, we’ll find the treatment plan that works best for you and your pet. Come see the difference a personal approach to veterinary care makes.
                    </p>
                </div>
            </div>
            

            <section className="bg-blue-400 p-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 p-5 gap-5">
                    <div className="border-t border-black lg:w-80 w-52">
                        <h2 className="text-2xl mt-3 font-bold w-52 text-blue-950">Wellness & Preventive Care</h2>
                        <p className="text-lg mt-3 text-gray-700 font-light">Just like you, we want your pet to live the longest, healthiest life possible. Annual…</p>
                        <Link className="hover:underline text-slate-50 font-bold">Learn More</Link>
                    </div>

                    <div className="border-t border-black lg:w-80 w-52">
                        <h2 className="text-2xl mt-3 font-bold text-blue-950">Dentistry</h2>
                        <p className="text-lg mt-3 text-gray-700 font-light">Regular dental care is essential for keeping your pet healthy and happy. Dental disease is…</p>
                        <Link className="hover:underline text-slate-50 font-bold">Learn More</Link>
                    </div>

                    <div className="border-t border-black lg:w-80 w-52">
                        <h2 className="text-2xl mt-3 font-bold text-blue-950">Diagnostics</h2>
                        <p className="text-lg mt-3 text-gray-700 font-light">Accurate detection is key when it comes to treating your pet, and we offer complete…</p>
                        <Link className="hover:underline text-slate-50 font-bold">Learn More</Link>
                    </div>

                    <div className="border-t border-black lg:w-80 w-52 mt-16">
                        <h2 className="text-2xl mt-3 font-bold text-blue-950">Surgery</h2>
                        <p className="text-lg mt-3 text-gray-700 font-light">Surgery is often the most effective way to treat a serious injury or disorder, and…</p>
                        <Link className="hover:underline text-slate-50 font-bold">Learn More</Link>
                    </div>

                </div>

            </section>

            <section className="py-20 px-10 bg-blue-600">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                    
                    <div>
                        <img className="rounded-lg" src="https://cdn.prod.website-files.com/5fa59dd29ad1b41ab669a8e4/62cca24a63949c65269ca90c_Hero.png" alt="" />
                    </div>

                    <div>
                        <h3 className="mx-auto font-semibold text-7xl text-white">Request an Appointment</h3>
                        <p className="mt-10 text-xl tracking-wide text-gray-300 text-justify">Our knowledgeable and compassionate team is made up of life-long animal lovers dedicated to providing your pets the best in veterinary care. Give us a call today and let's start working together to create a care plan for 
                            your pet designed to keep them healthy and happy for many years to come.</p>
                        <div className="flex mt-5 justify-evenly">
                            <button className="rounded-full p-3 font-semibold mt-3 bg-white text-blue-950 hover:bg-blue-900 hover:text-white transition duration-300">MAKE APPOINTMENT</button>
                            <button className="rounded-full p-3 font-semibold mt-3 bg-white text-blue-950 hover:bg-blue-900 hover:text-white transition duration-300 tracking-widest">(12) 345 6789</button>
                        </div>
                    </div>

                </div>

            </section>
            
        </main>
    )

}

export default Services