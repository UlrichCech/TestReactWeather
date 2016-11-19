var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var ErrorModal = require('./ErrorModal');
var OpenWeatherMapAPI = require('../openWeaterMap/OpenWeatherMapAPI');

var Weather = React.createClass({
    getInitialState : function () {
        return {
            isLoading: false,
            errorMessage: undefined
        }
    },

    componentDidMount: function() {
        var city = this.props.location.query.location;
        if (typeof city === 'string' && city.length > 0) {
            this.handleSearch(city);
            window.location.hash = '#/';
        }
    },

    componentWillReceiveProps: function(newProps) {
        var city = newProps.location.query.location;
        if (typeof city === 'string' && city.length > 0) {
            this.handleSearch(city);
            window.location.hash = '#/';
        }
    },

    handleSearch: function (cityName) {
        // var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            city: '',
            temperature: ''
        });

        // debugger;
        OpenWeatherMapAPI.getTemp(cityName).then( (temp) => {
            this.setState({
                city: cityName,
                temperature: temp,
                isLoading: false
            })
        }, (e) => {
            this.setState({
                city: '',
                isLoading: false,
                errorMessage: e.message
            });
        });
    },

    render: function() {
        var city = this.state.city;
        var temperature = this.state.temperature;
        var isLoading = this.state.isLoading;
        var errorMessage = this.state.errorMessage;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temperature && location) {
                return <WeatherMessage city={city} temperature={temperature}/>;
            }
        }
        
        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal title="OpenWeather-Error" message="The location was not found."/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;