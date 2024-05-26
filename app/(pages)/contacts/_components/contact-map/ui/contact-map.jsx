import React from 'react';

const ContactMap = () => {
  return (
    <div style={{ width: '100%', maxWidth: '100vw' }}>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1DcOpjtzhTAf7_9aDIIVkJ60izceVbps&ehbc=2E312F&noprof=1"
        width="100%"
        height="480"
        title="Google Map"
        allowFullScreen
        loading="lazy"
        aria-hidden="false"
        tabIndex="0"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default ContactMap;
