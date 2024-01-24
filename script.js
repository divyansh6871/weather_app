

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "98fd28b3fdmsh8db458e9d48af2cp1f26c8jsn06daa50110eb",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
};

async function findtemp() {
    try {
        let city = document.getElementById("city").value;
        console.log(city);
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`+city ;
        console.log(url);
        const response = await fetch(url, options);
        const result = await response.json();
        cloud_pct = result.cloud_pct
        temp = result.temp
        feels_like = result.feels_like
        humidity = result.humidity
        min_temp = result.min_temp
        max_temp = result.max_temp
        wind_speed = result.wind_speed
        wind_degrees = result.wind_degrees
        sunrise = result.sunrise
        sunset = result.sunset
        document.getElementById("main1").innerHTML=temp;
        document.getElementById("main2").innerHTML=min_temp;
        document.getElementById("main3").innerHTML=max_temp;
        document.getElementById("main4").innerHTML=wind_speed;
        document.getElementById("main5").innerHTML=wind_degrees;
    } catch (error) {
        console.log(error);
    }
}


async function delhi() {
    try {
        let city = document.getElementById("city").value;
        console.log(city);
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`;
        console.log(url);
        const response = await fetch(url, options);
        const result = await response.json();
        cloud_pct = result.cloud_pct
        temp = result.temp
        feels_like = result.feels_like
        humidity = result.humidity
        min_temp = result.min_temp
        max_temp = result.max_temp
        wind_speed = result.wind_speed
        wind_degrees = result.wind_degrees
        sunrise = result.sunrise
        sunset = result.sunset
        document.getElementById("delhi1").innerHTML=temp;
        document.getElementById("delhi2").innerHTML=min_temp;
        document.getElementById("delhi3").innerHTML=max_temp;
        document.getElementById("delhi4").innerHTML=wind_speed;
        document.getElementById("delhi5").innerHTML=wind_degrees;
    } catch (error) {
        console.log(error);
    }
}
delhi()


async function tokyo() {
    try {
        let city = document.getElementById("city").value;
        console.log(city);
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo`;
        console.log(url);
        const response = await fetch(url, options);
        const result = await response.json();
        cloud_pct = result.cloud_pct
        temp = result.temp
        feels_like = result.feels_like
        humidity = result.humidity
        min_temp = result.min_temp
        max_temp = result.max_temp
        wind_speed = result.wind_speed
        wind_degrees = result.wind_degrees
        sunrise = result.sunrise
        sunset = result.sunset
        document.getElementById("tokyo1").innerHTML=temp;
        document.getElementById("tokyo2").innerHTML=min_temp;
        document.getElementById("tokyo3").innerHTML=max_temp;
        document.getElementById("tokyo4").innerHTML=wind_speed;
        document.getElementById("tokyo5").innerHTML=wind_degrees;
    } catch (error) {
        console.log(error);
    }
}
tokyo()


async function california() {
    try {
        let city = document.getElementById("city").value;
        console.log(city);
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=california`;
        console.log(url);
        const response = await fetch(url, options);
        const result = await response.json();
        cloud_pct = result.cloud_pct
        temp = result.temp
        feels_like = result.feels_like
        humidity = result.humidity
        min_temp = result.min_temp
        max_temp = result.max_temp
        wind_speed = result.wind_speed
        wind_degrees = result.wind_degrees
        sunrise = result.sunrise
        sunset = result.sunset
        document.getElementById("california1").innerHTML=temp;
        document.getElementById("california2").innerHTML=min_temp;
        document.getElementById("california3").innerHTML=max_temp;
        document.getElementById("california4").innerHTML=wind_speed;
        document.getElementById("california5").innerHTML=wind_degrees;
    } catch (error) {
        console.log(error);
    }
}
california()


async function sydney() {
    try {
        let city = document.getElementById("city").value;
        console.log(city);
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sydney`;
        console.log(url);
        const response = await fetch(url, options);
        const result = await response.json();
        cloud_pct = result.cloud_pct
        temp = result.temp
        feels_like = result.feels_like
        humidity = result.humidity
        min_temp = result.min_temp
        max_temp = result.max_temp
        wind_speed = result.wind_speed
        wind_degrees = result.wind_degrees
        sunrise = result.sunrise
        sunset = result.sunset
        document.getElementById("sydney1").innerHTML=temp;
        document.getElementById("sydney2").innerHTML=min_temp;
        document.getElementById("sydney3").innerHTML=max_temp;
        document.getElementById("sydney4").innerHTML=wind_speed;
        document.getElementById("sydney5").innerHTML=wind_degrees;
    } catch (error) {
        console.log(error);
    }
}
sydney()