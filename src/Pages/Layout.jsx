import { Outlet, Link } from "react-router-dom"

function Layout () {

    return (
        <main>

            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                    <li>
                        <Link to='contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='services'>Services</Link>
                    </li>
                </ul>
            </div>

            <section>
                <Outlet></Outlet>               
            </section>
            
        </main>
    )

}

export default Layout