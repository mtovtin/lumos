import React, {Component} from 'react';

class EmbedWidget extends Component {

componentDidMount() {
    (function(d, s, id) { 
        var js;
         if (d.getElementById(id)) {
            return;
        } 
        js = d.createElement(s); 
        js.id = id; 
        js.src = "https://embedsocial.com/cdn/ht.js"; 
        d.getElementsByTagName("head")[0].appendChild(js); 
    }(document, "script", "EmbedSocialHashtagScript")); 
}
render() {
    return (
        <div style={{backgroundColor:'#286988', color: "white"}} className="embedsocial-hashtag" data-ref="b11d8147dd0c72b57e11bb898c241603ec1d222b"></div>
    );
}
}


export default EmbedWidget;
