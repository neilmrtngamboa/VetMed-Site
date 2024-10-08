import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <main>

            <section className="bg-blue-200 sm:flex lg:p-16 p-12">

                <div className="basis-1/2">

                    <h1 className="text-4xl lg:text-7xl font-bold my-16">We Treat Your Pet Like It's One of Our Own!</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 font-bold">

                        <button className="rounded-full bg-blue-300 p-3">Request an appointment</button>
                        <button className="rounded-full bg-blue-300 p-3">Call +12 345 678 9012</button>

                    </div>

                    <div className="flex gap-2 mt-5">
                        <button className="rounded-full bg-blue-300 p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 fill-blue-900"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </button>

                        <button className="rounded-full bg-blue-300 p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 fill-blue-900"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </button>

                    </div>


                </div>

                <div className="basis-1/2">
                    <img className="mx-auto mb-14" src="https://clipart-library.com/2023/img-hero-vet.png" alt="" />

                </div>



            </section>

            <section className="bg-blue-400 sm:flex p-14">

                <div className="basis-1/2">
                    <img src="https://images.vexels.com/content/281837/preview/veterinarian-animals-people-a209c2.png" alt="" />

                </div>

                <div className="basis-1/2 mt-10">

                    <h2 className="lg:text-6xl text-4xl font-bold">Quality veterinary care, right here in your neighborhood</h2>
                    <p className="mt-16 font-light text-md">Serving the pets of the Bronx and Westchester communities since 1982, Broadway Animal Hospital
                        of Riverdale is one of the few locally owned and operated veterinary practices in the area.
                        We offer a comprehensive range of veterinary services to address the needs of dogs and cats!
                        Our skilled and caring medical team is here whether your pet needs wellness care or advanced
                        medical treatment. We are your neighborhood vet!
                    </p>
                    <button className="bg-white rounded-full p-3 mt-10">Our Services</button>

                </div>

            </section>

            <section className="bg-blue-200 sm:flex lg:p-20 p-14">

                <div className="basis-1/2 mt-14">
                    <h3 className="text-4xl font-semibold">A Personal Approach to Veterinary Care</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16">

                        <div>
                            <hr className="border-blue-600" />
                            <h4 className="font-semibold text-4xl mt-5">Detailed Histories</h4>
                            <p className="mt-4">We take detailed histories to learn as much as possible about our patients and their problems.</p>

                        </div>

                        <div>
                            <hr className="border-blue-600" />
                            <h4 className="font-semibold text-4xl mt-5">Thorough Exams</h4>
                            <p className="mt-4">We give thorough physical exams to help guide our diagnostic approach.</p>

                        </div>

                        <div>
                            <hr className="border-blue-600" />
                            <h4 className="font-semibold text-4xl mt-5">No Extra Tests</h4>
                            <p className="mt-4">We use appropriate tests selectively to help confirm a diagnosis.</p>

                        </div>

                        <div>
                            <hr className="border-blue-600" />
                            <h4 className="font-semibold text-4xl mt-5">Honest Help</h4>
                            <p className="mt-4">We are honest and open with our clients about their pet's situation, involving them in the decision-making process.</p>

                        </div>

                    </div>

                </div>

                <div className="basis-1/2">

                    <img className="my-auto mx-auto mt-16" src="https://static.vecteezy.com/system/resources/previews/017/190/037/original/dog-clipart-in-a-cup-png.png" alt="" />

                </div>

            </section>

            <section className="bg-blue-400 lg:p-20 p-10">

                <h5 className="font-bold text-center text-4xl">Hear from our clients!</h5>

                <Slider {...settings} className="mt-10">
                    <div>
                        <svg className="w-8 h-8 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <p className="font-semibold lg:text-2xl text-lg text-center">I've been going here for over 10 years (with some time in between) and I always am satisfied with the care my baby and I receive. Thanks BAHR for all you ladies and gents do.</p>
                        <p className="font-extrabold lg:text-2xl text-lg text-center my-4">Joselu R.</p>
                    </div>

                    <div>
                        <svg className="w-8 h-8 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <p className="font-semibold lg:text-2xl text-lg text-center">I can vouch for the level of professionalism and courtesy of this veterinarian practice. Special shout out to Samantha for answering all my questions over the phone and going above and beyond for customers!</p>
                        <p className="font-extrabold lg:text-2xl text-lg text-center my-4">Joselu R.</p>
                    </div>

                    <div>
                        <svg className="w-8 h-8 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <p className="font-semibold lg:text-2xl text-lg text-center">Dr. Quack is simply the best. He and Sherry made my visit so smooth and pleasant. Not the typical outcome for a vet visit. He took the time to talk to me through every possible outcome of my pet’s situation. So thoughtful and so attentive</p>
                        <p className="font-extrabold lg:text-2xl text-lg text-center my-4">Joselu R.</p>
                    </div>
                </Slider>

            </section>

            <section className="bg-blue-200 p-10">

                <div className="grid grid-cols-1 lg:grid-cols-3">

                    <div className="">

                        <h5 className="mb-5 font-semibold text-xl">Come see us</h5>
                        <iframe className="lg:w-80 lg:h-52 w-64 h-44" width="300" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                        <p className="mt-5">44 Jacksonville Cor. Trant., Dublin,Ireland</p>
                        <button className="p-2 bg-blue-700 font-semibold rounded-xl mt-5 text-white">Get directions</button>

                    </div>

                    <div className="">
                        <img className="h-48 w-52 mx-auto" src="https://lh7-us.googleusercontent.com/JLb40ZPz4Opsmi9rSMKgrM5yTPq-TEe7mvYbK1Sc4_K2VkPiVOmIfsPNbxf5b9OJo447B7eCzgIQzx-oOY5XC6weX2k78uthkAutk4eRRvI-kZCncq10HqsFI6TwsSzIEakDkKGQ20bypWSu4rftCQ" alt="" />
                        <p className="text-center mt-5 text-xl font-bold">NEWSLETTER SIGN UP</p>
                        <div className="grid grid-cols-1 place-items-center">
                            <p className="mt-4 text-xl font-semibold text-center">FULL NAME</p>
                            <input className="rounded-full mt-2 w-60 h-10" type="text" name="fullName" id="fullName" required />
                            <p className="mt-4 text-xl font-semibold text-center">EMAIL</p>
                            <input className="rounded-full mt-2 w-60 h-10" type="email" name="email" id="email" required />
                            <button className="p-2 bg-white rounded-full mt-4 w-60">SIGN UP</button>
                        </div>

                        <div className="flex justify-center gap-4 mt-8">
                            <button className="rounded-full bg-blue-300 p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 fill-blue-900"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </button>

                            <button className="rounded-full bg-blue-300 p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 fill-blue-900"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </button>
                        </div>




                    </div>

                    <div>
                        <p className="text-xl text-center">HOSPITAL HOURS</p>
                        <div className="grid grid-cols-1 p-5">


                        </div>
                        <table className="table-auto border-separate p-5">
                            <thead className="">
                                <tr>
                                    <th>Day</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>Monday</td>
                                    <td>9:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>9:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>9:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>9:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>9:00 AM - 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>One Saturday a month
                                        Call for availablity</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>Closed</td>
                                </tr>

                            </tbody>

                        </table>
                        <div className="grid grid-cols-1 place-items-center">
                            <p className="text-center font-semibold mt-8">Email:</p>
                            <a href="#" className="mt-3 text-lg hover:font-semibold">sampleemail@sample.com</a>
                            <p className="text-center font-semibold mt-8">Call:</p>
                            <a href="#" className="mt-3 text-lg hover:font-semibold">(12) 345-6789</a>
                            <button className="rounded-full p-3 font-semibold mt-3 bg-blue-700 hover:bg-blue-800 text-white">REQUEST AN APPOINTMENT</button>

                        </div>
                        

                        
                    </div>


                </div>



            </section>

        </main>
    )

}

export default Home