import { Descendant } from "slate";
import { z } from "zod";

export const customTextSchema = z.object({
  text: z.string(),
});

export const customElementSchema = z.object({
  type: z.literal("paragraph"),
  children: z.array(customTextSchema),
});

export const entrySchema = z.object({
  id: z.string().uuid(),
  date: z.string(),
  content: z.array(z.union([customElementSchema, customTextSchema])),
});

export type Entry = z.infer<typeof entrySchema>;

export type CustomElement = z.infer<typeof customElementSchema>;
export type CustomText = z.infer<typeof customTextSchema>;
