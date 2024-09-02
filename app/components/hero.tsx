import React from "react";

const HeroComponent = () => {
  return (
    <section className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-3">
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&amp;theme=dark&amp;period=daily"
          alt=""
          className="w-[250px]"
        />
        <p className="inline w-fit px-3 text-xs font-medium text-gray-400 border-2 rounded-lg font-heading sm:text-sm border-white/10">
          Get inspired &amp; unlock the full potential of video marketing
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white font-heading md:text-7xl xl:text-11xl">
          Create product videos that
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600">
            convert
          </span>
        </h1>
        <p className="max-w-lg text-gray-100 sm:text-lg opacity-60">
          Learn from more than 100+ hand selected videos of companies that
          create engaging, shareable product videos that not only boost brand
          awareness but also convert customers.
        </p>

        <div className="flex flex-wrap">
          <div className="w-full p-3 lg:w-auto">
            <a
              href="https://product-video-examples.lemonsqueezy.com/checkout/buy/4f61601d-a275-40cb-85a7-9fe578ba9aaa"
              target="_blank"
              className="font-heading block w-full transform hover:scale-[1.02] transition ease-in-out px-6 py-4 text-base bg-gradient-to-r from-orange-600 via-fuchsia-500 text-gray-100 font-medium to-indigo-600 rounded-md gradientHover"
            >
              Get access to 100+ videos now
            </a>
          </div>
          <div className="w-full p-3 lg:w-auto">
            <a
              href="#features"
              className="block w-full px-6 py-4 text-base text-white bg-transparent border border-gray-500 rounded-md font-heading hover:border-gray-600"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-auto px-3 pt-5">
            <img
              className="rounded-lg w-14 h-14"
              src="https://avatars.githubusercontent.com/u/1665273?v=4"
              alt=""
            />
          </div>
          <div className="flex-1 p-3">
            <p className="mb-4 text-sm text-gray-500">
              <span className="font-serif text-sm sm:text-xl px-0.5">“</span>
              <i>
                I am about to launch a new product and needed inspiration for
                creating our new Product Hunt launch video. This site has been
                an amazing resource for us.
              </i>
              <span className="font-serif text-xl px-0.5">”</span>
            </p>
            <p className="text-xs text-gray-600 font-heading sm:text-sm">
              Alex Styl, founder of{" "}
              <a
                href="https://www.composables.com/?ref=productvideoexamples.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Composables
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 relative">
        <div className="flex flex-col gap-5">
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
            className="aspect-video object-cover transition duration-1000 ease-out rounded-md hover:-translate-y-3"
          >
            <source
              src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-md pointer-events-none"></div>
      </div>
    </section>
  );
};

export default HeroComponent;
