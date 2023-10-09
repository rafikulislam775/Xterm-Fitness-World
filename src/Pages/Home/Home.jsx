import { useLoaderData } from "react-router-dom";
import Banner from "../../sections/banner/Banner";
import Card from "../../sections/Services/Card";
import Pricing from "../../sections/Pricing/Pricing";
import Contact from "../../sections/Contact/Contact";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="container m-auto">
        <div className="my-16">
          <h1 className="text-white text-3xl text-center uppercase">
            our services
          </h1>
          <h1 className="text-white md:text-8xl text-center uppercase">
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
    </div>
  );
};

export default Home;
