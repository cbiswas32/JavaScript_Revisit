const getTodayAndNextDay = () => {
      const today = new Date();
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + 1);
    
      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
      const todayFormatted = formatDate(today);
      const nextDayFormatted = formatDate(nextDay);
    
      return { today: todayFormatted, nextDay: nextDayFormatted };
    }

const date = new Date();
let day = ("0" + date.getDate()).slice(-2);
let month = ("0" + (date.getMonth() + 1)).slice(-2);
let year = date.getFullYear();
console.log(date)
console.log(year +"-"+month +"-"+day)


console.log( getTodayAndNextDay())
