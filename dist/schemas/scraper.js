"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuProcessingResultsTableRowSchema = exports.searchRequestSchema = exports.MenuScrapingResultsSchema = exports.LLMUsageSchema = exports.MenuItemSchema = void 0;
const zod_1 = require("zod");
const database_1 = require("./database");
exports.MenuItemSchema = zod_1.z.object({
    item: zod_1.z.string(),
    price: zod_1.z.string(),
    type: zod_1.z.string(),
});
exports.LLMUsageSchema = zod_1.z.object({
    input: zod_1.z.number(),
    output: zod_1.z.number(),
    model: zod_1.z.string()
});
const normalizedNumber = zod_1.z.custom((value) => typeof value === "number" || value === null || value === undefined)
    .transform((value) => value === null || value === undefined || (typeof value === 'number' && (isNaN(value) || !isFinite(value))) ?
    null : value);
exports.MenuScrapingResultsSchema = zod_1.z.object({
    items: zod_1.z.array(exports.MenuItemSchema),
    llmUsage: zod_1.z.array(exports.LLMUsageSchema),
    extractionProcessingTime: zod_1.z.number().nullable(),
    websiteURI: zod_1.z.string(),
    overallProcessingTime: zod_1.z.number(),
    menuType: zod_1.z.string().nullable(),
    menuURI: zod_1.z.string().nullable(),
    totalItems: normalizedNumber.nullable(),
    averagePrice: normalizedNumber.nullable(),
    medianPrice: normalizedNumber.nullable(),
    minPrice: normalizedNumber.nullable(),
    maxPrice: normalizedNumber.nullable(),
    priceRange: normalizedNumber.nullable(),
    allPrices: zod_1.z.array(normalizedNumber.nullable()),
    warnings: zod_1.z.array(zod_1.z.object({
        error: zod_1.z.string(),
        type: zod_1.z.string()
    })).optional()
});
exports.searchRequestSchema = zod_1.z.object({
    keyword: zod_1.z.string().max(50),
    websiteURI: zod_1.z.string()
        .url("WebsiteURI is not formatted as a URL")
        .max(255)
});
// Combined schema for menu processing results table
exports.MenuProcessingResultsTableRowSchema = database_1.RestaurantRowMenuProcessingSharedColsSchema.merge(exports.MenuScrapingResultsSchema);
//# sourceMappingURL=scraper.js.map