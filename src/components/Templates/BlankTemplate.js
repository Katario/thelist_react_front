import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ToolBar from '../ToolBar/ToolBar';
import './template.css';

class BlankTemplate extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      editorHtml: '',
      theme: 'snow'
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(html) {
  	this.setState({ editorHtml: html });
  }
  
  render() {
    return (
      <div className="BlankTemplate">
        <ReactQuill 
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={BlankTemplate.modules}
          formats={BlankTemplate.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
};


  /* 
  * Quill modules to attach to editor
  * See https://quilljs.com/docs/modules/ for complete options
  */
 BlankTemplate.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
    {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};

/* 
* Quill BlankTemplate formats
* See https://quilljs.com/docs/formats/
*/
BlankTemplate.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default BlankTemplate;
