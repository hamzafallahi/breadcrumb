export interface ESGCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  subcategories?: ESGCategory[];
}

export interface BreadcrumbItem {
  id: string;
  title: string;
  path: string;
}