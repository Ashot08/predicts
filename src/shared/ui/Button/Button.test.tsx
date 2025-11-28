import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button ui component', () => {
  test('should render the button in the document', () => {

    render(<Button>Кнопка!</Button>);
    expect(screen.queryByText('Кнопка!')).toBeInTheDocument()
  });
})
