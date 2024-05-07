export interface Schedule {
  _id: string;
  isMarked: boolean;
  title: string;
  category: string;
  place: string;
  slug: string;
  date: {
    start: {
      day: number;
      month: number;
      year: number;
    };
    end: {
      day: number;
      month: number;
      year: number;
    };
  };
  created_date: string;
  contents: [
    {
      _id: string;
      content_title: string;
      content_place: string;
      content: [
        {
          _id: string;
          detail: string;
          image: File;
          reference: string;
        }
      ];
    }
  ];
  hashtags: string;
}

export interface ScheduleContent {
  _id: string;
  content_title: string;
  content_place: string;
  content: [
    {
      _id: string;
      detail: string;
      image: File;
      reference: string;
    }
  ];
}

export interface NewSchedule {
  isMarked: boolean;
  title: string;
  category: string;
  place: string;
  date: {};
  created_date: string;
  contents: [
    {
      content_title: string;
      content_place: string;
      content: [
        {
          detail: string;
          image: File | undefined;
          reference: string;
        }
      ];
    }
  ];
  hashtags?: string;
}
