import { render, screen, fireEvent } from '@testing-library/react';
import { ContactUsPage } from './ContactUsPage';

describe('ContactUsPage', () => {
  it('submits the form with correct values', async () => {
    render(<ContactUsPage />);

    const nameInput = screen.getByTestId('name');
    fireEvent.change(nameInput, { target: { value: 'Joana' } });

    const emailInput = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'Joana@example.com' } });

    const telInput = screen.getByTestId('tel');
    fireEvent.change(telInput, { target: { value: '(48) 98810-2235' } });

    const helpInput = screen.getByTestId('help');
    fireEvent.change(helpInput, { target: { value: 'Adorei o sushi!' } });

    const submitButton = screen.getByText('Enviar!');
    fireEvent.click(submitButton);

    const successAlert = await screen.findByText('Mensagem enviada com sucesso!');
    expect(successAlert).toBeInTheDocument();
  });
});