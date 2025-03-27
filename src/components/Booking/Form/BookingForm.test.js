import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReservationProvider } from '../../../context/ReservationContext';
import BookingForm from './BookingForm';

const mockContextValue = {
  availableTimes: ['17:00', '18:00', '19:00'],
  dispatch: jest.fn()
};

describe('BookingForm', () => {
  const renderWithContext = () => {
    return render(
      <ReservationProvider value={mockContextValue}>
        <BookingForm />
      </ReservationProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    renderWithContext();
    
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('shows validation errors when required fields are empty', async () => {
    renderWithContext();
    
    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    
    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
  });

  test('validates number of guests field', async () => {
    renderWithContext();
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    // Test invalid value (0)
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, '0');
    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(await screen.findByText(/please enter a number between 1 and 12/i)).toBeInTheDocument();
    
    // Test invalid value (empty)
    await userEvent.clear(guestsInput);
    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(await screen.findByText(/please enter a number between 1 and 12/i)).toBeInTheDocument();
    
    // Test valid value
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, '4');
    expect(screen.queryByText(/please enter a number between 1 and 12/i)).not.toBeInTheDocument();
    
    // Verify error doesn't appear when submitting valid value
    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.queryByText(/please enter a number between 1 and 12/i)).not.toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    renderWithContext();
    
    await userEvent.type(screen.getByLabelText(/choose date/i), '2023-05-20');
    await userEvent.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
    await userEvent.clear(screen.getByLabelText(/number of guests/i));
    await userEvent.type(screen.getByLabelText(/number of guests/i), '4');
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');
    
    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    
    expect(consoleSpy).toHaveBeenCalledWith(
      "Reservation submitted:",
      expect.objectContaining({
        date: '2023-05-20',
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      })
    );
    
    consoleSpy.mockRestore();
  });

  test('renders available time options from context', () => {
    renderWithContext();
    
    expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '19:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '20:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '21:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '22:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '23:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Select a time' }).selected).toBe(true);
  });
});