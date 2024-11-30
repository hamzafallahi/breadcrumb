import { ESGCategory } from './types';

export const esgData: ESGCategory[] = [
  {
    id: 'environmental',
    title: 'Environmental',
    description: 'Focusing on sustainability and environmental impact',
    icon: 'Leaf',
    color: 'bg-emerald-500',
    subcategories: [
      {
        id: 'climate-change',
        title: 'Climate Change',
        description: 'Strategies and initiatives to combat climate change',
        icon: 'ThermometerSun',
        color: 'bg-amber-500'
      },
      {
        id: 'resource-management',
        title: 'Resource Management',
        description: 'Efficient use and conservation of natural resources',
        icon: 'Recycle',
        color: 'bg-blue-500'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social',
    description: 'Promoting social responsibility and community impact',
    icon: 'Users',
    color: 'bg-indigo-500',
    subcategories: [
      {
        id: 'diversity-inclusion',
        title: 'Diversity & Inclusion',
        description: 'Building an inclusive workplace and society',
        icon: 'Heart',
        color: 'bg-pink-500'
      },
      {
        id: 'human-rights',
        title: 'Human Rights',
        description: 'Protecting and promoting human rights globally',
        icon: 'Shield',
        color: 'bg-purple-500'
      }
    ]
  },
  {
    id: 'governance',
    title: 'Governance',
    description: 'Ensuring ethical business practices and transparency',
    icon: 'Building2',
    color: 'bg-slate-500',
    subcategories: [
      {
        id: 'board-diversity',
        title: 'Board Diversity',
        description: 'Promoting diverse leadership and decision-making',
        icon: 'Users',
        color: 'bg-orange-500'
      },
      {
        id: 'ethics-compliance',
        title: 'Ethics & Compliance',
        description: 'Maintaining high ethical standards and compliance',
        icon: 'Scale',
        color: 'bg-red-500'
      }
    ]
  }
];