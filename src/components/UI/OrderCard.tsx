import React from "react";
import { IOrderCard } from "./assets";
import Tag from "./Tag";
interface IOrderProps
  extends IOrderCard,
    React.HTMLAttributes<HTMLDivElement> {}

const OrderCard: React.FC<IOrderProps> = ({
  name,
  status,
  price,
  date,
  quantity,
  imgUrl,
}) => {
  const validStatus: "pending" | "completed" = status as
    | "pending"
    | "completed";

  return (
    <div className="flex items-center gap-[14px] overflow-y-auto border-b border-[#F1F3F9] pb-3">
      <img src={imgUrl} width={49} height={49} className="rounded-lg border" />
      <div className="flex flex-1 flex-col gap-[10px]">
        <div className="flex justify-between">
          <p className="text-p2 text-black-600">{name}</p>
          <span className="text-label1 text-black-200">{date}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-p2 font-medium text-black-800">
            {price} x {quantity}
          </p>
          <Tag status={validStatus}>
            {status[0].toUpperCase() + status.slice(1)}
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
