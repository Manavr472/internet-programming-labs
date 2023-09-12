function getMonthNameFromDate(dateString) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    
    return months[monthIndex];
}
const dateStr = "2023-09-12"; // Replace with your date string
const monthName = getMonthNameFromDate(dateStr);
console.log(`The month name is: ${monthName}`);
