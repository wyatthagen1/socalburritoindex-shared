import { z } from "zod";
export declare const MenuItemSchema: z.ZodObject<{
    item: z.ZodString;
    price: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    item: string;
    price: string;
}, {
    type: string;
    item: string;
    price: string;
}>;
export declare const MenuItemsSchema: z.ZodArray<z.ZodObject<{
    item: z.ZodString;
    price: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    item: string;
    price: string;
}, {
    type: string;
    item: string;
    price: string;
}>, "many">;
export declare const LLMUsageSchema: z.ZodObject<{
    input: z.ZodNumber;
    output: z.ZodNumber;
    model: z.ZodString;
}, "strip", z.ZodTypeAny, {
    input: number;
    output: number;
    model: string;
}, {
    input: number;
    output: number;
    model: string;
}>;
export declare const MenuScrapingResultsSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        price: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        item: string;
        price: string;
    }, {
        type: string;
        item: string;
        price: string;
    }>, "many">;
    llmUsage: z.ZodArray<z.ZodObject<{
        input: z.ZodNumber;
        output: z.ZodNumber;
        model: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        input: number;
        output: number;
        model: string;
    }, {
        input: number;
        output: number;
        model: string;
    }>, "many">;
    extractionProcessingTime: z.ZodNullable<z.ZodNumber>;
    websiteURI: z.ZodString;
    overallProcessingTime: z.ZodNumber;
    menuType: z.ZodNullable<z.ZodString>;
    menuURI: z.ZodNullable<z.ZodString>;
    totalItems: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    averagePrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    medianPrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    minPrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    maxPrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    priceRange: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    allPrices: z.ZodArray<z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>, "many">;
    warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        error: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        error: string;
    }, {
        type: string;
        error: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    websiteURI: string;
    items: {
        type: string;
        item: string;
        price: string;
    }[];
    llmUsage: {
        input: number;
        output: number;
        model: string;
    }[];
    extractionProcessingTime: number | null;
    overallProcessingTime: number;
    menuType: string | null;
    menuURI: string | null;
    totalItems: number | null;
    averagePrice: number | null;
    medianPrice: number | null;
    minPrice: number | null;
    maxPrice: number | null;
    priceRange: number | null;
    allPrices: (number | null)[];
    warnings?: {
        type: string;
        error: string;
    }[] | undefined;
}, {
    websiteURI: string;
    items: {
        type: string;
        item: string;
        price: string;
    }[];
    llmUsage: {
        input: number;
        output: number;
        model: string;
    }[];
    extractionProcessingTime: number | null;
    overallProcessingTime: number;
    menuType: string | null;
    menuURI: string | null;
    allPrices: (number | null | undefined)[];
    totalItems?: number | null | undefined;
    averagePrice?: number | null | undefined;
    medianPrice?: number | null | undefined;
    minPrice?: number | null | undefined;
    maxPrice?: number | null | undefined;
    priceRange?: number | null | undefined;
    warnings?: {
        type: string;
        error: string;
    }[] | undefined;
}>;
export declare const searchRequestSchema: z.ZodObject<{
    keyword: z.ZodString;
    websiteURI: z.ZodString;
}, "strip", z.ZodTypeAny, {
    websiteURI: string;
    keyword: string;
}, {
    websiteURI: string;
    keyword: string;
}>;
export declare const MenuProcessingResultsTableRowSchema: z.ZodObject<{
    restaurant_uuid: z.ZodString;
    name: z.ZodString;
    zip: z.ZodString;
} & {
    items: z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        price: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        item: string;
        price: string;
    }, {
        type: string;
        item: string;
        price: string;
    }>, "many">;
    llmUsage: z.ZodArray<z.ZodObject<{
        input: z.ZodNumber;
        output: z.ZodNumber;
        model: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        input: number;
        output: number;
        model: string;
    }, {
        input: number;
        output: number;
        model: string;
    }>, "many">;
    extractionProcessingTime: z.ZodNullable<z.ZodNumber>;
    websiteURI: z.ZodString;
    overallProcessingTime: z.ZodNumber;
    menuType: z.ZodNullable<z.ZodString>;
    menuURI: z.ZodNullable<z.ZodString>;
    totalItems: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    averagePrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    medianPrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    minPrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    maxPrice: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    priceRange: z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>;
    allPrices: z.ZodArray<z.ZodNullable<z.ZodEffects<z.ZodType<number | null | undefined, z.ZodTypeDef, number | null | undefined>, number | null, number | null | undefined>>, "many">;
    warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        error: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        error: string;
    }, {
        type: string;
        error: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    zip: string;
    websiteURI: string;
    restaurant_uuid: string;
    items: {
        type: string;
        item: string;
        price: string;
    }[];
    llmUsage: {
        input: number;
        output: number;
        model: string;
    }[];
    extractionProcessingTime: number | null;
    overallProcessingTime: number;
    menuType: string | null;
    menuURI: string | null;
    totalItems: number | null;
    averagePrice: number | null;
    medianPrice: number | null;
    minPrice: number | null;
    maxPrice: number | null;
    priceRange: number | null;
    allPrices: (number | null)[];
    warnings?: {
        type: string;
        error: string;
    }[] | undefined;
}, {
    name: string;
    zip: string;
    websiteURI: string;
    restaurant_uuid: string;
    items: {
        type: string;
        item: string;
        price: string;
    }[];
    llmUsage: {
        input: number;
        output: number;
        model: string;
    }[];
    extractionProcessingTime: number | null;
    overallProcessingTime: number;
    menuType: string | null;
    menuURI: string | null;
    allPrices: (number | null | undefined)[];
    totalItems?: number | null | undefined;
    averagePrice?: number | null | undefined;
    medianPrice?: number | null | undefined;
    minPrice?: number | null | undefined;
    maxPrice?: number | null | undefined;
    priceRange?: number | null | undefined;
    warnings?: {
        type: string;
        error: string;
    }[] | undefined;
}>;
//# sourceMappingURL=scraper.d.ts.map