import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// @ts-ignore
import { getToken } from '@lifi/sdk'; 

@Injectable()
export class TokenService {
  constructor(private readonly prisma: PrismaService) {}

  async fetchAndSaveToken(chainId: number, tokenAddress: string) {
    try {
      // Fetch token data from LiFi SDK
      const token = await getToken({
        chainId: chainId,
        tokenAddress: tokenAddress,
      });
      
      console.log('Fetched token:', token); // Log the fetched token for verification

      // Save token data to the database
      const savedToken = await this.prisma.token.create({
        data: {
          chainId,
          tokenAddress,
          ...token // assuming token contains other properties to be saved
        },
      });
      
      console.log('Saved token:', savedToken); // Log the saved token for verification
      
      return savedToken;
    } catch (error) {
      console.error('Error fetching or saving token:', error);
      throw error;
    }
  }

  // Other methods...
}
