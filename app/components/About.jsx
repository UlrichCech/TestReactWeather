var React = require('react');

var About = React.createClass({
    render: () => {
        return (
            <div>
                <h1 className="text-center">About</h1>
                <p>This is my first React App.</p>
                <p>You can find the GitHub-Repository here:<br/>
                    <a href="https://github.com/UlrichCech/TestReactWeather">https://github.com/UlrichCech/TestReactWeather</a>
                </p>
            </div>
        );
    }
});

module.exports = About;