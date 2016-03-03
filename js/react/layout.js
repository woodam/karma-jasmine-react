import React from "react";
import ReactDOM from "react-dom";
import TopApp from "./top";
import ListApp from "./optionList";
import EventApp from "./event";
import css from "../../css/index.css"


var topData = {
    title : "타이틀입니다"
};

var optionListData = [
    {firstName: "우담", lastName: "지"},
    {firstName: "정애", lastName: "곽"},
    {firstName: "동섭", lastName: "임"}
];

var eventData = {
    text : "클릭하세요"
}

ReactDOM.render(
    <TopApp top={topData}/>,
    document.getElementById('top')
);

ReactDOM.render(
    <ListApp list={optionListData}/>,
    document.getElementById('list')
);

ReactDOM.render(
    <EventApp event={eventData}/>,
    document.getElementById('event')
);

