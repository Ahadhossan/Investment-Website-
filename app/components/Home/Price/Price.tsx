import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-20 pb-16 bg-[#5507e1]">
      {/* section heading */}
      <SectionHeading heading="Our Pricing" />
      {/* define grid system */}
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-16">
        {/* 1st price card */}
        <div>
          <PriceCard
            bg="bg-teal-700"
            days="20"
            percentage="100"
            minInvest="100"
            maxInvest="1000"
          />
        </div>

        {/* 2nd price card */}
        <div>
          <PriceCard
            bg="bg-red-900"
            days="30"
            percentage="300"
            minInvest="300"
            maxInvest="3000"
          />
        </div>

        {/* 3rd price card */}
        <div>
          <PriceCard
            bg="bg-green-900"
            days="50"
            percentage="500"
            minInvest="500"
            maxInvest="5000"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
