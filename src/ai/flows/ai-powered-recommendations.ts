// src/ai/flows/ai-powered-recommendations.ts
'use server';

/**
 * @fileOverview AI-powered content recommendation flow.
 *
 * - aiPoweredRecommendations - A function that recommends content based on user history and interests.
 * - AiPoweredRecommendationsInput - The input type for the aiPoweredRecommendations function.
 * - AiPoweredRecommendationsOutput - The return type for the aiPoweredRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredRecommendationsInputSchema = z.object({
  learningHistory: z.string().describe('The user\'s learning history.'),
  interests: z.string().describe('The user\'s interests.'),
  numberOfRecommendations: z.number().describe('The number of recommendations to return.').default(3),
});

export type AiPoweredRecommendationsInput = z.infer<typeof AiPoweredRecommendationsInputSchema>;

const AiPoweredRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of content recommendations.'),
});

export type AiPoweredRecommendationsOutput = z.infer<typeof AiPoweredRecommendationsOutputSchema>;

export async function aiPoweredRecommendations(input: AiPoweredRecommendationsInput): Promise<AiPoweredRecommendationsOutput> {
  return aiPoweredRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredRecommendationsPrompt',
  input: {
    schema: AiPoweredRecommendationsInputSchema,
  },
  output: {
    schema: AiPoweredRecommendationsOutputSchema,
  },
  prompt: `Based on the user's learning history and interests, recommend {{numberOfRecommendations}} relevant content items.

Learning History: {{{learningHistory}}}
Interests: {{{interests}}}

Return the recommendations as a list of strings.`,
});

const aiPoweredRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiPoweredRecommendationsFlow',
    inputSchema: AiPoweredRecommendationsInputSchema,
    outputSchema: AiPoweredRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
