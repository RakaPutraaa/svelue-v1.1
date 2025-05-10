/* eslint-disable prettier/prettier */
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const CardServices = ({ title, description, icon }: CardProps) => {
  return (
    <div className="group bg-[#18181b] text-white p-6 rounded-xl shadow-md transition-all duration-300 w-full max-w-sm transform hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full" style={{ backgroundColor: "#F8A01B" }}>
          <Image alt="icon" height={32} src={icon} width={32} />
        </div>
        <h3 className="ml-4 text-xl font-semibold transition-colors duration-300 group-hover:text-black">
          {title}
        </h3>
      </div>
      <p className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-black">
        {description}
      </p>
    </div>
  );
};

export default CardServices;
