import './dates/fillZero.spec';
import './dates/formatDate.spec';
import './dates/formatMonth.spec';
import './dates/formatWeek.spec';
import './dates/getDaysInMonth.spec';
import './dates/getEventsForDay.spec';
import './dates/getWeekDates.spec';
import './dates/getWeeksAtMonth.spec';
import './dates/isDateInRange.spec';

describe('dateUtils Integration Tests', () => {
  it('모든 dateUtils 테스트 모듈이 정상적으로 로드되었는지 확인', () => {
    expect(true).toBe(true);
  });
});
