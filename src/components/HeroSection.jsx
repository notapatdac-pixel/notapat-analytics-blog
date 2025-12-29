function HeroSection() {
  return (
    <section className="w-full py-12 px-4 sm:px-8">
      <div className="max-w-[1200px] min-h-[529px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-[60px] items-center">
          {/* Left Column - Title and Subtitle */}
          <div className="w-full max-w-[347px] min-h-[276px] flex flex-col justify-center gap-6 mx-auto md:mx-0">
            <h1 className="text-headline-1 text-color-brown-600 text-right leading-[60px]">
              Stay<br />
              Informed,<br />
              Stay Inspired
            </h1>
            <p className="text-body-1 text-color-brown-400 text-right leading-6">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
            </p>
          </div>

          {/* Center Column - Image */}
          <div className="w-full max-w-[386px] h-[529px] rounded-2xl overflow-hidden bg-color-white mx-auto md:mx-0">
            <img
              src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
              alt="Author with cat"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Author Bio */}
          <div className="space-y-2">
            <p className="text-body-3 text-color-brown-400 tracking-wide leading-5">
              - Author
            </p>
            <h3 className="text-headline-3 text-color-brown-500 leading-8">
              Thompson P.
            </h3>
            <p className="text-body-1 text-color-brown-400 leading-6">
              I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness. 
              <br /><br />
              When i'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
