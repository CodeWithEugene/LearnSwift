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
  learningHistory: z.array(z.string()).describe('A list of topics or courses the user has completed.'),
  interests: z.array(z.string()).describe('A list of the user\'s declared interests.'),
  numberOfRecommendations: z.number().describe('The number of recommendations to return.').default(3),
});

export type AiPoweredRecommendationsInput = z.infer<typeof AiPoweredRecommendationsInputSchema>;

const RecommendationSchema = z.object({
    title: z.string().describe('The title of the recommended course.'),
    reason: z.string().describe('A short reason why this course is recommended for the user.'),
});

const AiPoweredRecommendationsOutputSchema = z.object({
  recommendations: z.array(RecommendationSchema).describe('A list of content recommendations.'),
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
  prompt: `You are a helpful learning assistant. Based on the user's learning history and interests, recommend {{numberOfRecommendations}} relevant content items. Provide a title and a brief, compelling reason for each recommendation.

Learning History: {{#each learningHistory}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Interests: {{#each interests}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Return the recommendations as a list of objects, each with a "title" and a "reason".`,
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
