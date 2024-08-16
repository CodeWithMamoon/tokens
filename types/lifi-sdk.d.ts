declare module '@lifi/sdk' {
    // Add any types you are aware of here
    export interface LiFi {
      // Example method
      getTokens: () => Promise<any>;
    }
  
    const LiFi: LiFi;
    export default LiFi;
  }
  