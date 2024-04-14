import { z } from "zod";

export const signInFormSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .trim(),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, "Password should be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {
      message:
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 special character.",
    })
    .trim(),
});

export type SignInForm = z.infer<typeof signInFormSchema>;
