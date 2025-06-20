// 行事曆日期資訊
type CalendarDateInfo = {
  year: number; // 年
  month: number; // 月
  dayOfWeek: number; // (1=星期一，0=星期日)
  week: number; // 第幾週
  day: number; // 日
  date: string; // 日期
  currentMonth: boolean; // 是否為本月
};

// type CalendarWeek = CalendarDateInfo[];
type Calendar = CalendarDateInfo[];