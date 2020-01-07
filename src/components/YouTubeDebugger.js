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
    let target = event.target;
    this.setState( previousState => {
        if (target.className === 'bitrate') {
            previousState.settings.bitrate = 12;
        } else if (target.className === 'resolution') {
          previousState.settings.video.resolution = '720p';
        }

    }, () => console.log(this.state));
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
