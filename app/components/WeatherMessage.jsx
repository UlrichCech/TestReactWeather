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
                    <h3 className="text-center">It is {this.props.temperature} °C in {this.props.city}</h3>
                }
            </div>
        );
    }
});

module.exports = WeatherMessage;