

export const getWeatherIconName = (weatherCode) => {
    switch (weatherCode) {
      case '01d': return 'clear-day';
      case '01n': return 'clear-night';
      case '02d': return 'partly-cloudy-day';
      case '02n': return 'partly-cloudy-night';
      case '03d':
      case '03n':
      case '04d':
      case '04n': return 'cloudy';
      case '09d':
      case '09n': return 'rain';
      case '10d':
      case '10n': return 'rain';
      case '11d':
      case '11n': return 'thunderstorms';
      case '13d':
      case '13n': return 'snow';
      default: return 'not-available';
    }
  };