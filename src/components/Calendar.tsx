import { useState } from 'react';

interface CalendarProps {
  initialDate?: Date;
  unavailableDates?: string[]; // format YYYY-MM-DD
}

const monthNames = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];
const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

const Calendar = ({ initialDate, unavailableDates = [] }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.getTime() === today.getTime();
      const dateString = date.toISOString().split('T')[0];
      const isUnavailable = unavailableDates.includes(dateString);
      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isUnavailable,
        dateString
      });
    }
    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
      <div className="flex items-center justify-between mb-4">
        <button onClick={goToPreviousMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={goToToday} className="text-sm text-lime-600 hover:text-lime-700 font-medium mt-1">Aujourd'hui</button>
        </div>
        <button onClick={goToNextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`relative p-2 h-12 flex items-center justify-center text-sm font-medium rounded-lg transition-colors
              ${!day.isCurrentMonth ? 'text-gray-300' : ''}
              ${day.isToday ? 'ring-2 ring-lime-600' : ''}
              ${day.isCurrentMonth && !day.isUnavailable ? 'bg-green-100 text-green-800 hover:bg-green-200' : ''}
              ${day.isCurrentMonth && day.isUnavailable ? 'bg-gray-300 text-gray-500 line-through' : ''}
            `}
          >
            <span>{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
