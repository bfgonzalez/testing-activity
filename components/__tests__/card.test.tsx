import { Card } from '../Card'
import { render, screen } from '@testing-library/react'

describe('Rendering Card info', () => {
  it('Should render header, description, and link', () => {
    render(
      <Card
        header='card header'
        description='card description'
        link='/some-card-link'
      />
    )

    expect(screen.getByRole('heading')).toHaveTextContent('card header')
    expect(screen.getByRole('link')).toHaveAttribute('href', '/some-card-link')
    expect(screen.queryByLabelText('card')).toHaveTextContent('card description')
  })
})
