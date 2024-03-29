export interface ratingOption {
  subject: string;
  subjectOptions: subjectOptions;
  lowButtonText: string;
  mediumButtonText: string;
  highButtonText: string;
}

export interface subjectOptions {
  0: string[];
  1: string[];
  2: string[];
}
