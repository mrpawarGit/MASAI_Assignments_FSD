export const Rating = {
  POOR: "Poor",
  AVERAGE: "Average",
  GOOD: "Good",
  EXCELLENT: "Excellent",
} as const;

export type Rating = (typeof Rating)[keyof typeof Rating];

export interface FeedbackEntry {
  id: string;
  name: string;
  email: string;
  comments: string;
  rating: Rating;
}
