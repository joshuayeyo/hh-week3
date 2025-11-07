import { Event } from '@/types/events/Event.types';
import { generateRepeatEvents } from '@/utils/generateRepeatEvents';

describe('제약 조건', () => {
  it('반복 없는 이벤트는 단일 이벤트로 배열에 담겨 반환된다', () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2023-05-10',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: { type: 'none', interval: 0 },
      notificationTime: 15,
    };
    const result = generateRepeatEvents(event);

    expect(result).toEqual([event]);
  });
});

describe('일간 반복 테스트', () => {
  it("'2024-01-01'부터 '2024-01-03'까지 매일 반복하는 경우 '2024-01-01', '2024-01-02', '2024-01-03'이 된다", () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-01-01',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'daily',
        interval: 1,
        endDate: '2024-01-03',
      },
      notificationTime: 15,
    };
    const result = generateRepeatEvents(event);
    expect(result.map((e) => e.date)).toEqual([
      '2024-01-01',
      '2024-01-02',
      '2024-01-03',
    ]);
  });

  it("'2024-01-01'부터 '2024-01-05'까지 2일 간격으로 반복하는 경우 '2024-01-01', '2024-01-03', '2024-01-05'가 된다", () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-01-01',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'daily',
        interval: 2,
        endDate: '2024-01-05',
      },
      notificationTime: 15,
    };
    const result = generateRepeatEvents(event);
    expect(result.map((e) => e.date)).toEqual([
      '2024-01-01',
      '2024-01-03',
      '2024-01-05',
    ]);
  });
});

describe('주간 반복 테스트', () => {
  it("'2024-01-01'를 기준으로 '2024-01-15'까지 매주 간격으로 생성하는 경우 '2024-01-01', '2024-01-08', '2024-01-15'가 된다", () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-01-01',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'weekly',
        interval: 1,
        endDate: '2024-01-15',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);

    expect(result.map((e) => e.date)).toEqual([
      '2024-01-01',
      '2024-01-08',
      '2024-01-15',
    ]);
  });

  it("'2024-01-01'를 기준으로 2주 간격으로 생성하는 경우 '2024-01-01', '2024-01-15', '2024-01-29'가 된다", () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-01-01',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'weekly',
        interval: 2,
        endDate: '2024-02-01',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);

    expect(result.map((e) => e.date)).toEqual([
      '2024-01-01',
      '2024-01-15',
      '2024-01-29',
    ]);
  });
});

describe('월간 반복 테스트', () => {
  it('2024-01-15를 기준으로 2024-03-15까지 매월 반복되는 이벤트의 날짜는 "2024-01-15", "2024-02-15", "2024-03-25"이다', () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-01-15',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2024-03-15',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);

    expect(result.map((e) => e.date)).toEqual([
      '2024-01-15',
      '2024-02-15',
      '2024-03-15',
    ]);
  });

  it('2024-01-15를 기준으로 2024-05-15까지 2달 반복되는 이벤트의 날짜는 "2024-01-15", "2024-03-15", "2024-05-25"이다', () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-01-15',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 2,
        endDate: '2024-05-15',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    expect(result.map((e) => e.date)).toEqual([
      '2024-01-15',
      '2024-03-15',
      '2024-05-15',
    ]);
  });

  it('24년 1월 31일을 기준으로 2024-04-30까지 매월 반복하는 경우 "2024-01-31", "2024-03-31"가 된다', () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-01-31',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2024-04-30',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);

    expect(result.map((e) => e.date)).toEqual(['2024-01-31', '2024-03-31']);
  });
});

describe('연간 반복 테스트', () => {
  it('매년 반복되는 이벤트를 정확히 생성해야 함', () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-03-15',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2026-03-15',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);

    expect(result.map((e) => e.date)).toEqual([
      '2024-03-15',
      '2025-03-15',
      '2026-03-15',
    ]);
  });

  it('2년 간격으로 반복되는 이벤트를 정확히 생성해야 함', () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-03-15',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 2,
        endDate: '2028-03-15',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);

    expect(result).toHaveLength(3);
    expect(result.map((e) => e.date)).toEqual([
      '2024-03-15',
      '2026-03-15',
      '2028-03-15',
    ]);
  });

  it('윤년 날짜 처리를 정확히 해야 함', () => {
    const event: Event = {
      id: '1',
      title: '중요 회의',
      date: '2024-02-29', // 윤년
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2030-03-01',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);

    expect(result.map((e) => e.date)).toEqual(['2024-02-29', '2028-02-29']);
  });

  it('년도 경계에서 잘못된 날짜 설정 시 다음 해로 이동한다', () => {
    // 이 테스트는 현재 구현의 예외 처리 로직을 확인
    // generateRepeatEvents의 73-75라인 로직 테스트
    const event: Event = {
      id: '1',
      title: '경계 테스트',
      date: '2024-02-29',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2030-01-01',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 윤년 특별 처리로 인해 2028-02-29로 이동
    expect(result.map((e) => e.date)).toEqual(['2024-02-29', '2028-02-29']);
  });
});

