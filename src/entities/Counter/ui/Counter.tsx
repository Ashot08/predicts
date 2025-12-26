import classes from './Counter.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useSelector, useDispatch } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface ICounterProps {
  className?: string;
}

export const Counter = ({className} : ICounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector( getCounterValue );
  const increment = () => {
    dispatch( counterActions.increment() );
  };
  const decrement = () => {
    dispatch( counterActions.decrement() );
  };
  return (
    <div className={classNames(classes.counter, className)}>
      <div>{counterValue}</div>
      <div><Button onClick={increment}>inc</Button></div>
      <div><Button onClick={decrement}>dec</Button></div>
    </div>
  );
};

