import { useLoaderData } from "react-router-dom";
import Banner from "../../sections/banner/Banner";
import Card from "../../sections/Services/Card";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <div className="my-16">
          <h1 className="text-white text-3xl text-center uppercase">
            our services
          </h1>
          <h1 className="text-white text-8xl text-center uppercase">
            solutions for moving Better & feeling a healthier
          </h1>
        </div>
        <div className=" grid gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((data) => (
            <Card key={data.id} data={data}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
