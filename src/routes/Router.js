import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import BookingPage from '../components/Booking/BookingPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="*" element={<HomeLayout />} />
    </Routes>
  );
};

export default Router;