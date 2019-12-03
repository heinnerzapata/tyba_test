import React, { Component } from "react";
import { ImageBackground } from "react-native";

class BackgroundImage extends Component {
  render() {
    const { source, children, style, ...props } = this.props;
    return (
      <ImageBackground
        source={source}
        style={{ flex: 1, width: "100%", height: "100%", ...style }}
        {...props}
      >
        {children}
      </ImageBackground>
    );
  }
}

export default BackgroundImage;
