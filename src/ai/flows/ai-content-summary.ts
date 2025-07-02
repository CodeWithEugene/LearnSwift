// src/ai/flows/ai-content-summary.ts
'use server';

/**
 * @fileOverview Summarizes learning content using AI.
 *
 * - aiContentSummary - A function that handles the summarization process.
 * - AiContentSummaryInput - The input type for the aiContentSummary function.
 * - AiContentSummaryOutput - The return type for the aiContentSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContentSummaryInputSchema = z.object({
  content: z
    .string()
    .describe('The learning content to be summarized.'),
});
export type AiContentSummaryInput = z.infer<typeof AiContentSummaryInputSchema>;

const AiContentSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the learning content.'),
});
export type AiContentSummaryOutput = z.infer<typeof AiContentSummaryOutputSchema>;

export async function aiContentSummary(input: AiContentSummaryInput): Promise<AiContentSummaryOutput> {
  return aiContentSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiContentSummaryPrompt',
  input: {schema: AiContentSummaryInputSchema},
  output: {schema: AiContentSummaryOutputSchema},
  prompt: `Summarize the following learning content into a concise summary:

  {{{content}}}`,
});

const aiContentSummaryFlow = ai.defineFlow(
  {
    name: 'aiContentSummaryFlow',
    inputSchema: AiContentSummaryInputSchema,
    outputSchema: AiContentSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
