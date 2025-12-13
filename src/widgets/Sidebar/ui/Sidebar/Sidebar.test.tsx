import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar ui component', () => {
  test('should render the sidebar in the document', () => {
    renderComponent(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('should hide sidebar on toggle click', () => {
    renderComponent(<Sidebar/>);
    const button = screen.getByTestId('sidebar-toggle-button');
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
})
