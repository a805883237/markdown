import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import marked from 'marked';
import hljs from 'highlight.js';

import MarkSearch from './MarkSearch.js'

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
        marked.setOptions({
          highlight: function (code) {
            return hljs.highlightAuto(code).value;
          }
        });
    let xx = '```js\n console.log("这是js代码")\n```';
    return(
      <div>
        {marked('I am using __markdown__.')}
        <br/>
        <MarkSearch />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
