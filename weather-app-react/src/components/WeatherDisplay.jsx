import React, {useState} from 'react'
import sunsetImage from '../assets/sunset.jpg'
import axios from 'axios'

const WeatherDisplay = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            // event.keyは任意の名称じゃない
          axios.get(url).then((response) => {
            // この部分が非同期で実行
            setData(response.data)
            // このコードは上の処理を待たずに実行
            console.log(response.data)
          })
          setLocation('')
          .catch((error) => {
            console.error("oh, something error is happening! :", error)
          })
        }
      }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=71078e6e60b4e2e3ce7a48a05dbcad80`
    // &units=metric metricは、摂氏（°C）
    // &units=imperial imperial は華氏（°F）

    const celsiousToFahrenheit = (celsius) => {
        return (celsius * 9/5) + 32;
    }
    // The formula to convert the obtained Celsius (°C) to Fahrenheit (°F).
    // 取得した摂氏（°C）を華氏（°F）へ変換する計算式

    return (
    <div className='weather-display common-screen-size position-relative p-1 bg-black/ text-white/95'>
      <div className="search flex justify-center">
        <input
         className='responsive-bar-size mt-2 text-center border-2 border-white/80 rounded-full p-1 bg-white/10 placeholder:text-[#f8f8f8]'
         value={location}
         onChange={event => setLocation(event.target.value)}
         //  onKeyPress={searchLocation}
         //  onKeyPress❌非推奨 ➡️ onKeyDown or Up⭕️推奨  
         onKeyDown={searchLocation}
         //  Downは、Enterした瞬間, Upは、Enterを離すまで発火はしない
         placeholder='Enter Location'
         type="text" 
         />
      </div>
       <div 
           className='absolute inset-0 top-0 left-0 bg-no-repeat bg-center bg-cover -z-[10]'
           style={{ backgroundImage: `url(${sunsetImage})`}}
       >
        {/* flex flex-col justify-between */}
        

       </div>

        <div className="container flex flex-col justify-between max-w-[700px] h-full max-h-[500px]  m-auto px-4 relative top-[10%]">

            <div className="">
                <div className="location">
                    <p className='responsive-text-size'>{data.name}</p>
                </div>
                <div className="temp">
                {data.main ?
                <h1 className='responsive-title-size common-line-height'>
                   {Math.round(celsiousToFahrenheit(data.main.temp))}°F <br/> {Math.round(data.main.temp)}°C </h1>
                    // Math.round 例: Math.round(3.7) は 4 を返し、Math.round(3.2) は 3         
                : null
                }
                </div>
                <div className="description common-rotated-description">
                {data.weather ?
                <>
                <p className='responsive-text-size'>{data.weather[0].main}</p>
                <img className=''
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} 
                alt="weather icon"
                />
                </>
                 : null
                 }
                </div>
            </div>
            
            { data.name !== undefined && 
                <div className="common-bottom-section">
                    <div className="feels">
                        {data.main ?
                        <p className='responsive-text-size'>{data.main.feels_like}°C</p>                 
                        : null
                    }
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ?
                        <p className='responsive-text-size'>{data.main.humidity}%</p>                 
                        : null
                    }
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.main ?
                        <p className='responsive-text-size'>{data.wind.speed}MPH</p>                 
                        : null
                    }
                        <p>Wind Speed</p>
                    </div>
                </div>
            }  
        </div>
    </div>
    )
}

export default WeatherDisplay