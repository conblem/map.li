import React from "react";
import GoogleMap from "google-map-react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Map = () => (
  <Div>
    <GoogleMap
      bootstrapURLKeys={{ key: "AIzaSyCL8s7lFwM419H_z1MEzrtzWiPZPIVYHsA" }}
      defaultCenter={{
        lat: 59.95,
        lng: 30.33
      }}
      defaultZoom={11}
    />
  </Div>
);
