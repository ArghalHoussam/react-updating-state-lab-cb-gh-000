// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  clickHandler = (event) => {
    event.persist();
    this.setState( previousState => {
        if (event.target.className === 'bitrate') {
            previousState.settings.bitrate = 12;
        } else if (event.target.className === 'resolution') {
          previousState.settings.video.resolution = '720p';
        }
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={ this.clickHandler }>bitrate</button>
        <button className="resolution" onClick={ this.clickHandler }>resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
