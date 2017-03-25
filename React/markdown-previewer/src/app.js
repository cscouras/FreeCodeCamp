import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

// marked config
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});
import placeholder from './placeholder';
import './app.sass';

// React Class Component
let App = React.createClass({
  getInitialState: function(){
    return {
      value: placeholder
    };
  },

  handleChange: function(event){
    this.setState({
      value: event.target.value
    });
  },

  render: function(){

    let html = marked(this.state.value);

    return (
      <div>
        <h1 className='header'> Markdown Previewer</h1>
        <div className='main'>
          <textarea className='tA' value={this.state.value} onChange={this.handleChange}></textarea>
          <div className='markdown' id='markdown' dangerouslySetInnerHTML={{__html:html}}></div>
          </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
