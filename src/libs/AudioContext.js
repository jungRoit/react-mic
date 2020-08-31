require('./AudioContextMock.js');
let audioCtx = null;
let analyser = null;


// if(window) {
    audioCtx = new (window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext);
  
  if(audioCtx) {
     analyser = audioCtx.createAnalyser();
  }
// }

const AudioContext = {

  getAudioContext() {
    return audioCtx;
  },

  getAnalyser() {
    return analyser;
  },

  resetAnalyser() {
    analyser = audioCtx.createAnalyser();
  },

  decodeAudioData() {
    audioCtx.decodeAudioData(audioData).then(function(decodedData) {
      // use the decoded data here
    });
  }

}

export default AudioContext;
