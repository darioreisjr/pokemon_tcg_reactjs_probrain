import Section from './Section';
import { BsInfoCircle } from 'react-icons/bs';

const AboutContent = () => {
  return (
    <div className="about-content">
      <header className="header">
        <BsInfoCircle size={32} color="var(--primary-red)" />
        <h1>Sobre o Projeto</h1>
      </header>

      <Section title="O que é o Pokémon TCG Explorer?">
        <p>
          O Pokémon TCG Explorer é uma aplicação web desenvolvida para os fãs do Pokémon Trading Card Game.
          Nossa plataforma permite que você explore a vasta coleção de cards Pokémon, oferecendo uma
          interface intuitiva e recursos de busca avançados.
        </p>
      </Section>

      <Section title="Recursos">
        <ul>
          <li>✨ Explore milhares de cards Pokémon</li>
          <li>🔍 Pesquisa avançada por nome</li>
          <li>📱 Design responsivo para todos os dispositivos</li>
          <li>🎯 Visualização detalhada de cada card</li>
          <li>⚡ Interface rápida e intuitiva</li>
        </ul>
      </Section>

      <Section title="Tecnologias Utilizadas">
        <ul>
          <li>⚛️ React</li>
          <li>🎨 CSS Puro</li>
          <li>🔄 React Router</li>
          <li>📡 Axios</li>
          <li>🃏 Pokémon TCG API</li>
        </ul>
      </Section>
    </div>
  );
};

export default AboutContent;

