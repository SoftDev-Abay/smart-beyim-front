import { MutableRefObject } from "react";

import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const togglePasswordVisibility = (
  passwordRef: MutableRefObject<HTMLInputElement | null>,
) => {
  if (passwordRef.current) {
    const currentPasswordType = passwordRef.current?.type;
    passwordRef.current.type =
      currentPasswordType === "password" ? "text" : "password";
  }
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const translateLinks = (upName: string) => {
  const translations: { [key: string]: string } = {
    Dashboard: "Home",
    "Results table": "Results table",
    Consultancy: "Consultancy",
  };
  if (Object.hasOwnProperty.call(translations, upName)) {
    return translations[upName];
  }

  // If no translation is found, return the original value
  return upName;
};

export const numberWithSpaces = (x: number): string => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
};

export const getDateRange = (filterValue: string): [Date, Date] => {
  const today = new Date();

  // Get the start of the week and then transform to the Date object again

  let startOfTheWeek = new Date(
    today.setDate(today.getDate() - today.getDay()),
  );

  switch (filterValue) {
    case "thisWeek":
      return [startOfTheWeek, today];
    case "thisMonth":
      const startOfTheMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
      );
      return [startOfTheMonth, today];
    case "thisYear":
      const startOfTheYear = new Date(today.getFullYear(), 0, 1);
      return [startOfTheYear, today];
    case "lastWeek":
      const startOfLastWeek = new Date(
        today.setDate(today.getDate() - today.getDay() - 7),
      );

      return [startOfLastWeek, startOfTheWeek];
    case "lastMonth":
      const startOfLastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        1,
      );
      const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      return [startOfLastMonth, endOfLastMonth];
    case "lastYear":
      const startOfLastYear = new Date(today.getFullYear() - 1, 0, 1);
      const endOfLastYear = new Date(today.getFullYear(), 0, 0);
      return [startOfLastYear, endOfLastYear];
    default:
      return [startOfTheWeek, today];
  }
};
