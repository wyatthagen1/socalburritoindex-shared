"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipBoundaryRowSchema = exports.GeoJSONSchema = exports.FeatureSchema = exports.GeometrySchema = exports.RestaurantRowForMenuProcessingSchema = exports.RestaurantRowMenuProcessingSharedColsSchema = exports.RestaurantTableRowSchema = void 0;
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
});
//# sourceMappingURL=database.js.map