// Typescript interface for IELTS skill
interface IeltsSkill {
  id: number;
  UserID: number;
  test_type: string;  // Changed to string as per your update
  score: number;
  feedback: string;
  time_spent: string;
  time_passed: string;
}

// Import necessary components and types
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<IeltsSkill>[] = [
  {
    accessorKey: "test_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Test Type" />
    ),
    cell: ({ row }) => <div className="w-[120px]">{row.getValue("test_type")}</div>,
  },
  {
    accessorKey: "score",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Score" />
    ),
    cell: ({ row }) => <div className="w-[120px]">{row.getValue("score").toFixed(2)}</div>,
  },
  {
    accessorKey: "feedback",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Feedback" />
    ),
    cell: ({ row }) => <div className="w-[200px]">{row.getValue("feedback")}</div>,
    enableSorting:false
  },
  {
    accessorKey: "time_passed",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time Passed" />
    ),
    cell: ({ row }) => <div className="w-[180px]">{new Date(row.getValue("time_passed")).toLocaleDateString()}</div>,
  },
  {
    accessorKey: "time_spent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time Spent" />
    ),
    cell: ({ row }) => <div className="w-[180px]">{new Date(row.getValue("time_spent")).toLocaleTimeString()}</div>,
  }
];

