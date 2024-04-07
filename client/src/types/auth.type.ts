import * as z from "zod";

import { RegisterSchema, LoginSchema } from "@/schemas/auth.schema";

type RegisterSchemaType = z.infer<typeof RegisterSchema>;
type LoginSchemaType = z.infer<typeof LoginSchema>;

export type { RegisterSchemaType, LoginSchemaType };
