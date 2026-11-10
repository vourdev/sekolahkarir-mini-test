export type Department =
  | 'All'
  | 'Engineering'
  | 'Product & Design'
  | 'Curriculum & Learning'
  | 'Marketing & Growth'
  | 'People & Operations';

export type EmploymentType = 'Paid Internship' | 'Full-Time' | 'Part-Time' | 'Contract';

export type WorkLocation = 'Remote' | 'Hybrid (Jakarta)' | 'On-Site (Jakarta)';

export interface Role {
  id: string;
  title: string;
  department: Exclude<Department, 'All'>;
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
