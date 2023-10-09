const About = () => {
  return (
    <div className="flex justify-center items-center bg-white dark:bg-gray-900  ">
      <div className="flex-1">
        <img src="https://i.ibb.co/H282Xts/banner.png" alt="" />
      </div>
      <div className="flex-1 mr-10">
        <h2 className="text-cyan-500 text-5xl text-center   uppercase">
          About us
        </h2>
        <h2 className="text-4xl text-center  my-5">
          welcome to the xterm fitness world{" "}
        </h2>
        <p>
          Our fitness campaign webpage is your gateway to a healthier and more
          active lifestyle. Join us in our mission to promote fitness and
          well-being by participating in our exciting challenges and events.
          Whether you are a seasoned athlete or just starting your fitness
          journey, our campaign offers something for everyone. Discover a
          supportive community, access valuable resources, and track your
          progress as you work towards your fitness goals. With expert guidance,
          inspiring success stories, and a vibrant online community, our fitness
          campaign is the perfect opportunity to prioritize your health and
          transform your life. Do not miss out on this chance to become the best
          version of yourself - sign up today and embark on a rewarding fitness
          adventure!
        </p>
      </div>
    </div>
  );
};

export default About;
