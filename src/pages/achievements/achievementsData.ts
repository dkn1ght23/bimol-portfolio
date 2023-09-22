interface IAchievements {
  _id: number;
  name: string;
  details: string;
}

interface ICertifications {
  _id: number;
  name: string;
  authorized_by: string;
  course_by: string;
  certificate_link: string;
}

export const achievements: IAchievements[] = [
  {
    _id: 1,
    name: "University Stipend",
    details: "Got university stipend scholarship for four sessions.",
  },
  {
    _id: 2,
    name: "Board General (HSC)",
    details: "Scholarship provided by Bangladesh Government.",
  },
  {
    _id: 3,
    name: "Board General (HSC)",
    details: "Scholarship provided by Bangladesh Government.",
  },
];

export const certifications: ICertifications[] = [
  {
    _id: 1,
    name: "Using Python to Access Web Data",
    authorized_by: "University of Michigan",
    course_by: "Coursera",
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/9XCFKNAPGNKR",
  },
  {
    _id: 2,
    name: "Python Data Structures",
    authorized_by: "University of Michigan",
    course_by: "Coursera",
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/36RRYXQLSJ8Y",
  },
  {
    _id: 3,
    name: "Getting Started with Python",
    authorized_by: "University of Michigan",
    course_by: "Coursera",
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/MPLV34LEH96C",
  },
  {
    _id: 4,
    name: "Introduction to Programming with MATLAB",
    authorized_by: "Vanderbilt University",
    course_by: "Coursera",
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/BDBWWMZE86B7",
  },
];
