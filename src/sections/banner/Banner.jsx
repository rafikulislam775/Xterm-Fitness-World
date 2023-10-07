const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/6ygCZVs/banner4.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity"></div>
        <div className="hero-content my-5 p-10 border-l-4 text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-white md:text-4xl font-bold">
              XTERM FITNESS
            </h1>
            <h1 className="mb-5 text-white md:text-9xl font-bold">BE STRONG</h1>
            <p className="mb-5 md:text-2xl text-white">
              Best GYM & Fitness Center Build Your Health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
