import React from "react";


var ListApp =  React.createClass({
    render: function() {
        var results = this.props.list;
        return (
            <ul>
                {results.map(function(result,index) {
                    return <li key={'list'+index}>firstName : {result.firstName} lastName : {result.lastName}</li>;
                })}
            </ul>
        );
    }
});



module.exports = ListApp;