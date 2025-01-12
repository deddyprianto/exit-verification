export const changeFormatDate = (dateString) => {
  // Create a Date object from the date string
  const date = new Date(dateString);

  // Define arrays for day names and month names
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Get day of the week, day of the month, month, and year
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const monthName = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Create the formatted date string
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`;

  return formattedDate;
};

 export const costumFormatDateNow = () => {
   const months = [
     'Jan',
     'Feb',
     'Mar',
     'Apr',
     'May',
     'Jun',
     'Jul',
     'Aug',
     'Sep',
     'Oct',
     'Nov',
     'Dec',
   ];
   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

   const now = new Date();
   const dayOfWeek = daysOfWeek[now.getDay()];
   const month = months[now.getMonth()];
   const dayOfMonth = now.getDate();
   const year = now.getFullYear();

   const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year} - `;
   return formattedDate;
 };

