/** @format */

class DateUtils {
  static getFormattedDate(date: Date): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day} ${month} ${year}`;
  }

  static formatDateString(dateString: string): string {
    if (!dateString) return "Nieznana data";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Niepoprawna data";

    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }
}
export default DateUtils;
