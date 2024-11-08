export const formatDay = (dateString) => {
    const options = { weekday: "short" };
    const date = new Date(dateString * 1000);
    return date.toLocaleDateString("en-US", options);
  };

  export const getCurrentDate = () => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    
    const currentDate = new Date().toLocaleDateString("en-US", options);
    return currentDate;
  };

  export const toggleTemperatureUnit = () => {
    setIsCelsius((prevState) => !prevState);
  };

  export const convertToCelsius = (temperature) => {
    return Math.round((temperature - 32) * (5 / 9));
  };

  export const convertToFahrenheit = (temperature) => {
    return Math.round((temperature * 9) / 5 + 32);
  };

  export const renderTemperature = (temperature, isCelsius) => {
    if (isCelsius) {
      return Math.round(temperature);
    } else {
      return convertToFahrenheit(temperature);
    }
  };

  export const toDate = () => {
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
      "December"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
      }`;
    return date;
  };