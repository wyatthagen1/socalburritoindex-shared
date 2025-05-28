/**
 * Format a price value for display
 */
export declare const formatPrice: (price: number | null | undefined) => string;
/**
 * Calculate percentage change between two prices
 */
export declare const calculatePriceChange: (current: number, previous: number) => number;
/**
 * Format price change percentage with sign
 */
export declare const formatPriceChange: (change: number) => string;
/**
 * Validate ZIP code format (5 digits)
 */
export declare const isValidZipCode: (zip: string) => boolean;
/**
 * Get county name from FIPS code
 */
export declare const getCountyName: (fips: number) => string;
/**
 * Get all ZIP codes for a county (you'll need to implement this with real data)
 */
export declare const getZipCodesForCounty: (countyFips: number) => string[];
/**
 * Calculate date X months ago
 */
export declare const getDateMonthsAgo: (months: number) => Date;
/**
 * Convert date to ISO string for database queries
 */
export declare const formatDateForQuery: (date: Date) => string;
//# sourceMappingURL=index.d.ts.map