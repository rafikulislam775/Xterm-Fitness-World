import { useLoaderData } from "react-router-dom";
import Banner from "../../sections/banner/Banner";
import Card from "../../sections/Services/Card";
import Pricing from "../../sections/Pricing/Pricing";
import Contact from "../../sections/Contact/Contact";
import About from "../../sections/About/About";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="container m-auto">
        <div className="">
          <div className="my-16">
            <h1 className="text-white text-6xl my-7 text-center uppercase">
              our services
            </h1>
            <h1 className=" md:text-4xl text-center uppercase">
              solutions for moving Better & feeling a healthier
            </h1>
          </div>
          <div className=" grid gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((data) => (
              <Card key={data.id} data={data}></Card>
            ))}
          </div>
        </div>
        <Pricing></Pricing>
        <Contact></Contact>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
