// ==== user schedules ====
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
          image: string;
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
      image: string;
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
          image?: string | undefined;
          reference: string;
        }
      ];
    }
  ];
  hashtags?: string;
}

// ==== user profile ====
export interface UserProfileInfos {
  image: string;
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}
