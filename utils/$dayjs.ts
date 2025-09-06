import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear'; // 引入 weekOfYear 插件

dayjs.extend(weekOfYear);

// 擴展 dayjs 的類型定義
declare module 'dayjs' {
  interface Dayjs {
    CreateCalendar: typeof CreateCalendar;
  }
}

/** 取得日曆 */
const CreateCalendar = (_year: number, _month: number) => {
  // 月份起始日和行事曆起始日
  const startOfMonth = dayjs(`${_year}-${_month}-01`);
  // 取得日曆起始日（該周的星期日）
  const startDate = startOfMonth.startOf('week');

  const _calendar: Calendar = [];
  for (let weekOfMonth = 0; weekOfMonth < 6; weekOfMonth++) {
    // const _week: CalendarWeek = [];
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const currentDate = startDate.add(weekOfMonth * 7 + dayOfWeek, 'day');
      _calendar.push({
        year: currentDate.year(),
        month: currentDate.month() + 1, // 0 起始
        dayOfWeek: currentDate.day(),
        week: currentDate.week(),
        day: currentDate.date(),
        date: currentDate.format('YYYY-MM-DD'),
        currentMonth: currentDate.month() + 1 === _month
      });
    }
    // _calendar.push(_week);
  }
  return _calendar;
};

// 將 CreateCalendar 方法添加到 dayjs 的靜態方法中
(dayjs as any).CreateCalendar = CreateCalendar;

export default dayjs;
