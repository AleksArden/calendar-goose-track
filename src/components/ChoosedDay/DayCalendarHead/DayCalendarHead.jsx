import { useParams } from 'react-router';
import { CalendarHead } from 'components/CalendarHead/CalendarHead';

export const DayCalendarHead = () => {
  const day = useParams();
  const { currentDay } = day;

  return <CalendarHead currentDay={currentDay} />;
};
