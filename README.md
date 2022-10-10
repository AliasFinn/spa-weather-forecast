
# About this app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Small functional application - weather forecast. Works with API site <https://openweathermap.org>

![example](https://github.com/AliasFinn/spa-weather-forecast/blob/master/example.png?raw=true)

# How to use

Select the city where you want to know the current weather. A hint will work in the input field (input is available from both RU and EN layouts)

# How to run

    docker build -t my-app .
    docker run -it -p "80:80" my-app
    curl 127.0.0.1
