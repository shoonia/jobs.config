import { h } from 'preact';

const style = {
  position: 'absolute',
  top: '0',
  width: '1px',
  height: '1px',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: '0',
};

function SEO() {
  return (
    <div style={style}>
      <h1>
        Corvid jobs config builder
      </h1>
      <p>
        Online generator for Corvid jobs.config file. Build scheduling recurring jobs for your Wix site.
      </p>
    </div>
  );
}

export default SEO;
