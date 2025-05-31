import '@/styles/ButtonGlowing.css';
import { useMultiCounter } from '@/store/useMultiCounter';

export const ButtonGlowing = () => {
  const increase = useMultiCounter(state => state.increase);

  function handleclick(e: React.MouseEvent<HTMLLabelElement>) {
    e.preventDefault();
    increase()
  }
  
  return (
    <label className='glowingbutton' onClick={handleclick}>
      <input className='am-input' type='checkbox' />
      <span className='am-span'></span>
      <img src='/assets/plus.png' alt='Plus Img' className='am-plus' />
    </label>
  );
};
