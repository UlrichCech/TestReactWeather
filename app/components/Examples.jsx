var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    render: () => {
        return (
            <div>
                <h1 className="text-center page-title">Examples</h1>
                <p>Here are a few location to try out:</p>
                <ol>
                    <li>
                        <Link to='/?location=Ratzeburg'>Ratzeburg, DE</Link>
                    </li>
                    <li>
                        <Link to={'/?location=' + encodeURIComponent('Göttingen')}>Göttingen, DE</Link>
                    </li>
                </ol>
            </div>
        )
    }
});

module.exports = Examples;