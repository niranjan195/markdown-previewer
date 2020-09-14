import React from "react";
import marked from "marked";
import "./TextAreaMarkdown.css";

const placeHolder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
`;

const PreviewMarkdown = (props) => {
  return (
    <div
      className="preview-container-block"
      dangerouslySetInnerHTML={{ __html: marked(props.input) }}
    ></div>
  );
};

class TextAreaMarkdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeHolder,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="text-area">
          <p id="text-area-heading">This is textarea</p>
          <textarea
            value={this.state.input}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div class="preview-container">
          <p id="preview-heading">This is preview heading</p>
          <PreviewMarkdown input={this.state.input} />
        </div>
      </div>
    );
  }
}

export default TextAreaMarkdown;
