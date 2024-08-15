
import { MdMenu } from "react-icons/md";

const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "#",
    },
    {
      id: 3,
      title: "About Us",
      link: "#",
    },
    {
      id: 4,
      title: "Our Team",
      link: "#",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "#",
    },
  ];

const Navbar = () => {
  return (
    <nav>
    <div className="container py-10 flex justify-between items-center">
        {/*Logo Section*/}
        <div>
            <h1 className="font-bold text-2xl">
                CrisKol Design
            </h1>
        </div>
        {/*Menu Section*/}
        <div className="hidden lg:block">
            <ul className="flex items-center gap-3">
                {NavbarMenu.map((menu) => (
                    <li key={menu.id}>
                        <a href={menu.path} className="inline-block py-2 px-3 cursor-pointer hover:text-secondary relative group">
                            <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 bottom-0 group-hover:block hidden"></div>
                            {menu.title}
                        </a>
                    </li>
                ))}
                <button className="primary-btn">Sign In</button>
            </ul>
        </div>
        {/*Mobilee Hamburger menu section*/}
        <div className="lg:hidden">
            <MdMenu  className="text-4xl"/>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
