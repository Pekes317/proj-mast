import { Observable } from 'rxjs';

export interface FeedbackCollection {
  id: number;
  message: string;
}

export interface GraphicCollection {
  title: string;
  pic: string;
  desc: string;
}

export interface SkillsCollection {
  category: string;
  list: Observable<SkillCollection>;
}

export interface SkillCollection {
  name: string;
  context: string;
}

export interface WebCollection {
  title: string;
  pic: string;
  desc: string;
  url: string;
}

export type PmCollection = FeedbackCollection | GraphicCollection | WebCollection;
