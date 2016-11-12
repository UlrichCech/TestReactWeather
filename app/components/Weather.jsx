var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var OpenWeatherMapAPI = require('../openWeaterMap/OpenWeatherMapAPI');

var Weather = React.createClass({
    getInitialState : function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (cityName) {
        // var that = this;
        this.setState({isLoading: true});

        // debugger;
        OpenWeatherMapAPI.getTemp(cityName).then( (temp) => {
            this.setState({
                city: cityName,
                temperature: temp,
                isLoading: false
            })
        }, (errorMessage) => {
            this.setState({city: '', isLoading: false});
            alert(errorMessage);
        });
    },

    render: function() {
        var city = this.state.city;
        var temperature = this.state.temperature;
        var isLoading = this.state.isLoading;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temperature && location) {
                return <WeatherMessage city={city} temperature={temperature}/>;
            }
        }

        return (
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;