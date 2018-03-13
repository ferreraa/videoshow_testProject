var http = require('http');
var fs = require('fs');

var videoshow = require('videoshow')


var images = ['speed.png','temperature.png']

var videoOptions = {
  fps: 5,
  loop: 20, // seconds
  transition: true,
  transitionDuration: 1, // seconds
  videoBitrate: 1024,
  videoCodec: 'libx264',
  size: '640x?',
  audioBitrate: '128k',
  audioChannels: 2,
  format: 'mp4',
  pixelFormat: 'yuv420p',
}





var object = videoshow(images, videoOptions);

//var baseUrl = "<%= ResolveUrl(\"~/\") %>";
//console.log(baseUrl);
//var stream  = fs.createWriteStream('outputfile.divx');


object
  .subtitles('sub.srt')
  .audio('smallRadio.mp3')
  .save('../video_storage/video.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err, stdout, stderr) {
    console.error('Error:', err)
    console.error('ffmpeg stderr:', stderr)
  })
  .on('end', function (output) {
    console.error('Video created in:'+ output)
  });


console.log('zboub !! \n');