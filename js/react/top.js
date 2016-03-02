import React from "react";


var TopApp =  React.createClass({

    render: function() {
        return (
            <div>
                <h1>{this.props.top.title}</h1>
            </div>
        );
    }
});

module.exports = TopApp;