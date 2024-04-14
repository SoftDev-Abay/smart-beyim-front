import React, { ChangeEventHandler } from "react";

import { Button } from "./Button";
import Icon from "./Icon/Icon";
import FeatherIcon from "feather-icons-react";

interface AddOrdersProps {
  onChange: ChangeEventHandler<HTMLInputElement>; // For the file input onChange event
  fileExtensions: string; // For accepted file extensions, e.g., ".xls,.xlsx"
  className?: string; // Optional className for outer div customization
}

const AddOrders: React.FC<AddOrdersProps> = ({
  onChange,
  fileExtensions,
  className,
}) => {
  return (
    <div className={`mx-auto mt-40 flex  flex-col items-center ${className}`}>
      <div className="w-fit rounded-full border-[1px] border-[#E1E2E9] bg-[#F4F5FA] p-[40px]">
        <Icon name="BagActiveSvg" className="m-auto" width={60} height={60} />
      </div>
      <p className="mb-[12px] mt-[60px] text-center font-headings text-subHeading3 font-medium text-[#000]">
        No Orders Yet?
      </p>
      <p className="mb-6 text-center text-p2 text-black-300">
        Add products to your store and start selling to see orders here.
      </p>

      <div className="relative">
        <Button variant="primary" className="w-[180px] py-[10px]">
          <div className="flex items-center gap-[20px]">
            <FeatherIcon icon="plus" />
            <p className="text-p1">New Product</p>
          </div>
        </Button>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept={fileExtensions}
          multiple={false}
          onChange={onChange}
        />
        <label
          htmlFor="fileInput"
          className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
        ></label>
      </div>
    </div>
  );
};

export default AddOrders;
