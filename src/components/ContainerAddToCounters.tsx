import '@/styles/ContainerAddToCounters.css';
import { ButtonGlowing } from '@/components/ButtonGlowing';

export const ContainerAddToCounters = () => {
  return (
    <section
      className='container-add-to-counters'
      title='The Magic of Zustand is to update the global state 😎.'
    >
      <ButtonGlowing />
    </section>
  );
};
