import React from 'react';

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=...your_google_maps_iframe_url_here..."
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
