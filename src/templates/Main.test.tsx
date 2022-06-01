import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have an image', () => {
      render(<Main meta={null}>{null}</Main>);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Shocking Lemon');
    });
  });
});
