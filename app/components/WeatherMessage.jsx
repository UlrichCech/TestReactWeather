var React = require('react');

var WeatherMessage = React.createClass({
    getDefaultProps: function() {
        return {
            temperature: '',
            city: ''
        };
    },

    render: function() {
        const cityName = this.props.city;
        return (
            <div>
                {
                    (typeof cityName === 'string' && cityName.length > 0) &&
                    <p>It is {this.props.temperature} °C in {this.props.city}</p>
                }
            </div>
        );
    }
});

module.exports = WeatherMessage;