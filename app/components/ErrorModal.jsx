var React = require('react');

var ErrorModal = React.createClass({

    getDefaultProps: function() {
        return {
            title: '',
            message: '',
        };
    },

    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: () => {
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal>
                <h4>Fehler</h4>
                <p className="lead">This is an error.</p>
                <p>
                    <button className="button hollow" data-close>
                        Okay
                    </button>
                </p>
            </div>
        )
    }
});

module.exports = ErrorModal;