import React from 'react'

const NavbarCompt = () => {
  return (
    <nav className="py-5 flex justify-between items-center ">
      <img src="/brand.png" alt="" className="w-[225px]" />
      <div className="flex items-center gap-10">
        <a href="#" className="text-base text-white hover:text-gray-200">
          Features
        </a>
        <a href="#" className="text-base text-white hover:text-gray-200">
          Blog
        </a>
        <a href="#" className="text-base text-white hover:text-gray-200">
          Pricing
        </a>
        <a href="#" className="text-base text-white hover:text-gray-200">
          Login
        </a>
        <a
          href="#"
          className="relative block px-5 py-2 overflow-hidden text-lg text-white border-2 group"
          style={{
            borderImage:
              "linear-gradient(to left, #f8721d, #d347ef, #5146e6) 1",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0"
            style={{
              backgroundImage:
                "linear-gradient(to left, #f8721d, #d347ef, #5146e6)",
            }}
          />
          <p className="relative z-10 group-hover:text-white">Get access now</p>
        </a>
      </div>
    </nav>
  );
}

export default NavbarCompt