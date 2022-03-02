import { render, screen } from '@testing-library/react'
//importing the component we're testing
import { Person } from './Person'
import { Sidebar } from './Sidebar'

test('renders a name', () => {
    const testItems = [{name: 'Anna', href: 'http://example.com'}, {name: 'Marco', href: 'http://example2.com'}]
  render(<Sidebar items={testItems} />)
    const anchorElements = screen.getAllByRole('navigation')
    expect(anchorElements[0]).toHaveTextContent(testItems[0].name)
    expect(anchorElements[0]).toHaveAttribute('href', testItems[0].href)
    expect(anchorElements[1]).toHaveTextContent(testItems[1].name)
});
