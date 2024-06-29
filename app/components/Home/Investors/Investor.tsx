import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import InvestorCard from './InvestorCard';

const Investor = () => {
  return (
    <div className="pt-20 pb-16 bg-[#032055]">
      {/* section heading */}
      <SectionHeading heading="Our Top Investors" />
      {/* define grid system */}
      <div className="w-[90%] mt-16 mx-auto grid gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        {/* 1st Investor card */}
        <div>
          <InvestorCard image="/images/i1.jpg" invest="3800" name="John" />
        </div>

        {/* 2nd Investor card */}
        <div>
          <InvestorCard image="/images/i2.jpg" invest="4300" name="Dipa" />
        </div>

        {/* 3rd Investor card */}
        <div>
          <InvestorCard image="/images/i3.jpg" invest="5800" name="Ahad" />
        </div>

        {/* 4th Investor card */}
        <div>
          <InvestorCard image="/images/i4.jpg" invest="4800" name="Ovi" />
        </div>
      </div>
    </div>
  );
}

export default Investor
