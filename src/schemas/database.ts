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