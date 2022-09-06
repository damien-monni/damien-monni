import { useForm } from '@formspree/react';
import { renderHook } from '@testing-library/react';
import { FormEvent } from 'react';
import useContactForm from './useContactForm';

jest.mock('@formspree/react');

test('onSubmit calls Formspree submit function', () => {
  const mockUseForm = useForm as jest.Mock;
  const mockSubmitToFormSpree = jest.fn();
  mockUseForm.mockReturnValue([{}, mockSubmitToFormSpree]);

  const { result } = renderHook(useContactForm);
  const { onSubmit } = result.current;
  const formEvent = {
    preventDefault: jest.fn(),
  } as unknown as FormEvent<HTMLFormElement>;
  onSubmit(formEvent);

  expect(mockSubmitToFormSpree).toHaveBeenCalledTimes(1);
});

test('handle empty formspree id', () => {
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID = '';
  const { result } = renderHook(useContactForm);
  expect(() => result.current).not.toThrow();
});
