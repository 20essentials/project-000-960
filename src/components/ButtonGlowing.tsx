import '@/styles/ButtonGlowing.css';
import { useMultiCounter } from '@/store/useMultiCounter';
import { withBase } from '@/utils/functionsTs'

export const ButtonGlowing = () => {
  const url = withBase('assets/plus.png');
  const increase = useMultiCounter(state => state.increase);

  function handleclick(e: React.MouseEvent<HTMLLabelElement>) {
    e.preventDefault();
    increase()
  }
  
  return (
    <label className='glowingbutton' onClick={handleclick}>
      <input className='am-input' type='checkbox' />
      <span className='am-span'></span>
      <img src={url} alt='Plus Img' className='am-plus' />
    </label>
  );
};
