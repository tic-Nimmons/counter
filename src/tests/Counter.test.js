// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  //Begin by rendering the counter component before each individual test case
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).tobeInDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initial = screen.getByTestId('count');
  const result = '0';
  expect(initial).toHaveTextContent(result);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initial = screen.getByTestId('count');
  const result = '1';
  userEvent.click(screen.getByText('+');
  expect(initial).toHaveTextContent(result);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initial = screen.getByTestId('count');
  const result = '-1';
  userEvent.click(screen.getByText('-'));
  expect(initial).toHaveTextContent(result);
});
