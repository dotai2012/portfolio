import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const container = {
  border: '3px dashed rgb(116, 116, 116)',
  padding: '2.5rem',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontFamily: 'Roboto, sans-serif',
  cursor: 'pointer',
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

class DropzoneWithPreview extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  onDrop = (files) => {
    this.setState({
      files: files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })),
    });
    this.props.onDrop(files);
  }

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const { files } = this.state;

    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
    ));

    return (
      <section>
        <Dropzone
          {...this.props}
          accept="image/*"
          onDrop={this.onDrop}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} style={container} >
              <input {...getInputProps()} />
              <p>Drop files here</p>
            </div>
          )}
        </Dropzone>
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
      </section>
    );
  }
}

export default DropzoneWithPreview;
