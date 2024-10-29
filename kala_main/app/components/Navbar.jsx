import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-centre">
    <div className='logo'>
    <img
      src="/kalakartLogo.ico"
      width={50}
      height={50}
      alt="Picture"/>
       </div>
       <div className="links flex gap-10">
      {[
        { name: "Services", path: "/services" },
        { name: "Our Work", path: "/our-work" },
        { name: "About Us", path: "/about" },
        { name: "Insights", path: "/insights" },
        { name: "LogIn", path: "/LogIn" },
        { name: "SignUp", path: "/SignUp" }
      ].map((item, index) => (
        <Link key={index} href={item.path} className={`text-lg text-zinc-900 capitalize font-light ${index === 4 && "ml-32"}`}>
          {item.name}
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Navbar