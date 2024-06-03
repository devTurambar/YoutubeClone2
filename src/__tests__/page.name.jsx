import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<div role="test"><h1></h1></div>)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})