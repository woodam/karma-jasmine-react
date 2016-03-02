import React from "react";
import ReactDOM from "react-dom";
import TopApp from "./top";
import listApp from "./optionList";

var topData = {
    title : "타이틀입니다"
};

var optionList = {
    people : [
        {firstName: "우담", lastName: "지"},
        {firstName: "정애", lastName: "곽"},
        {firstName: "동섭", lastName: "이"}
    ]
};


ReactDOM.render(
    <TopApp top={topData}/> ,
    document.getElementById('top')
);

ReactDOM.render(
    <listApp list={optionList.people}/>,
    document.getElementById('list')
);
