import { z } from "zod";

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, {
        message: "Name is required",
      })
      .max(50, {
        message: "Name must be less than 50 characters",
      }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string(),
  })
  .strict()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export { RegisterSchema, LoginSchema };
