import React from 'react'

const Footer = () => {
  return (
    <footer>
      <section className="relative px-3 py-24 -mt-10 sm:px-0">
        <img
          className="absolute bottom-0 left-0"
          src="/_nuxt/gradient-bg-footer.51e46e1d.svg"
          alt=""
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-wrap -m-6">
            <div className="w-full px-6 py-6 md:w-1/2 lg:w-5/12 md:px-20">
              <div className="flex flex-col justify-between h-full max-w-sm">
                <div className="mb-4 -ml-4">
                  <img
                    src="https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png"
                    alt="productvideoexamples.com logo"
                    className="w-52"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-200 mb-6">
                    {" "}
                    Learn from more than 100+ carefully selected videos of
                    companies that create engaging, shareable videos that not
                    only boost brand awareness but also convert customers.{" "}
                  </p>
                  <a
                    className="block mb-3 -ml-[70px] transform scale-[0.7]"
                    href="https://www.producthunt.com/posts/product-video-examples?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-product-video-examples"
                    target="_blank"
                  >
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&amp;theme=dark&amp;period=daily"
                      alt="Product Video Examples - Learn from the best product videos on the internet | Product Hunt"
                      style={{ width: "250px", height: "54px" }}
                      width="250"
                      height="54"
                    />
                  </a>
                  <p className="text-sm text-gray-400">
                    © Copyright 2024. All Rights Reserved by Seven Degrees Labs
                    LLC.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="text-base font-medium text-gray-500 mb-7 font-heading tracking-px">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-white font-heading hover:text-gray-200"
                      href="#features"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-white font-heading hover:text-gray-200"
                      href="#pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/blog"
                      className="text-base font-medium text-white font-heading hover:text-gray-200"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/terms"
                      className="text-base font-medium text-white font-heading hover:text-gray-200"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/privacy"
                      className="text-base font-medium text-white font-heading hover:text-gray-200"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="text-base font-medium text-gray-500 mb-7 font-heading tracking-px">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-base font-medium text-white font-heading hover:text-gray-200"
                      href="mailto:support@productvideoexamples.com"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-base font-medium text-gray-500 mb-7 font-heading tracking-px">
                    About
                  </h3>
                  <a
                    href="https://twitter.com/sobedominik"
                    className="hover:opacity-100 opacity-80"
                    target="_blank"
                  >
                    Made by @sobedominik{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-fuchsia-300 opacity-90 to-indigo-400">
                      ツ
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer