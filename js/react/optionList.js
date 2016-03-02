import React from "react";

var listApp =  React.createClass({
    render: function(){
        var list = this.props.list;
        console.log(list)
        return (
            <ul>
                {
                    results.map(function(list) {
                        return <li>이름은: {list.firstName} 성은 :{list.lastName}</li>;
                    })
                }
            </ul>
        );
    }
});

module.exports = listApp;