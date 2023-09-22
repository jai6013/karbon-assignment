export const getFormattedData = (userInfo) => [
  { displayLabel: "AGE", value: userInfo?.age },
  { displayLabel: "DOB", value: userInfo?.dob },
  { displayLabel: "GENDER", value: userInfo?.gender },
  { displayLabel: "FOOD", value: userInfo?.food },
  { displayLabel: "Hobbies", value: userInfo?.hobbies },
];
