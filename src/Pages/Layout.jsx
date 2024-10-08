import { Outlet, Link } from "react-router-dom"

function Layout() {

    return (
        <main>

            <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to='/' class="font-semibold text-2xl tracking-tight">VetMed</Link>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <Link to='about' class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </Link>
                        <Link to='contact' class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Contact
                        </Link>
                        <Link to='services' class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Services
                        </Link>
                    </div>
                    
                </div>
            </nav>

            <section>
                <Outlet></Outlet>
            </section>

        </main>
    )

}

export default Layout