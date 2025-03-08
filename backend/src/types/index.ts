export interface Option {
  id: number;
  value: string;
}

export interface Criterion {
  id: number;
  name: string;
  weight: number;
}

export interface Scores {
  [optionId: string]: {
    [criterionId: string]: number;
  };
}

export interface User {
  name: string;
  color: string;
}

export interface Matrix {
  id: String;
  title: String;
  description: String;
  createdAt: Date;
  options: Option[];
  criteria: Criterion[];
  scores: Scores;
  user: {
    [userId: string]: User;
  };
}
