import { z } from 'zod';

// Restaurant schemas
export const RestaurantTableRowSchema = z.object({
    name: z.string(),
    zip: z.string().length(5),
    priceLevel: z.string(),
    countyfp: z.number().int(),
    statefp: z.number().int(),
    websiteURI: z.string().url({message:"websiteURI is not formatted as a URL"}),
    type: z.string(),
    location: z.object({
        latitude: z.number(),
        longitude: z.number()
    }),
    googleId: z.string()
});

export const RestaurantRowMenuProcessingSharedColsSchema = z.object({
    restaurant_uuid: z.string().uuid(),
    name: z.string(),
    zip: z.string().length(5)
});

export const RestaurantRowForMenuProcessingSchema = RestaurantRowMenuProcessingSharedColsSchema.extend({
    websiteURI: z.string().url({message:"websiteURI is not formatted as a URL"})
});

// ZIP Boundary schemas
const CoordinatePairSchema = z.tuple([z.number(), z.number()]);
const LinearRingSchema = z.array(CoordinatePairSchema);
const PolygonCoordinatesSchema = z.array(LinearRingSchema);
const MultiPolygonCoordinatesSchema = z.array(PolygonCoordinatesSchema);

export const GeometrySchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('Polygon'),
    coordinates: PolygonCoordinatesSchema,
  }),
  z.object({
    type: z.literal('MultiPolygon'),
    coordinates: MultiPolygonCoordinatesSchema,
  }),
]);

const PropertiesSchema = z.object({
  ZCTA5CE20: z.string().length(5),
  GEOID20: z.string().length(5),
  CLASSFP20: z.string().optional(),
  MTFCC20: z.string().optional(),
  FUNCSTAT20: z.string().optional(),
  ALAND20: z.number().int().nonnegative(),
  AWATER20: z.number().int().nonnegative(),
  INTPTLAT20: z.string().regex(/^[+-]\d+\.\d+$/),
  INTPTLON20: z.string().regex(/^[+-]\d+\.\d+$/),
  countyfp: z.string().length(3),
  statefp: z.string().length(2),
});

export const FeatureSchema = z.object({
  type: z.literal('Feature'),
  geometry: GeometrySchema,
  properties: PropertiesSchema,
});

export const GeoJSONSchema = z.object({
  type: z.literal('FeatureCollection'),
  features: z.array(FeatureSchema),
});

export const ZipBoundaryRowSchema = z.object({
  id: z.number().optional(),
  zip: z.string().length(5),
  geoid: z.string().length(5),
  geometry: z.string(), // PostGIS geometry as GeoJSON string
  classfp: z.string().optional(),
  mtfcc: z.string().optional(),
  funcstat: z.string().optional(),
  aland: z.number().int().nonnegative(),
  awater: z.number().int().nonnegative(),
  intptlat: z.number(),
  intptlon: z.number(),
  statefp: z.string().length(2),
  countyfp: z.string().length(3),
  source_date: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});