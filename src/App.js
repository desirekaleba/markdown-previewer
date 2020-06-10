import React from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import { defaultMarkdown } from './__mocks__/defaultMarkdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownString: defaultMarkdown
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      markdownString: event.target.value
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <Editor markdownString={this.state.markdownString} handleChange={this.handleChange} />
        <Previewer markdownString={this.state.markdownString} />
      </div>
    );
  }
}

export default App;