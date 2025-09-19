import { render, screen, fireEvent } from '@testing-library/react';
import NewPostPage from './NewPostPage';

test('renders New Post page title', () => {
  render(<NewPostPage />);
  const titleElement = screen.getByText(/New Post/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders course title', () => {
  render(<NewPostPage />);
  const courseElement = screen.getByText(/SIT313 - Full-Stack Development/i);
  expect(courseElement).toBeInTheDocument();
});

test('shows question form by default', () => {
  render(<NewPostPage />);
  const questionRadio = screen.getByLabelText(/Question/i);
  expect(questionRadio).toBeChecked();
});

test('switches to article form when article is selected', () => {
  render(<NewPostPage />);
  const articleRadio = screen.getByLabelText(/Article/i);
  fireEvent.click(articleRadio);
  expect(articleRadio).toBeChecked();
});

test('shows conditional text for question type', () => {
  render(<NewPostPage />);
  const conditionalText = screen.getByText(/For post a question, the following section would be appeared/i);
  expect(conditionalText).toBeInTheDocument();
});
