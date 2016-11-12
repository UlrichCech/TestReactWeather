var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function (event) {
        event.preventDefault();
        var cityName = this.refs.city.value;
        if (typeof cityName === 'string' && cityName.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(cityName);
        }

    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" placeholder="Enter city name" ref="city"/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;