import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
