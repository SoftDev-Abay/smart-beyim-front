import { custom } from "zod";
import { IconName } from "../Icon/Icon";
import CustomBarChart from "../../charts/CustomBarChart";

export interface IDashboardNavigationLinks {
  label: string;
  iconName: IconName;
  url: string;
  activeIconName: IconName;
}

export const DashboardNavigationLinks: IDashboardNavigationLinks[] = [
  {
    label: "Dashboard",
    iconName: "CategorySvg",
    activeIconName: "CategoryActiveSvg",
    url: "/dashboard",
  },
  {
    label: "Results table",
    iconName: "BagSvg",
    activeIconName: "BagActiveSvg",
    url: "/dashboard/revenue-management",
  },
  {
    label: "Consultancy",
    iconName: "CategorySvg",
    activeIconName: "CategoryActiveSvg",
    url: "/dashboard/chat",
  },
];

export interface ISummaryData {
  label: string;
  value: number;
  valueCurrency?: string;
  volumePercentage?: string;
}

export interface ISummaryCard {
  iconName: IconName;
  data: ISummaryData[];
  highlight: boolean;
}

export interface IDataSummary {
  customersSummary: ISummaryCard;
  ordersSummary: ISummaryCard;
  productsSummary: ISummaryCard;
  abandonedCartSummary: ISummaryCard;
  salesSummary: ISummaryCard;
}

export const dataSummary: IDataSummary = {
  customersSummary: {
    iconName: "TwoUserSvg",
    data: [
      {
        label: "Customers",
        value: 1250,
        volumePercentage: "+15.80%",
      },
    ],
    highlight: false,
  },
  ordersSummary: {
    iconName: "BagSvg",
    data: [
      {
        label: "Average Time Spent",
        value: 450,
      },
    ],
    highlight: false,
  },
  productsSummary: {
    iconName: "FolderSvg",
    data: [
      {
        label: "All Products",
        value: 45,
      },
      {
        label: "Active",
        value: 32,
        volumePercentage: "+24%",
      },
    ],
    highlight: true,
  },
  abandonedCartSummary: {
    iconName: "FolderSvg",
    data: [
      {
        label: "Abandoned Cart",
        value: 20,
        volumePercentage: "+0.00%",
      },
      {
        label: "Customers",
        value: 30,
        volumePercentage: "85%",
      },
    ],
    highlight: false,
  },
  salesSummary: {
    iconName: "FolderSvg",
    data: [
      {
        label: "Sales",
        value: 4000000,
      },
      {
        label: "Volume",
        value: 450,
        volumePercentage: "+20.00%",
      },
    ],
    highlight: false,
  },
};

export interface IOrderCard {
  imgUrl: string;
  name: string;
  price: string;
  quantity: number;
  status: string;
  date: string;
}

export const ordersData: IOrderCard[] = [
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "pending",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "completed",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "pending",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "completed",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "pending",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "completed",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "pending",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "completed",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "pending",
  //   date: "12 Sept 2022",
  // },
  // {
  //   imgUrl: "/img/order.png",
  //   name: "iPhone 13",
  //   price: "₦730,000.00",
  //   quantity: 1,
  //   status: "completed",
  //   date: "12 Sept 2022",
  // },
];

export interface ICustomPieChartData {
  name: string;
  value: number;
}

export const CustomPieChartData: ICustomPieChartData[] = [
  { name: "Acquisition", value: 400 },
  { name: "Purchase", value: 300 },
  { name: "Retention", value: 300 },
];

export const CustomPieChartColors = ["#5570F1", "#97A5EB", "#FFCC91"];

export interface ICustomBarChartData {
  name: string;
  score: number;
  short?: string;
}

export const CustomBarChartData: ICustomBarChartData[] = [
  {
    name: "Reading",
    short: "R",
    score: 6.5,
  },
  {
    name: "Listeting",
    short: "L",
    score: 7.5,
  },
  {
    name: "Speaking",
    short: "S",
    score: 9,
  },
  {
    name: "Writing",
    short: "W",
    score: 7,
  },
];

export type Message = {
  role: string;
  content: string;
};

// export const staticMessages: Message[] = [
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 1,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 0,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 1,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 0,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 1,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 0,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 1,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 0,
//     },
//   },
//   {
//     date: "2023-04-13T09:29:39.088Z",
//     text: "I want to know more about the product",
//     sender: {
//       _id: 1,
//     },
//   },
// ];

export interface ICustomRadarChartData {
  subject: string;
  A: number;
  fullMark: number;
}

export const CustomRadarChartData: ICustomRadarChartData[] = [
  {
    subject: "R",
    A: 9,
    fullMark: 9,
  },
  {
    subject: "L",
    A: 7,
    fullMark: 9,
  },
  {
    subject: "S",
    A: 7.5,
    fullMark: 9,
  },
  {
    subject: "W",
    A: 7.5,
    fullMark: 9,
  },
];

export interface ICustomLineChartData {
  date: string;
  score: number;
}

export const CustomLineChartData: ICustomLineChartData[] = [
  {
    date: "2023-04-13",
    score: 7.5,
  },
  {
    date: "2023-04-14",
    score: 8.5,
  },
  {
    date: "2023-04-15",
    score: 7.5,
  },
  {
    date: "2023-04-17",
    score: 8.5,
  },
  {
    date: "2023-04-18",
    score: 9,
  },
  {
    date: "2023-04-19",
    score: 8.5,
  },
];
