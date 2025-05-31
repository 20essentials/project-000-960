import { Background } from '@/components/Background.tsx';
import { ContainerOfCounters } from '@/components/ContainerOfCounters';
import { ContainerAddToCounters } from '@/components/ContainerAddToCounters';

export const App = () => {
  return (
    <>
      <Background />
      <ContainerOfCounters />
      <ContainerAddToCounters />
    </>
  );
};
