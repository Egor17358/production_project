// import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/CounterSlice';
import {
  // getCounterValue,
  useCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
  // const dispatch = useDispatch();

  const counterValue = useCounterValue();
  // const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation('translation');
  const { decrement, increment, add } = useCounterActions();
  const handleIncrement = () => {
    increment();
    // dispatch(CounterActions.increment());
  };
  const handleDecrement = () => {
    decrement();
    // dispatch(CounterActions.decrement());
  };
  const handleAddThree = () => {
    add(3);
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid='increment-btn'>
        {t('increment')}
      </Button>
      <Button onClick={handleDecrement} data-testid='decrement-btn'>
        {t('decrement')}
      </Button>
      <Button onClick={handleAddThree} data-testid='decrement-btn'>
        {'add 3'}
      </Button>
    </div>
  );
};
