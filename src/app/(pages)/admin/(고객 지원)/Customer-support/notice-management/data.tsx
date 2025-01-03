const data = () => {
  const noticeHeader = [
    { label: "번호" },
    { label: "노출기간" },
    { label: "제목" },
    { label: "상태" },
    { label: "클릭수" },
    { label: "등록일" },
    { label: "관리자" },
  ];

  const noticeData = [
    {
      num: 6,
      exposurePeriod: "2023-08-10  00:00~ 2023-09-22  23:59",
      title: "나노의 서재 이벤트",
      situation: "진행",
      numberOfClicks: 72,
      registrationDate: "2023-08-05",
      manager: "이중재",
    },
    {
      num: 5,
      exposurePeriod: "2023-07-05  10:00~ 2023-08-30  23:59",
      title: "7월 이벤트 2탄",
      situation: "진행",
      numberOfClicks: 120,
      registrationDate: "2023-07-01",
      manager: "이중재",
    },
    {
      num: 4,
      exposurePeriod: "2023-07-01  00:00~ 2023-09-05  23:59",
      title: "7월 이벤트 1탄",
      situation: "진행",
      numberOfClicks: 250,
      registrationDate: "2023-07-01",
      manager: "이중재",
    },
    {
      num: 3,
      exposurePeriod: "2023-06-05  00:00~ 2023-06-15  23:59",
      title: "6월 이벤트 2탄",
      situation: "진행",
      numberOfClicks: 354,
      registrationDate: "2023-06-05",
      manager: "이중재",
    },
    {
      num: 2,
      exposurePeriod: "2023-06-01  00:00~ 2023-06-14  23:59",
      title: "6월 이벤트 1탄",
      situation: "진행",
      numberOfClicks: 214,
      registrationDate: "2023-05-15",
      manager: "이중재",
    },
    {
      num: 1,
      exposurePeriod: "2023-06-01  00:00~ 2023-06-13  23:59",
      title: "상시 이벤트",
      situation: "진행",
      numberOfClicks: 315,
      registrationDate: "2023-05-11",
      manager: "이중재",
    },
  ];
  return { noticeHeader, noticeData };
};

export default data;
