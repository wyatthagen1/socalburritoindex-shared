export declare const TABLE_NAMES: {
    readonly RESTAURANTS: "restaurants";
    readonly MENU_PROCESSING_RESULTS: "menu_processing_results";
    readonly ZIP_BOUNDARIES: "zip_boundaries";
};
export declare const COUNTIES: {
    readonly 37: {
        readonly name: "Los Angeles";
        readonly zipCount: 298;
    };
    readonly 59: {
        readonly name: "Orange";
        readonly zipCount: 92;
    };
    readonly 73: {
        readonly name: "San Diego";
        readonly zipCount: 62;
    };
    readonly 83: {
        readonly name: "Santa Barbara";
        readonly zipCount: 23;
    };
    readonly 111: {
        readonly name: "Ventura";
        readonly zipCount: 28;
    };
};
export declare const TIME_FILTERS: readonly [{
    readonly id: "current";
    readonly label: "Current Prices";
    readonly description: "Most recent data";
    readonly months: 0;
}, {
    readonly id: "test";
    readonly label: "1 Months Ago";
    readonly description: "Test label";
    readonly months: 1;
}, {
    readonly id: "6months";
    readonly label: "6 Months Ago";
    readonly description: "Compare to 6 months previous";
    readonly months: 6;
}, {
    readonly id: "1year";
    readonly label: "1 Year Ago";
    readonly description: "Compare to 1 year previous";
    readonly months: 12;
}, {
    readonly id: "2years";
    readonly label: "2 Years Ago";
    readonly description: "Compare to 2 years previous";
    readonly months: 24;
}];
export declare const SUPPORTED_STATES: {
    readonly 6: "California";
};
//# sourceMappingURL=index.d.ts.map