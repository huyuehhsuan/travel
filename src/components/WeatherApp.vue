<template>
  <div class="app">
    <div class="content">
      <!-- <p class="location">{{ weather.name }},{{ weather.sys.country }}</p> -->
      <p>即時當地天氣</p>
      <div class="temperatures">
        <img :src="icon_url" />
        <p class="temperature">{{ Math.round(weather.main.temp) }}°C</p>
        <p class="feelsLike">
          體感<br />{{ Math.round(weather.main.feels_like) }}°C
        </p>
      </div>
      <p class="description">{{ weather.weather[0].description }}</p>
      <div class="informations">
        <div class="information">
          <p class="infoText">降雨機率</p>
          <p class="infoValue">{{ weather.main.humidity }}%</p>
        </div>
        <div class="information">
          <p class="infoText">最高溫</p>
          <p class="infoValue">{{ Math.round(weather.main.temp_max) }}°C</p>
        </div>
        <div class="information">
          <p class="infoText">最低溫</p>
          <p class="infoValue">{{ Math.round(weather.main.temp_min) }}°C</p>
        </div>
        <div class="information">
          <p class="infoText">風速</p>
          <p class="infoValue">{{ weather.wind.speed }}</p>
        </div>
        <div class="information">
          <p class="infoText">日出</p>
          <p class="infoValue">{{ sunriseHour }}:{{ sunriseMinute }}</p>
        </div>
        <div class="information">
          <p class="infoText">日落</p>
          <p class="infoValue">{{ sunsetHour }}:{{ sunsetMinute }}</p>
        </div>
      </div>
      <p class="date">
        更新時間:{{ hour }}:{{ minute }}:{{ second }}, {{ year }}-{{ month }}-{{
          date
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherApp",

  data() {
    return {
      api_key: "a0d91d0ecaad5b8bc079f469a49b9501",
      url_base: "https://api.openweathermap.org/data/2.5/",
      icon_base: "http://openweathermap.org/img/wn/",
      icon_url: "",
      city: "",
      cityList: [
        {
          id: 1,
          city: "tokyo",
          img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          description:
            "tokto Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 2,
          city: "new york",
          img: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          description:
            "newyork Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 3,
          city: "bangkok",
          img: "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          description:
            "bangkok Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 4,
          city: "paris",
          img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          description:
            "paris Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 5,
          city: "seoul",
          img: "https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          description:
            "seoul Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
        {
          id: 6,
          city: "taipei",
          img: "https://images.unsplash.com/photo-1572715381359-002b1eabd56b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          description:
            "taipei Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsa rem adipisci impedit ipsum! Distinctio reprehenderit dolore in veritatis? Laboriosam nemo minus facere ea, aliquam repellat a nostrum ex aperiam!",
        },
      ],
      months: [
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
      ],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      // query: this.city,
      weather: {
        name: "",
        main: {
          temp: 0,
          temp_max: 0,
          temp_min: 0,
          feels_like: 0,
          humidity: 0,
        },
        sys: {
          country: "",
          sunrise: null,
          sunset: null,
        },
        weather: [
          {
            description: "",
            icon: "",
          },
        ],
        wind: {
          speed: 0,
        },
      },
      sunriseHour: 0,
      sunriseMinute: 0,
      sunsetHour: 0,
      sunsetMinute: 0,
      year: null,
      month: null,
      date: null,
      day: null,
      hour: null,
      minute: null,
      second: null,
    };
  },
  mounted() {
    this.city = this.cityList[this.$route.query.Id - 1].city;
    this.startTime();
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      fetch(
        `${this.url_base}weather?q=${this.city}&units=metric&APPID=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
      this.icon_url = `${this.icon_base}${this.weather.weather[0].icon}@2x.png`;
      const sunrise = new Date(this.weather.sys.sunrise * 1000);
      this.sunriseHour = sunrise.getHours();
      this.sunriseMinute = sunrise.getMinutes();
      const sunset = new Date(this.weather.sys.sunset * 1000);
      this.sunsetHour = sunset.getHours();
      this.sunsetMinute = sunset.getMinutes();
      //   if (this.weather.main.humidity > 60) {
      //     console.log(document.queryselector("body"));
      //   }
    },
    startTime() {
      const today = new Date();
      const hour = today.getHours();
      const min = today.getMinutes();
      const sec = today.getSeconds();
      const hourString = hour < 10 ? "0" + hour : "" + hour;
      const minString = min < 10 ? "0" + min : "" + min;
      const secString = sec < 10 ? "0" + sec : "" + sec;
      this.year = today.getFullYear();
      this.month = this.months[today.getMonth()];
      this.date = today.getDate();
      this.day = this.days[today.getDay()];
      this.hour = hourString;
      this.minute = minString;
      this.second = secString;
    },
  },
};
</script>

<style scoped>
.app {
  max-width: 400px;
  padding: 30px;
  text-align: center;
  margin: 0 auto;
}

.content {
  color: rgb(95, 95, 95);
  padding: 20px 0;
}

.location {
  font-size: 46px;
  font-weight: 700;
  text-shadow: black 0.1em 0.1em 0.2em;
}

.date {
  margin-top: 10px;
  color: rgb(136, 136, 136);
}

.temperatures {
  padding: 10px 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}

.temperatures img {
  margin: auto;
  width: 100%;
}

.temperature {
  font-size: 46px;
  font-weight: 600;
}

.feelsLike {
  font-size: 32px;
  font-weight: 600;
}

.description {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.informations {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.information {
  border: 1px solid rgb(207, 207, 207);
  border-radius: 10px;
  margin: 4px;
  padding: 10px;
}

.infoText {
  font-size: 20px;
  margin-bottom: 10px;
}

.infoValue {
  font-size: 30px;
}
</style>