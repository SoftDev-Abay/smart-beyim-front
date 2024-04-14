import { z } from "zod";

export const signUpFormSchema = z.object({
  username: z
    .string({
      required_error: "Fullname is required",
      invalid_type_error: "Fullname must be a string",
    })
    .trim(),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Email should be valid")
    .trim(),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, "Password should be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {
      message:
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 special character",
    })
    .trim(),
});

export type SignUpForm = z.infer<typeof signUpFormSchema>;
