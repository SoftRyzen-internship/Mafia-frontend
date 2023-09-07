export const reformatPhoneNumber = (phoneNumber: string): string => {
  // Extract the parts of the phone number
  const country = phoneNumber.slice(0, 3);
  const operator = phoneNumber.slice(3, 6);
  const rest = phoneNumber.slice(6);

  // Format the phone number as +38 (###) ## ## ###
  const formattedNumber = `${country} (${operator}) ${rest.slice(
    0,
    2,
  )} ${rest.slice(2, 4)} ${rest.slice(4)}`;

  return formattedNumber;
};
