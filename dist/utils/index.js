"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateForQuery = exports.getDateMonthsAgo = exports.getZipCodesForCounty = exports.getCountyName = exports.isValidZipCode = exports.formatPriceChange = exports.calculatePriceChange = exports.formatPrice = void 0;
const constants_1 = require("../constants");
/**
 * Format a price value for display
 */
const formatPrice = (price) => {
    if (price === null || price === undefined || isNaN(price)) {
        return 'N/A';
    }
    return `$${price.toFixed(2)}`;
};
exports.formatPrice = formatPrice;
/**
 * Calculate percentage change between two prices
 */
const calculatePriceChange = (current, previous) => {
    if (previous === 0 || previous === null || previous === undefined) {
        return 0;
    }
    return ((current - previous) / previous) * 100;
};
exports.calculatePriceChange = calculatePriceChange;
/**
 * Format price change percentage with sign
 */
const formatPriceChange = (change) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(1)}%`;
};
exports.formatPriceChange = formatPriceChange;
/**
 * Validate ZIP code format (5 digits)
 */
const isValidZipCode = (zip) => {
    return /^\d{5}$/.test(zip);
};
exports.isValidZipCode = isValidZipCode;
/**
 * Get county name from FIPS code
 */
const getCountyName = (fips) => {
    return constants_1.COUNTIES[fips]?.name || 'Unknown';
};
exports.getCountyName = getCountyName;
/**
 * Get all ZIP codes for a county (you'll need to implement this with real data)
 */
const getZipCodesForCounty = (countyFips) => {
    // This is a placeholder - you'll replace with actual data
    const mockZips = {
        37: ['90210', '90211', '90212', '90401', '90402'], // LA sample
        59: ['92602', '92603', '92604', '92612', '92614'], // Orange sample
        73: ['92101', '92102', '92103', '92104', '92105'], // San Diego sample
        83: ['93101', '93102', '93103', '93105', '93108'], // Santa Barbara sample
        111: ['93001', '93003', '93004', '93005', '93006'] // Ventura sample
    };
    return mockZips[countyFips] || [];
};
exports.getZipCodesForCounty = getZipCodesForCounty;
/**
 * Calculate date X months ago
 */
const getDateMonthsAgo = (months) => {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    return date;
};
exports.getDateMonthsAgo = getDateMonthsAgo;
/**
 * Convert date to ISO string for database queries
 */
const formatDateForQuery = (date) => {
    return date.toISOString();
};
exports.formatDateForQuery = formatDateForQuery;
//# sourceMappingURL=index.js.map