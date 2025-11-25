import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar ui component', () => {
  test('should render the sidebar in the document', () => {
    renderWithTranslation(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('should hide sidebar on toggle click', () => {
    renderWithTranslation(<Sidebar/>);
    const button = screen.getByTestId('sidebar-toggle-button');
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
})
