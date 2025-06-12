"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountyStatsSchema = exports.DissolvedAreaStatsSchema = exports.DissolvedBoundaryRowSchema = exports.ZipBoundaryRowSchema = exports.GeoJSONSchema = exports.FeatureSchema = exports.GeometrySchema = exports.RestaurantRowForMenuProcessingSchema = exports.RestaurantRowMenuProcessingSharedColsSchema = exports.RestaurantTableRowSchema = void 0;
const zod_1 = require("zod");
// Restaurant schemas
exports.RestaurantTableRowSchema = zod_1.z.object({
    name: zod_1.z.string(),
    zip: zod_1.z.string().length(5),
    priceLevel: zod_1.z.string(),
    countyfp: zod_1.z.number().int(),
    statefp: zod_1.z.number().int(),
    websiteURI: zod_1.z.string().url({ message: "websiteURI is not formatted as a URL" }),
    type: zod_1.z.string(),
    location: zod_1.z.object({
        latitude: zod_1.z.number(),
        longitude: zod_1.z.number()
    }),
    googleId: zod_1.z.string()
});
exports.RestaurantRowMenuProcessingSharedColsSchema = zod_1.z.object({
    restaurant_uuid: zod_1.z.string().uuid(),
    name: zod_1.z.string(),
    zip: zod_1.z.string().length(5)
});
exports.RestaurantRowForMenuProcessingSchema = exports.RestaurantRowMenuProcessingSharedColsSchema.extend({
    websiteURI: zod_1.z.string().url({ message: "websiteURI is not formatted as a URL" })
});
// ZIP Boundary schemas
const CoordinatePairSchema = zod_1.z.tuple([zod_1.z.number(), zod_1.z.number()]);
const LinearRingSchema = zod_1.z.array(CoordinatePairSchema);
const PolygonCoordinatesSchema = zod_1.z.array(LinearRingSchema);
const MultiPolygonCoordinatesSchema = zod_1.z.array(PolygonCoordinatesSchema);
exports.GeometrySchema = zod_1.z.discriminatedUnion('type', [
    zod_1.z.object({
        type: zod_1.z.literal('Polygon'),
        coordinates: PolygonCoordinatesSchema,
    }),
    zod_1.z.object({
        type: zod_1.z.literal('MultiPolygon'),
        coordinates: MultiPolygonCoordinatesSchema,
    }),
]);
const PropertiesSchema = zod_1.z.object({
    ZCTA5CE20: zod_1.z.string().length(5),
    GEOID20: zod_1.z.string().length(5),
    CLASSFP20: zod_1.z.string().optional(),
    MTFCC20: zod_1.z.string().optional(),
    FUNCSTAT20: zod_1.z.string().optional(),
    ALAND20: zod_1.z.number().int().nonnegative(),
    AWATER20: zod_1.z.number().int().nonnegative(),
    INTPTLAT20: zod_1.z.string().regex(/^[+-]\d+\.\d+$/),
    INTPTLON20: zod_1.z.string().regex(/^[+-]\d+\.\d+$/),
    countyfp: zod_1.z.string().length(3),
    statefp: zod_1.z.string().length(2),
});
exports.FeatureSchema = zod_1.z.object({
    type: zod_1.z.literal('Feature'),
    geometry: exports.GeometrySchema,
    properties: PropertiesSchema,
});
exports.GeoJSONSchema = zod_1.z.object({
    type: zod_1.z.literal('FeatureCollection'),
    features: zod_1.z.array(exports.FeatureSchema),
});
exports.ZipBoundaryRowSchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    zip: zod_1.z.string().length(5),
    geoid: zod_1.z.string().length(5),
    geometry: zod_1.z.string(), // PostGIS geometry as GeoJSON string
    classfp: zod_1.z.string().optional(),
    mtfcc: zod_1.z.string().optional(),
    funcstat: zod_1.z.string().optional(),
    aland: zod_1.z.number().int().nonnegative(),
    awater: zod_1.z.number().int().nonnegative(),
    intptlat: zod_1.z.number(),
    intptlon: zod_1.z.number(),
    statefp: zod_1.z.string().length(2),
    countyfp: zod_1.z.string().length(3),
    source_date: zod_1.z.string().optional(),
    created_at: zod_1.z.string().optional(),
    updated_at: zod_1.z.string().optional(),
    dissolved_area_id: zod_1.z.number().optional(),
});
// Schema for dissolved boundaries table
exports.DissolvedBoundaryRowSchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    county_fp: zod_1.z.string(),
    area_name: zod_1.z.string(),
    geometry: zod_1.z.string(), // GeoJSON string
    area_size: zod_1.z.number().nullable().optional(),
    zip_count: zod_1.z.number().nullable().optional(),
    created_at: zod_1.z.string().optional()
});
// Schema for statistics response from RPC function
exports.DissolvedAreaStatsSchema = zod_1.z.object({
    dissolved_area_id: zod_1.z.number(),
    area_name: zod_1.z.string(),
    county_fp: zod_1.z.string(),
    zip_count: zod_1.z.number(),
    total_restaurants: zod_1.z.number(),
    avg_burrito_price: zod_1.z.number().nullable(),
    median_burrito_price: zod_1.z.number().nullable(),
    min_burrito_price: zod_1.z.number().nullable(),
    max_burrito_price: zod_1.z.number().nullable(),
    total_menu_items: zod_1.z.number(),
    last_updated: zod_1.z.string().nullable()
});
// Schema for county-wide statistics aggregation
exports.CountyStatsSchema = zod_1.z.object({
    county_fp: zod_1.z.string(),
    county_name: zod_1.z.string(),
    total_dissolved_areas: zod_1.z.number(),
    total_zip_codes: zod_1.z.number(),
    total_restaurants: zod_1.z.number(),
    avg_burrito_price: zod_1.z.number().nullable(),
    median_burrito_price: zod_1.z.number().nullable(),
    min_burrito_price: zod_1.z.number().nullable(),
    max_burrito_price: zod_1.z.number().nullable(),
    total_menu_items: zod_1.z.number()
});
//# sourceMappingURL=database.js.map