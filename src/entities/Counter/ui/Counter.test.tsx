import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StoreProvider';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';
import { Sidebar } from 'widgets/Sidebar';

describe('Counter Component', () => {
  const initialState: StateSchema = {
    counter: {value: 10}
  }
  test('renders correctly', () => {
    renderComponent(<Counter/>, {initialState});
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('should increment', () => {
    renderComponent(<Counter/>,{initialState});
    const button = screen.getByTestId('counter-increment-btn');
    fireEvent.click(button);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  test('should decrement', () => {
    renderComponent(<Counter/>,{initialState});
    const button = screen.getByTestId('counter-decrement-btn');
    fireEvent.click(button);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
})
