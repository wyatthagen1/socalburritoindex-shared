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
    has_result: z.ZodOptional<z.ZodNumber>;
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
    has_result?: number | undefined;
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
    has_result?: number | undefined;
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
export declare const FeatureSchema: z.ZodObject<{
    type: z.ZodLiteral<"Feature">;
    geometry: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    properties: z.ZodObject<{
        ZCTA5CE20: z.ZodString;
        GEOID20: z.ZodString;
        CLASSFP20: z.ZodOptional<z.ZodString>;
        MTFCC20: z.ZodOptional<z.ZodString>;
        FUNCSTAT20: z.ZodOptional<z.ZodString>;
        ALAND20: z.ZodNumber;
        AWATER20: z.ZodNumber;
        INTPTLAT20: z.ZodString;
        INTPTLON20: z.ZodString;
        countyfp: z.ZodString;
        statefp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        countyfp: string;
        statefp: string;
        ZCTA5CE20: string;
        GEOID20: string;
        ALAND20: number;
        AWATER20: number;
        INTPTLAT20: string;
        INTPTLON20: string;
        CLASSFP20?: string | undefined;
        MTFCC20?: string | undefined;
        FUNCSTAT20?: string | undefined;
    }, {
        countyfp: string;
        statefp: string;
        ZCTA5CE20: string;
        GEOID20: string;
        ALAND20: number;
        AWATER20: number;
        INTPTLAT20: string;
        INTPTLON20: string;
        CLASSFP20?: string | undefined;
        MTFCC20?: string | undefined;
        FUNCSTAT20?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "Feature";
    geometry: {
        type: "Polygon";
        coordinates: [number, number][][];
    } | {
        type: "MultiPolygon";
        coordinates: [number, number][][][];
    };
    properties: {
        countyfp: string;
        statefp: string;
        ZCTA5CE20: string;
        GEOID20: string;
        ALAND20: number;
        AWATER20: number;
        INTPTLAT20: string;
        INTPTLON20: string;
        CLASSFP20?: string | undefined;
        MTFCC20?: string | undefined;
        FUNCSTAT20?: string | undefined;
    };
}, {
    type: "Feature";
    geometry: {
        type: "Polygon";
        coordinates: [number, number][][];
    } | {
        type: "MultiPolygon";
        coordinates: [number, number][][][];
    };
    properties: {
        countyfp: string;
        statefp: string;
        ZCTA5CE20: string;
        GEOID20: string;
        ALAND20: number;
        AWATER20: number;
        INTPTLAT20: string;
        INTPTLON20: string;
        CLASSFP20?: string | undefined;
        MTFCC20?: string | undefined;
        FUNCSTAT20?: string | undefined;
    };
}>;
export declare const GeoJSONSchema: z.ZodObject<{
    type: z.ZodLiteral<"FeatureCollection">;
    features: z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"Feature">;
        geometry: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        properties: z.ZodObject<{
            ZCTA5CE20: z.ZodString;
            GEOID20: z.ZodString;
            CLASSFP20: z.ZodOptional<z.ZodString>;
            MTFCC20: z.ZodOptional<z.ZodString>;
            FUNCSTAT20: z.ZodOptional<z.ZodString>;
            ALAND20: z.ZodNumber;
            AWATER20: z.ZodNumber;
            INTPTLAT20: z.ZodString;
            INTPTLON20: z.ZodString;
            countyfp: z.ZodString;
            statefp: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            countyfp: string;
            statefp: string;
            ZCTA5CE20: string;
            GEOID20: string;
            ALAND20: number;
            AWATER20: number;
            INTPTLAT20: string;
            INTPTLON20: string;
            CLASSFP20?: string | undefined;
            MTFCC20?: string | undefined;
            FUNCSTAT20?: string | undefined;
        }, {
            countyfp: string;
            statefp: string;
            ZCTA5CE20: string;
            GEOID20: string;
            ALAND20: number;
            AWATER20: number;
            INTPTLAT20: string;
            INTPTLON20: string;
            CLASSFP20?: string | undefined;
            MTFCC20?: string | undefined;
            FUNCSTAT20?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "Feature";
        geometry: {
            type: "Polygon";
            coordinates: [number, number][][];
        } | {
            type: "MultiPolygon";
            coordinates: [number, number][][][];
        };
        properties: {
            countyfp: string;
            statefp: string;
            ZCTA5CE20: string;
            GEOID20: string;
            ALAND20: number;
            AWATER20: number;
            INTPTLAT20: string;
            INTPTLON20: string;
            CLASSFP20?: string | undefined;
            MTFCC20?: string | undefined;
            FUNCSTAT20?: string | undefined;
        };
    }, {
        type: "Feature";
        geometry: {
            type: "Polygon";
            coordinates: [number, number][][];
        } | {
            type: "MultiPolygon";
            coordinates: [number, number][][][];
        };
        properties: {
            countyfp: string;
            statefp: string;
            ZCTA5CE20: string;
            GEOID20: string;
            ALAND20: number;
            AWATER20: number;
            INTPTLAT20: string;
            INTPTLON20: string;
            CLASSFP20?: string | undefined;
            MTFCC20?: string | undefined;
            FUNCSTAT20?: string | undefined;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "FeatureCollection";
    features: {
        type: "Feature";
        geometry: {
            type: "Polygon";
            coordinates: [number, number][][];
        } | {
            type: "MultiPolygon";
            coordinates: [number, number][][][];
        };
        properties: {
            countyfp: string;
            statefp: string;
            ZCTA5CE20: string;
            GEOID20: string;
            ALAND20: number;
            AWATER20: number;
            INTPTLAT20: string;
            INTPTLON20: string;
            CLASSFP20?: string | undefined;
            MTFCC20?: string | undefined;
            FUNCSTAT20?: string | undefined;
        };
    }[];
}, {
    type: "FeatureCollection";
    features: {
        type: "Feature";
        geometry: {
            type: "Polygon";
            coordinates: [number, number][][];
        } | {
            type: "MultiPolygon";
            coordinates: [number, number][][][];
        };
        properties: {
            countyfp: string;
            statefp: string;
            ZCTA5CE20: string;
            GEOID20: string;
            ALAND20: number;
            AWATER20: number;
            INTPTLAT20: string;
            INTPTLON20: string;
            CLASSFP20?: string | undefined;
            MTFCC20?: string | undefined;
            FUNCSTAT20?: string | undefined;
        };
    }[];
}>;
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
    dissolved_area_id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    zip: string;
    countyfp: string;
    statefp: string;
    geometry: string;
    geoid: string;
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
    dissolved_area_id?: number | undefined;
}, {
    zip: string;
    countyfp: string;
    statefp: string;
    geometry: string;
    geoid: string;
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
    dissolved_area_id?: number | undefined;
}>;
export declare const DissolvedBoundaryRowSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    county_fp: z.ZodString;
    area_name: z.ZodString;
    geometry: z.ZodString;
    area_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    zip_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    created_at: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    geometry: string;
    county_fp: string;
    area_name: string;
    id?: number | undefined;
    created_at?: string | undefined;
    area_size?: number | null | undefined;
    zip_count?: number | null | undefined;
}, {
    geometry: string;
    county_fp: string;
    area_name: string;
    id?: number | undefined;
    created_at?: string | undefined;
    area_size?: number | null | undefined;
    zip_count?: number | null | undefined;
}>;
export declare const DissolvedAreaStatsSchema: z.ZodObject<{
    dissolved_area_id: z.ZodNumber;
    area_name: z.ZodString;
    county_fp: z.ZodString;
    zip_count: z.ZodNumber;
    total_restaurants: z.ZodNumber;
    avg_burrito_price: z.ZodNullable<z.ZodNumber>;
    median_burrito_price: z.ZodNullable<z.ZodNumber>;
    min_burrito_price: z.ZodNullable<z.ZodNumber>;
    max_burrito_price: z.ZodNullable<z.ZodNumber>;
    total_menu_items: z.ZodNumber;
    last_updated: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    dissolved_area_id: number;
    county_fp: string;
    area_name: string;
    zip_count: number;
    total_restaurants: number;
    avg_burrito_price: number | null;
    median_burrito_price: number | null;
    min_burrito_price: number | null;
    max_burrito_price: number | null;
    total_menu_items: number;
    last_updated: string | null;
}, {
    dissolved_area_id: number;
    county_fp: string;
    area_name: string;
    zip_count: number;
    total_restaurants: number;
    avg_burrito_price: number | null;
    median_burrito_price: number | null;
    min_burrito_price: number | null;
    max_burrito_price: number | null;
    total_menu_items: number;
    last_updated: string | null;
}>;
export declare const CountyStatsSchema: z.ZodObject<{
    county_fp: z.ZodString;
    county_name: z.ZodString;
    total_dissolved_areas: z.ZodNumber;
    total_zip_codes: z.ZodNumber;
    total_restaurants: z.ZodNumber;
    avg_burrito_price: z.ZodNullable<z.ZodNumber>;
    median_burrito_price: z.ZodNullable<z.ZodNumber>;
    min_burrito_price: z.ZodNullable<z.ZodNumber>;
    max_burrito_price: z.ZodNullable<z.ZodNumber>;
    total_menu_items: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    county_fp: string;
    total_restaurants: number;
    avg_burrito_price: number | null;
    median_burrito_price: number | null;
    min_burrito_price: number | null;
    max_burrito_price: number | null;
    total_menu_items: number;
    county_name: string;
    total_dissolved_areas: number;
    total_zip_codes: number;
}, {
    county_fp: string;
    total_restaurants: number;
    avg_burrito_price: number | null;
    median_burrito_price: number | null;
    min_burrito_price: number | null;
    max_burrito_price: number | null;
    total_menu_items: number;
    county_name: string;
    total_dissolved_areas: number;
    total_zip_codes: number;
}>;
//# sourceMappingURL=database.d.ts.map