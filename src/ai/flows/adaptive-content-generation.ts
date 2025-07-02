'use server';

/**
 * @fileOverview This file defines a Genkit flow for adaptive content generation.
 *
 * - adaptiveContentGeneration - A function that generates adaptive learning content based on user performance.
 * - AdaptiveContentInput - The input type for the adaptiveContentGeneration function.
 * - AdaptiveContentOutput - The return type for the adaptiveContentGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptiveContentInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate content.'),
  performance: z
    .number()
    .describe(
      'The user performance on previous content, as a number between 0 and 1. 0 is poor, 1 is perfect.'
    ),
  learningStyle: z
    .string()
    .optional()
    .describe('The preferred learning style of the user.'),
});
export type AdaptiveContentInput = z.infer<typeof AdaptiveContentInputSchema>;

const AdaptiveContentOutputSchema = z.object({
  content: z.string().describe('The generated learning content.'),
  difficulty: z
    .string()
-    .describe('The difficulty level of the generated content.'),
});
export type AdaptiveContentOutput = z.infer<typeof AdaptiveContentOutputSchema>;

export async function adaptiveContentGeneration(
  input: AdaptiveContentInput
): Promise<AdaptiveContentOutput> {
  return adaptiveContentGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptiveContentPrompt',
  input: {schema: AdaptiveContentInputSchema},
  output: {schema: AdaptiveContentOutputSchema},
  prompt: `You are an adaptive learning content generator. Your goal is to generate learning content tailored to the user's performance and preferred learning style.

  The topic is: {{{topic}}}
  The user's performance on previous content is: {{{performance}}}
  The user's preferred learning style is: {{{learningStyle}}}

  Adjust the difficulty of the content based on the user's performance. If the performance is low, provide simpler content. If the performance is high, provide more challenging content.

  Return the generated content and difficulty level.
  `,
});

const adaptiveContentGenerationFlow = ai.defineFlow(
  {
    name: 'adaptiveContentGenerationFlow',
    inputSchema: AdaptiveContentInputSchema,
    outputSchema: AdaptiveContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
