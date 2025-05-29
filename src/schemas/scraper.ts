import { z } from "zod";
import { RestaurantRowMenuProcessingSharedColsSchema } from './database';

export const MenuItemSchema = z.object({
  item: z.string(),
  price: z.string(),
  type: z.string(),
});

export const MenuItemsSchema = z.array(MenuItemSchema);

export const LLMUsageSchema = z.object({
  input: z.number(),
  output: z.number(),
  model: z.string()
});

const normalizedNumber = z.custom<number | null| undefined>(
  (value) => typeof value === "number" || value === null || value === undefined
)
.transform((value) => 
  value === null || value === undefined || (typeof value === 'number' && (isNaN(value) || !isFinite(value))) ? 
  null : value
);

export const MenuScrapingResultsSchema = z.object({
  items: z.array(MenuItemSchema),
  llmUsage: z.array(LLMUsageSchema),
  extractionProcessingTime: z.number().nullable(),
  websiteURI: z.string(),
  overallProcessingTime: z.number(),
  menuType: z.string().nullable(),
  menuURI: z.string().nullable(),
  totalItems: normalizedNumber.nullable(),
  averagePrice: normalizedNumber.nullable(),
  medianPrice: normalizedNumber.nullable(),
  minPrice: normalizedNumber.nullable(),
  maxPrice: normalizedNumber.nullable(),
  priceRange: normalizedNumber.nullable(),
  allPrices: z.array(normalizedNumber.nullable()),
  warnings: z.array(
    z.object({
      error: z.string(),
      type: z.string()
    })
  ).optional()
});

export const searchRequestSchema = z.object({
  keyword: z.string().max(50),
  websiteURI: z.string()
              .url("WebsiteURI is not formatted as a URL")
              .max(255)     
});

// Combined schema for menu processing results table
export const MenuProcessingResultsTableRowSchema = RestaurantRowMenuProcessingSharedColsSchema.merge(MenuScrapingResultsSchema);