import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { ordersData } from "./assets";
import AddOrders from "./AddOrders";
import axiosInstance from "../../api/axios";
import FeatherIcon from "feather-icons-react";
import { Button } from "./Button";

const RecentOrders = () => {
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    try {
      const file = e.target.files?.[0];

      // validate file selection

      if (!file) throw new Error("No file selected");

      //  validate file extension
      const fileExtension = file.name.split(".").pop();

      if (fileExtension !== "xls" && fileExtension !== "xlsx") {
        throw new Error("Invalid file type");
      }

      console.log(file);

      const formData = new FormData();

      formData.append("file", file);

      const response = await axiosInstance.post("/api/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.status);
      console.log(response);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full max-h-[696px]  overflow-y-auto rounded-xl bg-white p-[20px]">
      <header className="mb-[23px] flex items-center justify-between">
        <p className="text-p1 font-medium text-black-600">Recent Orders</p>
        {ordersData.length > 0 && (
          <div className="relative">
            <Button variant="primary" className="w-[180px] py-[6px]">
              <div className="flex items-center gap-[20px]">
                <FeatherIcon icon="plus" />
                <p className="text-p1">New Product</p>
              </div>
            </Button>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept=".xls,.xlsx"
              multiple={false}
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
            ></label>
          </div>
        )}
      </header>
      {ordersData.length === 0 ? (
        <AddOrders
          className="max-w-[282px]"
          onChange={handleFileChange}
          fileExtensions=".xls,.xlsx"
        />
      ) : (
        <div className="flex flex-col gap-3">
          {ordersData.map((order) => (
            <OrderCard {...order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
