interface IExtracurricularActivity {
  _id: number;
  activity_title: string;
  activity_position: string;
  activity_location: string;
  activity_details: string;
}

export const extracurricular: IExtracurricularActivity[] = [
  {
    _id: 1,
    activity_title: "BADHAN, BUET Zone",
    activity_position: "Excecutive",
    activity_location: "BUET, Dhaka (2018-2023)",
    activity_details:
      "BADHAN is a voluntary blood donation organization. Managing donors, creating awareness among people regarding blood donation and also donating blood were the main activities I performed.",
  },
  {
    _id: 2,
    activity_title: "BUET Drama Society ",
    activity_position: "Member and Vice President in 2022 panel",
    activity_location: "BUET, Dhaka (2018-2023)",
    activity_details:
      "BUET Drama Society focuses on stage drama and other form of acting. I have performed in a special stage drama written for the occasion of victory day. I was also an organizing member of the 15th production of BUET Drama Society - ’The Mousetrap’ by Agatha Christie",
  },
];
