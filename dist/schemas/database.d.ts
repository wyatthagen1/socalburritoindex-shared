import { z } from 'zod';
export declare const RestaurantTableRowSchema: z.ZodObject<{
    name: z.ZodString;
    zip: z.ZodString;
    priceLevel: z.ZodString;
    countyfp: z.ZodNumber;
    statefp: z.ZodNumber;
    websiteURI: z.ZodString;
    type: z.ZodString;
    location: z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        latitude: number;
        longitude: number;
    }, {
        latitude: number;
        longitude: number;
    }>;
    googleId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    zip: string;
    priceLevel: string;
    countyfp: number;
    statefp: number;
    websiteURI: string;
    type: string;
    location: {
        latitude: number;
        longitude: number;
    };
    googleId: string;
}, {
    name: string;
    zip: string;
    priceLevel: string;
    countyfp: number;
    statefp: number;
    websiteURI: string;
    type: string;
    location: {
        latitude: number;
        longitude: number;
    };
    googleId: string;
}>;
export declare const RestaurantRowMenuProcessingSharedColsSchema: z.ZodObject<{
    restaurant_uuid: z.ZodString;
    name: z.ZodString;
    zip: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    zip: string;
    restaurant_uuid: string;
}, {
    name: string;
    zip: string;
    restaurant_uuid: string;
}>;
export declare const RestaurantRowForMenuProcessingSchema: z.ZodObject<{
    restaurant_uuid: z.ZodString;
    name: z.ZodString;
    zip: z.ZodString;
} & {
    websiteURI: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    zip: string;
    websiteURI: string;
    restaurant_uuid: string;
}, {
    name: string;
    zip: string;
    websiteURI: string;
    restaurant_uuid: string;
}>;
export declare const GeometrySchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"Polygon">;
    coordinates: z.ZodArray<z.ZodArray<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>, "many">, "many">;
}, "strip", z.ZodTypeAny, {
    type: "Polygon";
    coordinates: [number, number][][];
}, {
    type: "Polygon";
    coordinates: [number, number][][];
}>, z.ZodObject<{
    type: z.ZodLiteral<"MultiPolygon">;
    coordinates: z.ZodArray<z.ZodArray<z.ZodArray<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>, "many">, "many">, "many">;
}, "strip", z.ZodTypeAny, {
    type: "MultiPolygon";
    coordinates: [number, number][][][];
}, {
    type: "MultiPolygon";
    coordinates: [number, number][][][];
}>]>;
export declare const ZipBoundaryRowSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    zip: z.ZodString;
    geoid: z.ZodString;
    geometry: z.ZodString;
    classfp: z.ZodOptional<z.ZodString>;
    mtfcc: z.ZodOptional<z.ZodString>;
    funcstat: z.ZodOptional<z.ZodString>;
    aland: z.ZodNumber;
    awater: z.ZodNumber;
    intptlat: z.ZodNumber;
    intptlon: z.ZodNumber;
    statefp: z.ZodString;
    countyfp: z.ZodString;
    source_date: z.ZodOptional<z.ZodString>;
    created_at: z.ZodOptional<z.ZodString>;
    updated_at: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    zip: string;
    countyfp: string;
    statefp: string;
    geoid: string;
    geometry: string;
    aland: number;
    awater: number;
    intptlat: number;
    intptlon: number;
    id?: number | undefined;
    classfp?: string | undefined;
    mtfcc?: string | undefined;
    funcstat?: string | undefined;
    source_date?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
}, {
    zip: string;
    countyfp: string;
    statefp: string;
    geoid: string;
    geometry: string;
    aland: number;
    awater: number;
    intptlat: number;
    intptlon: number;
    id?: number | undefined;
    classfp?: string | undefined;
    mtfcc?: string | undefined;
    funcstat?: string | undefined;
    source_date?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
}>;
//# sourceMappingURL=database.d.ts.map