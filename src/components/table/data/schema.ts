import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  document_id: z.string(),
  operation_date: z.string(),
  credit: z.number().optional(), // Optional field
  debet: z.number().optional(), // Optional field
  beneficiary_name: z.string(),
  beneficiary_bank_bic: z.string().optional(), // Optional field
  knp: z.string(),
  beneficiary_iic: z.string().optional(), // Optional field
  payment_purpose: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
