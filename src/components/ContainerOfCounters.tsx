import { useMultiCounter } from '@/store/useMultiCounter';
import '@/styles/ContainerOfCounters.css';

export const ContainerOfCounters = () => {
  const arrayOfNums = useMultiCounter(state => state.arrayOfNums);
  return (
    <section className='container-of-counters'>
      {arrayOfNums.map((num, ind) => (
        <aside key={ind} className='item'>
          {num}
        </aside>
      ))}
    </section>
  );
};
