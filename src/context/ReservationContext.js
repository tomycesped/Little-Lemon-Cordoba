import { createContext, useReducer } from 'react';

export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  try {
    const times = await window.fetchAPI(today);
    return times;
  } catch (error) {
    console.error("Error fetching initial times:", error);
    return ['17:00', '18:00', '19:00'];
  }
};

export const updateTimes = async (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      try {
        const times = await window.fetchAPI(action.date);
        return times;
      } catch (error) {
        console.error("Error fetching available times:", error);
        return state;
      }
    default:
      return state;
  }
};

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [availableTimes, dispatch] = useReducer(
    (state, action) => {
      updateTimes(state, action).then(times => {
        if (times) {
          state = times;
        }
      });
      return state;
    },
    [],
    () => ['17:00', '18:00', '19:00']
  );

  return (
    <ReservationContext.Provider value={{ availableTimes, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};