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
    console.log(target.className);
    this.setState (prev => {
      console.log(prev);
      return {};
    });
    // this.setState( previousState => {
    //     if (target.className === 'bitrate') {
    //       return {
    //         settings: {
    //           ...previousState.settings,
    //           bitrate: 12
    //         }
    //       }
    //     } else if (target.className === 'resolution') {
    //       return {
    //         settings: {
    //           ...previousState.settings,
    //           video: {
    //               resolution: '720p'
    //           }
    //         }
    //       }
    //     }
    //
    // } );
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={ this.clickHandler }></button>
        <button className="resolution" onClick={ this.clickHandler }></button>
      </div>
    )
  }
}

export default YouTubeDebugger;
