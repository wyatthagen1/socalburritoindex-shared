import { z } from 'zod';
import { RestaurantTableRowSchema, RestaurantRowForMenuProcessingSchema, ZipBoundaryRowSchema, GeometrySchema } from '../schemas/database';
import { MenuProcessingResultsTableRowSchema, MenuItemSchema, LLMUsageSchema, MenuScrapingResultsSchema, searchRequestSchema } from '../schemas/scraper';
export type RestaurantTableRow = z.infer<typeof RestaurantTableRowSchema>;
export type RestaurantRowForMenuProcessing = z.infer<typeof RestaurantRowForMenuProcessingSchema>;
export type ZipBoundaryRow = z.infer<typeof ZipBoundaryRowSchema>;
export type Geometry = z.infer<typeof GeometrySchema>;
export type MenuProcessingResultsTableRow = z.infer<typeof MenuProcessingResultsTableRowSchema>;
export type MenuItem = z.infer<typeof MenuItemSchema>;
export type LLMUsage = z.infer<typeof LLMUsageSchema>;
export type MenuScrapingResults = z.infer<typeof MenuScrapingResultsSchema>;
export type SearchRequest = z.infer<typeof searchRequestSchema>;
export interface RestaurantDisplay {
    name: string;
    zip: string;
    medianPrice: number | null;
    averagePrice: number | null;
    minPrice: number | null;
    maxPrice: number | null;
    priceRange: number | null;
    totalItems: number | null;
    lastUpdated: string;
}
export interface CountyInfo {
    name: string;
    fips: number;
    zipCount: number;
}
export interface TimeFilter {
    id: string;
    label: string;
    description: string;
    months: number;
}
//# sourceMappingURL=index.d.ts.map