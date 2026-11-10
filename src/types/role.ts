export type Department =
  | 'all'
  | 'engineering'
  | 'product_and_design'
  | 'curriculum_and_learning'
  | 'marketing_and_growth'
  | 'people_and_operations';

export type EmploymentType = 'Paid Internship' | 'Full-Time' | 'Part-Time' | 'Contract';

export type WorkLocation = 'Remote' | 'Hybrid (Jakarta)' | 'On-Site (Jakarta)';

export interface Role {
  id: string;
  title: string;
  department: Exclude<Department, 'all'>;
  departmentLabel: string;
  type: EmploymentType;
  location: WorkLocation;
  experienceLevel: 'Intern' | 'Entry-Level' | 'Junior';
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  isFeatured?: boolean;
  isUrgent?: boolean;
  postedAt: string;
}
