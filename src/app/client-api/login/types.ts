import { LoginUserSchema } from "@/schemas/user.schema";
import { z } from "zod";

export type LoginInput = z.infer<typeof LoginUserSchema>;