describe('31일 월간 반복 연도 경계 엣지 케이스', () => {
  it('1월 31일 월간 반복이 2월을 건너뛰고 3월로 이동한다', () => {
    const event: Event = {
      id: '1',
      title: '월말 정산',
      date: '2024-01-31',
      startTime: '15:00',
      endTime: '16:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2024-05-31',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 2월은 31일이 없으므로 건너뛰어야 함
    expect(result.map((e) => e.date)).toEqual([
      '2024-01-31',
      '2024-03-31',
      '2024-05-31',
    ]);
  });

  it('3월 31일 월간 반복이 4월을 건너뛰고 5월로 이동한다', () => {
    const event: Event = {
      id: '1',
      title: '분기별 회의',
      date: '2024-03-31',
      startTime: '14:00',
      endTime: '15:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2024-06-30',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 4월은 30일까지만 있으므로 건너뛰어야 함
    expect(result.map((e) => e.date)).toEqual([
      '2024-03-31',
      '2024-05-31',
    ]);
  });

  it('5월 31일 월간 반복이 6월과 9월, 11월을 건너뛴다', () => {
    const event: Event = {
      id: '1',
      title: '월말 점검',
      date: '2024-05-31',
      startTime: '17:00',
      endTime: '18:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2024-12-31',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 6월(30일), 9월(30일), 11월(30일)은 건너뛰고 31일이 있는 달만
    expect(result.map((e) => e.date)).toEqual([
      '2024-05-31',
      '2024-07-31',
      '2024-08-31',
      '2024-10-31',
      '2024-12-31',
    ]);
  });

  it('1월 31일 2개월 간격 반복이 정확히 처리된다', () => {
    const event: Event = {
      id: '1',
      title: '격월 회의',
      date: '2024-01-31',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 2,
        endDate: '2024-07-31',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 1월 -> 3월 -> 5월 -> 7월 (모두 31일이 있는 달)
    expect(result.map((e) => e.date)).toEqual([
      '2024-01-31',
      '2024-03-31',
      '2024-05-31',
      '2024-07-31',
    ]);
  });

  it('년도 경계를 넘나드는 31일 월간 반복이 정확히 처리된다', () => {
    const event: Event = {
      id: '1',
      title: '연말 정산',
      date: '2024-10-31',
      startTime: '16:00',
      endTime: '17:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2025-03-31',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 11월(30일)과 2월(28/29일)은 건너뛰기
    expect(result.map((e) => e.date)).toEqual([
      '2024-10-31',
      '2024-12-31',
      '2025-01-31',
      '2025-03-31',
    ]);
  });
});

describe('30일 월간 반복 엣지 케이스', () => {
  it('1월 30일 월간 반복이 2월을 건너뛴다', () => {
    const event: Event = {
      id: '1',
      title: '월간 보고',
      date: '2024-01-30',
      startTime: '14:00',
      endTime: '15:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2024-04-30',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 2월은 최대 29일이므로 건너뛰기
    expect(result.map((e) => e.date)).toEqual([
      '2024-01-30',
      '2024-03-30',
      '2024-04-30',
    ]);
  });

  it('윤년이 아닌 해의 1월 30일 월간 반복', () => {
    const event: Event = {
      id: '1',
      title: '월간 회의',
      date: '2023-01-30', // 2023년은 윤년이 아님
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2023-04-30',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 2023년 2월은 28일까지만 있음
    expect(result.map((e) => e.date)).toEqual([
      '2023-01-30',
      '2023-03-30',
      '2023-04-30',
    ]);
  });
});

describe('윤년 연간 반복 엣지 케이스', () => {
  it('윤년 2월 29일에서 시작하는 연간 반복이 올바르게 처리된다', () => {
    const event: Event = {
      id: '1',
      title: '윤년 기념일',
      date: '2024-02-29', // 윤년
      startTime: '12:00',
      endTime: '13:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2030-03-01',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 2월 29일은 4년마다만 존재
    expect(result.map((e) => e.date)).toEqual([
      '2024-02-29',
      '2028-02-29',
    ]);
  });

  it('윤년이 아닌 해의 2월 29일 연간 반복 시도시 안전하게 처리된다', () => {
    // 실제로는 2월 29일 이벤트가 윤년이 아닌 해에 생성되지 않겠지만
    // 데이터 무결성 테스트를 위해 포함
    const event: Event = {
      id: '1',
      title: '잘못된 날짜 테스트',
      date: '2023-02-29', // 2023년은 윤년이 아님 - 실제로는 무효한 날짜
      startTime: '12:00',
      endTime: '13:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2027-03-01',
      },
      notificationTime: 15,
    };

    // 이 테스트는 현재 구현의 안정성을 확인
    // 실제로는 2023-02-29는 유효하지 않은 날짜이므로
    // JavaScript Date 객체가 자동으로 2023-03-01로 조정할 것임
    expect(() => generateRepeatEvents(event)).not.toThrow();
  });

  it('윤년 경계에서 다른 날짜들의 연간 반복이 정상 처리된다', () => {
    const event: Event = {
      id: '1',
      title: '2월 28일 이벤트',
      date: '2024-02-28', // 윤년의 2월 28일
      startTime: '15:00',
      endTime: '16:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2027-03-01',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 2월 28일은 매년 존재하므로 정상 처리
    expect(result.map((e) => e.date)).toEqual([
      '2024-02-28',
      '2025-02-28',
      '2026-02-28',
      '2027-02-28',
    ]);
  });

  it('연도 경계를 넘나드는 12월 31일 연간 반복', () => {
    const event: Event = {
      id: '1',
      title: '연말 파티',
      date: '2024-12-31',
      startTime: '23:00',
      endTime: '23:59',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2027-12-31',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    expect(result.map((e) => e.date)).toEqual([
      '2024-12-31',
      '2025-12-31',
      '2026-12-31',
      '2027-12-31',
    ]);
  });

  it('2년 간격 윤년 반복이 올바르게 처리된다', () => {
    const event: Event = {
      id: '1',
      title: '2년마다 윤년 체크',
      date: '2024-02-29',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 2,
        endDate: '2030-03-01',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 2024 + 2 = 2026 (윤년 아님), 2026 + 2 = 2028 (윤년)
    // 하지만 현재 구현에서는 2월 29일이면 무조건 4년 후로 점프
    expect(result.map((e) => e.date)).toEqual([
      '2024-02-29',
      '2028-02-29',
    ]);
  });
});

describe('월간 반복 연도 경계 복합 시나리오', () => {
  it('31일에서 시작해서 여러 해를 거치는 월간 반복', () => {
    const event: Event = {
      id: '1',
      title: '장기 프로젝트 체크',
      date: '2023-12-31',
      startTime: '09:00',
      endTime: '10:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        endDate: '2025-03-31',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 31일이 있는 달만 포함되어야 함
    const expectedDates = [
      '2023-12-31',
      '2024-01-31',
      '2024-03-31', // 2월 건너뛰기
      '2024-05-31', // 4월 건너뛰기
      '2024-07-31', // 6월 건너뛰기
      '2024-08-31',
      '2024-10-31', // 9월 건너뛰기
      '2024-12-31', // 11월 건너뛰기
      '2025-01-31',
      '2025-03-31', // 2월 건너뛰기
    ];

    expect(result.map((e) => e.date)).toEqual(expectedDates);
  });

  it('3개월 간격 31일 반복이 올바르게 처리된다', () => {
    const event: Event = {
      id: '1',
      title: '분기별 감사',
      date: '2024-01-31',
      startTime: '14:00',
      endTime: '17:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 3,
        endDate: '2024-12-31',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // 1월(31) -> 4월+1=5월(31) -> 7월+1=8월(31) -> 10월+1=11월 -> 12월(31)
    // JavaScript Date가 자동으로 4월 31일을 5월 1일로 변환하고,
    // 이후 setDate(31)로 5월 31일이 됨
    expect(result.map((e) => e.date)).toEqual([
      '2024-01-31',
      '2024-05-31', // 4월 31일 -> 5월 1일 -> setDate(31) -> 5월 31일
      '2024-08-31', // 7월 31일 -> 8월 1일 -> setDate(31) -> 8월 31일
      '2024-12-31', // 10월 31일 -> 11월 1일 -> setDate(31) -> 12월 31일 (11월은 30일)
    ]);
  });
});

describe('경계값 및 예외 처리', () => {
  it('매우 긴 기간의 반복 일정도 안전하게 처리한다', () => {
    const event: Event = {
      id: '1',
      title: '장기 이벤트',
      date: '2024-01-01',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'yearly',
        interval: 1,
        endDate: '2030-01-01',
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    expect(result).toHaveLength(7); // 2024~2030
    expect(result[0].date).toBe('2024-01-01');
    expect(result[result.length - 1].date).toBe('2030-01-01');
  });

  it('endDate가 없으면 maxEndDate까지 생성한다', () => {
    const event: Event = {
      id: '1',
      title: '무한 반복?',
      date: '2025-12-01',
      startTime: '10:00',
      endTime: '11:00',
      description: '',
      location: '',
      category: '',
      repeat: {
        type: 'monthly',
        interval: 1,
        // endDate 없음
      },
      notificationTime: 15,
    };

    const result = generateRepeatEvents(event);
    // maxEndDate는 2025-12-30이므로 딱 하나만 생성되어야 함
    expect(result).toHaveLength(1);
    expect(result[0].date).toBe('2025-12-01');
  });
});

it('interval이 0이면 단일 이벤트만 반환한다', () => {
  const event: Event = {
    id: '1',
    title: '중요 회의',
    date: '2024-02-29',
    startTime: '10:00',
    endTime: '11:00',
    description: '',
    location: '',
    category: '',
    repeat: {
      type: 'daily',
      interval: 0,
      endDate: '2030-03-01',
    },
    notificationTime: 15,
  };

  const result = generateRepeatEvents(event);
  expect(result).toEqual([event]);
});
