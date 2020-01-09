import React, {Component} from 'react';
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import './App.css';

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-monokai";


class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  onEditorChange(newValue) {
    ReactDOM.findDOMNode(this.myRef.current).innerHTML = newValue
  }

  render() {
    return (
      <div className="App">
        <div className="flex-split">
          <div className="flex-split-left">
              <AceEditor
                mode="html"
                theme="monokai"
                name="awesome-code"
                height= {"100%"}
                width={"100%"}
                ref="aceEditor"
                onChange={this.onEditorChange}
                fontSize={14}
                showPrintMargin={true}
                focus={true}
                editorProps={{ $blockScrolling: true }}
                wrapEnabled= {true}
                highlightActiveLine={true}
                autoScrollEditorIntoView ={true}
                value={``}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                  showGutter: true
                }}/>
          </div>

          <div className="flex-split-right">
              <div ref={this.myRef} /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
