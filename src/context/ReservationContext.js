import { createContext, useReducer } from 'react';

// Función para inicializar los tiempos con la API
export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  try {
    const times = await window.fetchAPI(today);
    return times;
  } catch (error) {
    console.error("Error fetching initial times:", error);
    return ['17:00', '18:00', '19:00']; // Fallback times
  }
};

// Reducer actualizado
export const updateTimes = async (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      try {
        const times = await window.fetchAPI(action.date);
        return times;
      } catch (error) {
        console.error("Error fetching available times:", error);
        return state; // Mantener los tiempos anteriores si hay error
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
        // Actualizamos el estado con los nuevos tiempos
        if (times) {
          state = times;
        }
      });
      return state;
    },
    [], // Estado inicial vacío
    () => ['17:00', '18:00', '19:00'] // Estado inicial por defecto
  );

  return (
    <ReservationContext.Provider value={{ availableTimes, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};