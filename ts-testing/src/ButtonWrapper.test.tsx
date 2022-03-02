import { render, screen, fireEvent } from '@testing-library/react'
//importing the component we're testing
import { ButtonWrapper } from './ButtonWrapper'


test('handles onClick', () => {
    /*stub function created by Jest; 
    a function that tracks how often it's called and what it's called with*/
    const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title={'Add Item'} />)
    const buttonElement = screen.getByText('Add Item')
    //fireEvent = simulates a click
    fireEvent.click(buttonElement)
    //check that onClick only fires once per click
    expect(onClick).toHaveBeenCalledTimes(1)
});
