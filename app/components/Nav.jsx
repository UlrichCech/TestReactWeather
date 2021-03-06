var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;


var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        var cityName = this.refs.city.value;
        if (typeof cityName === 'string' && cityName.length > 0) {
            this.refs.city.value = '';
            var encodedLocation = encodeURIComponent(cityName);
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },

    render: function () {
        return (
            <div>
                {/*<div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">*/}
                    {/*<button className="menu-icon" type="button" data-toggle />*/}
                    {/*<div className="title-bar-title">Menu</div>*/}
                {/*</div>*/}
                <div id="main-menu" className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">
                                React Weather App
                            </li>
                            <li>
                                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                            </li>
                            <li>
                                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                            </li>
                            <li>
                                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li>
                                    <input type="search" placeholder="Search weather by city" ref="city"/>
                                </li>
                                <li>
                                    <input type="submit" className="button" value="Get Weather"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Nav;