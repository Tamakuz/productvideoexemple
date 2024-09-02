import React from 'react'

const PeopleLove = () => {
  return (
    <section>
      <div className="max-w-2xl mx-auto mb-20">
        <h2 className="mb-5 text-4xl font-semibold text-center text-white font-heading sm:text-5xl">
          {" "}
          People{" "}
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-b-[3px] border-[#6149cfa6]"></span>
            <h2 className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">
              love
            </h2>
          </div>{" "}
          to watch videos{" "}
        </h2>
        <p className="text-center text-gray-100 sm:text-lg opacity-60">
          {" "}
          SaaS businesses use video as an important component of their
          interactions with customers. Video is a powerful tool for building
          trust, educating, and engaging with your audience.{" "}
        </p>
      </div>
      <div className="w-10/12 mx-auto mb-4 -mt-12 sm:mb-0 sm:mt-0 sm:pt-6 sm:max-w-3xl">
        <div className="flex flex-wrap justify-center -m-6 divide-y divide-gray-600 md:-m-16 md:divide-y-0 md:divide-x">
          <div className="w-full p-6 md:w-1/2 md:p-16">
            <h2 className="mb-3 text-4xl font-bold text-center text-transparent sm:text-6xl font-heading bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
              {" "}
              202%{" "}
            </h2>
            <h3 className="mb-3 text-lg font-semibold text-center text-gray-100 font-heading">
              Video Consumption Rate
            </h3>
            <p className="text-sm text-center text-gray-500">
              {" "}
              More people are watching videos online than ever before. In fact,
              their video consumption has more than doubled since 2018.{" "}
            </p>
          </div>
          <div className="w-full p-6 md:w-1/2 md:p-16">
            <h2 className="mb-3 text-4xl font-bold text-center text-transparent sm:text-6xl font-heading bg-clip-text bg-gradient-to-tl from-sky-400 to-sky-200">
              {" "}
              87%{" "}
            </h2>
            <h3 className="mb-3 text-lg font-semibold text-center text-gray-100 font-heading">
              Marketers report a positive ROI
            </h3>
            <p className="text-sm text-center text-gray-500">
              {" "}
              Marketers are extremely optimistic about the return on investment
              provided by video, due to its big influence on traffic, sales, and
              education.{" "}
            </p>
          </div>
        </div>
        <div className="text-white opacity-[0.15] italic w-full flex justify-end text-xs mt-4 items-center">
          {" "}
          Wyzowl State of Video Marketing Report 2023{" "}
        </div>
      </div>
    </section>
  );
}

export default PeopleLove