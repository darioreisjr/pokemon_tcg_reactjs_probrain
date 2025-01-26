import { SectionProps } from '../../@types/section';
import './About.css'

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
