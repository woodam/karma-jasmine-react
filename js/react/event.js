import React from "react";

var EventApp =  React.createClass({

    render: function() {
        return (
            <div>
                <a href="#tabLayer">{this.props.event.text}</a>
                <div id="tabLayer">
                    탭 메뉴 레이어입니다.
                </div>
            </div>
        );
    }
});

module.exports = EventApp;