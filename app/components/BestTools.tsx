import React from 'react'

const BestTools = () => {
  return (
    <section>
      <div className="max-w-2xl mx-auto mb-20">
        <h2 className="mb-5 text-3xl font-semibold text-center text-white font-heading sm:text-5xl">
          {" "}
          The best tools for creating SaaS product videos{" "}
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-b-[3px] border-[#25cfa45f]"></span>
            <h2 className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">
              included
            </h2>
          </div>
        </h2>
        <p className="text-center text-gray-100 sm:text-lg opacity-60">
          {" "}
          Ever wondered how SaaS companies create their amazing product videos?
          We've compiled the ultimate list of best tools that will help you
          create outstanding SaaS product videos with little to no effort.{" "}
        </p>
      </div>
      <div className="max-w-4xl mx-auto -mt-12">
        <img
          src="https://www.productvideoexamples.com/_nuxt/toolsmarketing.11c3fa7d.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default BestTools