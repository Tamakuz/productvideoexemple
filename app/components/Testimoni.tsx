import React from 'react'

const Testimoni = () => {
  return (
    <section>
    <div className="container mx-auto sm:px-4">
      <div className="relative w-10/12 pb-6 mx-auto mb-2 text-center sm:max-w-3xl sm:px-6">
        <img
          className="absolute top-0 left-0 w-20 opacity-20"
          src="/_nuxt/quote-top-violet.1ffb5ae6.svg"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 w-20 opacity-20"
          src="/_nuxt/quote-down-violet.7e0d6a0a.svg"
          alt=""
        />
        <div className="relative">
          <h3 className="font-thin text-gray-200 opacity-80 sm:text-lg">
            Discovering Product Video Examples was a <b>game-changer</b> for our
            product launch! The platform saved us <b>countless hours</b>{" "}
            searching for inspiring videos. With their incredible library, we
            found the perfect inspiration for our Product Hunt launch in no
            time. Product Video Examples is truly the <b>ultimate site</b> for
            creative SaaS video inspiration!"
          </h3>
        </div>
      </div>
      <div className="relative z-50 mb-8 text-center text-gray-200">
        <img
          className="w-10 h-10 mx-auto mb-3 rounded-full"
          src="https://tailscan.com/erwin.jpg"
          alt=""
        />
        <h3 className="text-lg font-thin text-white opacity-70">
          Erwin, CEO of{" "}
          <a
            href="https://tailscan.com/?ref=productvideoexamples.com"
            target="_blank"
          >
            Tailscan
          </a>
        </h3>
        <img
          src="https://tailscan.com/mediakit/4_Colour_Logo.png"
          alt=""
          className="inline-block rounded-lg w-28 opacity-60"
        />
      </div>
    </div>
    </section>
  )
}

export default Testimoni