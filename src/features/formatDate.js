const formattedDate = (dateStr) => {
  const date = new Date(dateStr);

    const formattedDate = date.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // hour12: false
  }).replace(',', '');

  return formattedDate;

}
  export default formattedDate;