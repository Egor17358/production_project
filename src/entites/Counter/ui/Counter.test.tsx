import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
  test('test render', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });

  // test('test toggle', () => {
  //   ComponentRender(<Counter />)
  //   const toggleBtn = screen.getByTestId('sidebar-toggle');

  //   expect(screen.getByTestId('sidebar')).toBeInTheDocument();

  //   fireEvent.click(toggleBtn);
  //   expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  // });
});
