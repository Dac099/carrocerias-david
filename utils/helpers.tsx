/**
 * Formats a date string from 'YYYY-MM-DD' to Spanish 'DD de [Month Name] de YYYY'.
 * @param dateString The date string in 'YYYY-MM-DD' format.
 * @returns The formatted date string in Spanish, or an error message if the input is invalid. If there's an error it returns the original date string.
 */
export function formatDateToSpanish(dateString: string): string {
  // Array mapping month index (0-11) to Spanish month names
  const spanishMonths: string[] = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  // Validate the input format using a regular expression
  if (!dateString || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    console.error("Invalid date format provided. Expected 'YYYY-MM-DD'. Received:", dateString);
    return dateString;
  }

  // Split the string into parts
  const parts: string[] = dateString.split('-');
  const year: string = parts[0];
  const monthString: string = parts[1];
  const day: string = parts[2];

  // Convert month part to a number and adjust for 0-based array index
  const monthIndex: number = parseInt(monthString, 10) - 1;

  // Validate the month index
  if (monthIndex < 0 || monthIndex >= spanishMonths.length) {
    console.error("Invalid month number:", monthString);
    return dateString;
  }

  // Get the Spanish month name
  const monthName: string = spanishMonths[monthIndex];

  // Construct the final string
  return `${day} de ${monthName} de ${year}`;
}
