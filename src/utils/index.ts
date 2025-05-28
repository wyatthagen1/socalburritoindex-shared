import { COUNTIES } from '../constants';

/**
 * Format a price value for display
 */
export const formatPrice = (price: number | null | undefined): string => {
  if (price === null || price === undefined || isNaN(price)) {
    return 'N/A';
  }
  return `$${price.toFixed(2)}`;
};

/**
 * Calculate percentage change between two prices
 */
export const calculatePriceChange = (current: number, previous: number): number => {
  if (previous === 0 || previous === null || previous === undefined) {
    return 0;
  }
  return ((current - previous) / previous) * 100;
};

/**
 * Format price change percentage with sign
 */
export const formatPriceChange = (change: number): string => {
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(1)}%`;
};

/**
 * Validate ZIP code format (5 digits)
 */
export const isValidZipCode = (zip: string): boolean => {
  return /^\d{5}$/.test(zip);
};

/**
 * Get county name from FIPS code
 */
export const getCountyName = (fips: number): string => {
  return COUNTIES[fips as keyof typeof COUNTIES]?.name || 'Unknown';
};

/**
 * Get all ZIP codes for a county (you'll need to implement this with real data)
 */
export const getZipCodesForCounty = (countyFips: number): string[] => {
  // This is a placeholder - you'll replace with actual data
  const mockZips: Record<number, string[]> = {
    37: ['90210', '90211', '90212', '90401', '90402'], // LA sample
    59: ['92602', '92603', '92604', '92612', '92614'], // Orange sample
    73: ['92101', '92102', '92103', '92104', '92105'], // San Diego sample
    83: ['93101', '93102', '93103', '93105', '93108'], // Santa Barbara sample
    111: ['93001', '93003', '93004', '93005', '93006'] // Ventura sample
  };
  
  return mockZips[countyFips] || [];
};

/**
 * Calculate date X months ago
 */
export const getDateMonthsAgo = (months: number): Date => {
  const date = new Date();
  date.setMonth(date.getMonth() - months);
  return date;
};

/**
 * Convert date to ISO string for database queries
 */
export const formatDateForQuery = (date: Date): string => {
  return date.toISOString();
};