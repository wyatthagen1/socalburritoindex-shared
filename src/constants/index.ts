export const TABLE_NAMES = {
    RESTAURANTS: 'restaurants',
    MENU_PROCESSING_RESULTS: 'menu_processing_results',
    ZIP_BOUNDARIES: 'zip_boundaries'
  } as const;
  
  export const COUNTIES = {
    37: { name: 'Los Angeles', zipCount: 298 },
    59: { name: 'Orange', zipCount: 92 },
    73: { name: 'San Diego', zipCount: 62 },
    83: { name: 'Santa Barbara', zipCount: 23 },
    111: { name: 'Ventura', zipCount: 28 }
  } as const;
  
  export const TIME_FILTERS = [
    { 
      id: 'current', 
      label: 'Current Prices', 
      description: 'Most recent data',
      months: 0 
    },
    {
      id: 'test', 
      label: '1 Months Ago', 
      description: 'Test label',
      months: 1

    },
    { 
      id: '6months', 
      label: '6 Months Ago', 
      description: 'Compare to 6 months previous',
      months: 6 
    },
    { 
      id: '1year', 
      label: '1 Year Ago', 
      description: 'Compare to 1 year previous',
      months: 12 
    },
    { 
      id: '2years', 
      label: '2 Years Ago', 
      description: 'Compare to 2 years previous',
      months: 24 
    }
  ] as const;
  
  export const SUPPORTED_STATES = {
    6: 'California'
  } as const;