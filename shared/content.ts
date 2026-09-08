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
  { id: "templates", name: "Templates", description: "Ready-to-use resources that help complete tasks." },
  { id: "quickref", name: "Quick Reference Guides/Cheat sheets", description: "Condensed information for fast consultation." },
  { id: "toolkit", name: "Resource Toolkit", description: "A collection of learning resources, tools, and references." },
  { id: "animated", name: "Animated Videos", description: "Learning content delivered through animation." },
  { id: "cgi", name: "CGI Videos", description: "Computer-generated videos that illustrate concepts or processes." },
  { id: "highendvideo", name: "High-End Video Production", description: "Professionally produced videos with scripted content." },
  { id: "gamification", name: "Gamification Elements", description: "Game-like features used to increase engagement and motivation." },
  { id: "community", name: "Community of Practice", description: "A group that shares knowledge and learns from one another." },
  { id: "extfacilitation", name: "External Facilitation", description: "Learning led by an external subject matter expert or facilitator." },
  { id: "certificate", name: "Certificate/Badge", description: "Formal recognition of learning completion or achievement." },
  { id: "finalexam", name: "Final examination", description: "Comprehensive assessment conducted at the end of a programme." },
  { id: "simulation", name: "Simulation", description: "Step-by-step demonstration of a process or task." },
];

export const CARD_BY_ID: Record<string, PriorityCard> = Object.fromEntries(CARDS.map((c) => [c.id, c]));

export const GROUPS = ["yes", "maybe", "no"] as const;
export type Group = (typeof GROUPS)[number];
export const GROUP_LABEL: Record<Group, string> = { yes: "Yes", maybe: "Maybe", no: "No" };
export const GROUP_DESC: Record<Group, string> = {
  yes: "Essential to the success of this learning initiative",
  maybe: "Worth exploring further or dependent on resources and stakeholder input",
  no: "Not aligned with our audience, objectives, or constraints",
};
