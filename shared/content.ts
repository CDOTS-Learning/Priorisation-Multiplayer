// The prioritization deck: services to sort into Yes / Maybe / No.

export const FRAMING = {
  intro: "Which of these would you prioritise?",
  question: "Sort each card into Yes, Maybe or No.",
};

export interface PriorityCard {
  id: string;
  name: string;
  description: string;
}

export const CARDS: PriorityCard[] = [
  { id: "ilt-inperson", name: "Instructor-Led (In Person)", description: "Learning delivered face-to-face by a facilitator." },
  { id: "ilt-online", name: "Instructor-Led (Online)", description: "Live virtual learning led by a facilitator." },
  { id: "elearning", name: "Interactive eLearning Module", description: "Online learning with interactive activities and feedback." },
  { id: "mentorship", name: "Mentorship/Buddy program", description: "Learning through guidance from an experienced colleague." },
  { id: "selfpaced", name: "Self-Paced Online Course", description: "Online course the learner completes at their own pace." },
  { id: "practical", name: "Practical Exercises", description: "Hands-on activities to apply learning." },
  { id: "casestudies", name: "Case Studies", description: "Analysis of real or realistic situations to develop/apply skills." },
  { id: "scenario", name: "Scenario-Based Learning", description: "Learning through realistic work-related situations." },
  { id: "roleplay", name: "Role Playing", description: "Practicing skills by acting out situations." },
  { id: "reflection", name: "Reflection Activities", description: "Structured opportunities to think about and apply learning." },
  { id: "quizzes", name: "Knowledge Checks & Quizzes", description: "Short assessments to test understanding." },
  { id: "jobaids", name: "Job Aids/Guides", description: "Performance support resources used while working." },
];

export const CARD_BY_ID: Record<string, PriorityCard> = Object.fromEntries(CARDS.map((c) => [c.id, c]));

export const GROUPS = ["yes", "maybe", "no"] as const;
export type Group = (typeof GROUPS)[number];
export const GROUP_LABEL: Record<Group, string> = { yes: "Yes", maybe: "Maybe", no: "No" };
