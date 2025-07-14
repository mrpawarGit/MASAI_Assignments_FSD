export enum Rating {
  POOR = "Poor",
  AVERAGE = "Average",
  GOOD = "Good",
  EXCELLENT = "Excellent",
}

export interface FeedbackEntry {
  id: string;
  name: string;
  email: string;
  comments: string;
  rating: Rating;
}
