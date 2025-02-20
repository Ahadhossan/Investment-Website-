import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import advantageImage from '@/public/images/advantage.png'
import Image from 'next/image';

const Advantage = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* section heading */}
      <SectionHeading heading="Our Advantage" />
      {/* define grid system */}
      <div className="w-[90%] mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* text content */}
        <div>
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            We are Offering 100% Guarantee.
          </h1>
          <p className="text-white text-opacity-60 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            doloremque fugit rem, pariatur cum dolorem accusamus laboriosam
            fugiat sint nihil minima possimus asperiores fuga iste dicta ipsa
            velit repudiandae quo.
          </p>
          <p className="text-white text-opacity-60 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            doloremque fugit rem, pariatur cum dolorem accusamus laboriosam
            fugiat sint nihi
          </p>
        </div>

        {/* image content */}
        <div>
          <Image src={advantageImage} alt="advantage" />
        </div>
      </div>
    </div>
  );
}

export default Advantage
