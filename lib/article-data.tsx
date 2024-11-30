import React from 'react';

export interface Article {
  title: string;
  content: React.ReactNode;
}

export const articleData: Record<string, Article> = {
  environmental: {
    title: "Environmental Sustainability in Modern Business",
    content: (
      <div className="space-y-4">
        <p>
          Environmental sustainability has become a cornerstone of modern business strategy, 
          reflecting both corporate responsibility and market demands. Companies are increasingly 
          recognizing that environmental stewardship is not just an ethical imperative but also 
          a business opportunity.
        </p>
        <p>
          Key focus areas include reducing carbon emissions, minimizing waste, and developing 
          sustainable products and services. Organizations are also investing in renewable energy, 
          implementing circular economy principles, and innovating in green technologies.
        </p>
      </div>
    )
  },
  'climate-change': {
    title: "Understanding Climate Change Impact",
    content: (
      <div className="space-y-4">
        <p>
          Climate change represents one of the most significant challenges facing businesses today. 
          Companies must understand both their contribution to climate change and how it affects 
          their operations, supply chains, and stakeholders.
        </p>
        <p>
          Leading organizations are setting science-based targets for emissions reduction, 
          investing in climate resilience, and developing innovative solutions to address 
          this global challenge.
        </p>
      </div>
    )
  },
  social: {
    title: "Social Responsibility in Business",
    content: (
      <div className="space-y-4">
        <p>
          Social responsibility encompasses how businesses manage their relationships with 
          employees, suppliers, customers, and communities. It's about creating positive 
          social impact while maintaining ethical business practices.
        </p>
        <p>
          Companies are focusing on workplace safety, fair labor practices, community 
          engagement, and social innovation. The goal is to create shared value that 
          benefits both the business and society.
        </p>
      </div>
    )
  },
  governance: {
    title: "Corporate Governance Excellence",
    content: (
      <div className="space-y-4">
        <p>
          Strong corporate governance is fundamental to building trust and ensuring long-term 
          success. It encompasses the systems and processes by which companies are directed 
          and controlled.
        </p>
        <p>
          Key aspects include board composition, executive compensation, shareholder rights, 
          and transparency in reporting. Good governance helps companies make better decisions 
          and manage risks effectively.
        </p>
      </div>
    )
  }
};