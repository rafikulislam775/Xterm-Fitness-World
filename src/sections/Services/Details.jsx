import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [dataFound, setDataFound] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newData = data?.find((item) => item?.id === parseInt(id));
    setDataFound(newData);
    setLoading(false);
  }, [id, data]);
  const { img, detailedDescription, eventName } = dataFound;

  console.log(id, dataFound);
  return (
    <div className="flex justify-center items-center p-24">
      {loading ? (
        <span className="loading loading-spinner text-accent"></span>
      ) : (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{eventName}</h1>
              <p className="py-6">{detailedDescription}</p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
