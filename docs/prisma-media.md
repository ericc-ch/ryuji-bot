# JSDoc: Home

Source: https://amishshah.github.io/prism-media

[![Logo](https://hydrabolt.me/assets/prism-media-logo.svg)](https://amishshah.github.io/prism-media/)

[![Build Status](https://travis-ci.org/amishshah/prism-media.svg?branch=master)](https://travis-ci.org/hydrabolt/prism-media) [![dependencies](https://david-dm.org/amishshah/prism-media/status.svg)](https://david-dm.org/hydrabolt/prism-media) [![npm](https://img.shields.io/npm/dt/prism-media.svg)](https://www.npmjs.com/package/prism-media) [![Patreon](https://img.shields.io/badge/donate-patreon-F96854.svg)](https://www.patreon.com/discordjs)

## What is it?

An easy-to-use stream-based toolkit that you can use for media processing. All the features provided have predictable abstractions and join together coherently.

```
// This example will demux and decode an Opus-containing OGG file, and then write it to a file.
const prism = require('prism-media');
const fs = require('fs');

fs.createReadStream('./audio.ogg')
  .pipe(new prism.opus.OggDemuxer())
  .pipe(new prism.opus.Decoder({ rate: 48000, channels: 2, frameSize: 960 }))
  .pipe(fs.createWriteStream('./audio.pcm'));
```

The example above can work with either a native or pure JavaScript Opus decoder - you don't need to worry about changing your code for whichever you install.

-   FFmpeg support (either through npm modules or a normal installation)
-   Opus support (native or pure JavaScript)
-   Demuxing for WebM/OGG files (no modules required!)
-   Volume Altering (no modules required!)

## Dependencies

The following dependencies are all optional, and you should only install one from each category (the first listed in each category is preferred)

-   Opus
    -   [`@discordjs/opus`](https://github.com/discordjs/opus)
    -   [`node-opus`](https://github.com/Rantanen/node-opus)
    -   [`opusscript`](https://github.com/abalabahaha/opusscript)
-   FFmpeg
    -   [`ffmpeg-static`](http://npmjs.com/ffmpeg-static)
    -   `ffmpeg` from a [normal installation](https://www.ffmpeg.org/download.html)

## Useful Links

-   [Documentation](https://amishshah.github.io/prism-media)
-   [Examples](https://github.com/amishshah/prism-media/tree/master/examples)
-   [Patreon](https://www.patreon.com/discordjs)

## License

> Copyright 2019 - 2022 Amish Shah
> 
> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
> 
> http://www.apache.org/licenses/LICENSE-2.0
> 
> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

---


# JSDoc: Home

Source: https://amishshah.github.io/prism-media/index.html

[![Logo](https://hydrabolt.me/assets/prism-media-logo.svg)](https://amishshah.github.io/prism-media/)

[![Build Status](https://travis-ci.org/amishshah/prism-media.svg?branch=master)](https://travis-ci.org/hydrabolt/prism-media) [![dependencies](https://david-dm.org/amishshah/prism-media/status.svg)](https://david-dm.org/hydrabolt/prism-media) [![npm](https://img.shields.io/npm/dt/prism-media.svg)](https://www.npmjs.com/package/prism-media) [![Patreon](https://img.shields.io/badge/donate-patreon-F96854.svg)](https://www.patreon.com/discordjs)

## What is it?

An easy-to-use stream-based toolkit that you can use for media processing. All the features provided have predictable abstractions and join together coherently.

```
// This example will demux and decode an Opus-containing OGG file, and then write it to a file.
const prism = require('prism-media');
const fs = require('fs');

fs.createReadStream('./audio.ogg')
  .pipe(new prism.opus.OggDemuxer())
  .pipe(new prism.opus.Decoder({ rate: 48000, channels: 2, frameSize: 960 }))
  .pipe(fs.createWriteStream('./audio.pcm'));
```

The example above can work with either a native or pure JavaScript Opus decoder - you don't need to worry about changing your code for whichever you install.

-   FFmpeg support (either through npm modules or a normal installation)
-   Opus support (native or pure JavaScript)
-   Demuxing for WebM/OGG files (no modules required!)
-   Volume Altering (no modules required!)

## Dependencies

The following dependencies are all optional, and you should only install one from each category (the first listed in each category is preferred)

-   Opus
    -   [`@discordjs/opus`](https://github.com/discordjs/opus)
    -   [`node-opus`](https://github.com/Rantanen/node-opus)
    -   [`opusscript`](https://github.com/abalabahaha/opusscript)
-   FFmpeg
    -   [`ffmpeg-static`](http://npmjs.com/ffmpeg-static)
    -   `ffmpeg` from a [normal installation](https://www.ffmpeg.org/download.html)

## Useful Links

-   [Documentation](https://amishshah.github.io/prism-media)
-   [Examples](https://github.com/amishshah/prism-media/tree/master/examples)
-   [Patreon](https://www.patreon.com/discordjs)

## License

> Copyright 2019 - 2022 Amish Shah
> 
> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
> 
> http://www.apache.org/licenses/LICENSE-2.0
> 
> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

---


# JSDoc: Namespace: core

Source: https://amishshah.github.io/prism-media/core.html

## core

Core features. \*\*You shouldn't prefix imports from this namespace with \`core\`.\*\*

Source:

-   [core/index.js](core_index.js.html), [line 1](core_index.js.html#line1)

### Classes

[FFmpeg](core.FFmpeg.html)

[VolumeTransformer](core.VolumeTransformer.html)

[WebmBaseDemuxer](core.WebmBaseDemuxer.html)

### Type Definitions

#### FFmpegInfo

The available FFmpeg information

##### Type:

-   Object

##### Properties:

Name

Type

Description

`command`

string

The command used to launch FFmpeg

`output`

string

The output from running \`ffmpeg -h\`

`version`

string

The version of FFmpeg being used, determined from \`output\`.

Source:

-   [core/FFmpeg.js](core_FFmpeg.js.html), [line 98](core_FFmpeg.js.html#line98)

---


# JSDoc: Namespace: opus

Source: https://amishshah.github.io/prism-media/opus.html

## opus

Opus features

Source:

-   [opus/index.js](opus_index.js.html), [line 1](opus_index.js.html#line1)

### Classes

[Decoder](opus.Decoder.html)

[Encoder](opus.Encoder.html)

[OggDemuxer](opus.OggDemuxer.html)

[OpusStream](opus.OpusStream.html)

[WebmDemuxer](opus.WebmDemuxer.html)

---


# JSDoc: Namespace: vorbis

Source: https://amishshah.github.io/prism-media/vorbis.html

## vorbis

Vorbis features

Source:

-   [vorbis/index.js](vorbis_index.js.html), [line 1](vorbis_index.js.html#line1)

### Classes

[WebmDemuxer](vorbis.WebmDemuxer.html)

---


# JSDoc: Class: FFmpeg

Source: https://amishshah.github.io/prism-media/core.FFmpeg.html

## [core](core.html).FFmpeg(options)

An FFmpeg transform stream that provides an interface to FFmpeg.

## Constructor

#### new FFmpeg(options)

Creates a new FFmpeg transform stream

##### Parameters:

Name

Type

Description

`options`

Object

Options you would pass to a regular Transform stream, plus an \`args\` option

###### Properties

Name

Type

Attributes

Default

Description

`args`

Array.<string>

Arguments to pass to FFmpeg

`shell`

boolean

<optional>  

false

Whether FFmpeg should be spawned inside a shell

Source:

-   [core/FFmpeg.js](core_FFmpeg.js.html), [line 22](core_FFmpeg.js.html#line22)

##### Example

```
// By default, if you don't specify an input (`-i ...`) prism will assume you're piping a stream into it.
const transcoder = new prism.FFmpeg({
 args: [
   '-analyzeduration', '0',
   '-loglevel', '0',
   '-f', 's16le',
   '-ar', '48000',
   '-ac', '2',
 ]
});
const s16le = mp3File.pipe(transcoder);
const opus = s16le.pipe(new prism.opus.Encoder({ rate: 48000, channels: 2, frameSize: 960 }));
```

### Methods

#### (static) getInfo(forceopt) → {FFmpegInfo}

Finds a suitable FFmpeg command and obtains the debug information from it.

##### Parameters:

Name

Type

Attributes

Default

Description

`force`

boolean

<optional>  

false

If true, will ignore any cached results and search for the command again

Source:

-   [core/FFmpeg.js](core_FFmpeg.js.html), [line 123](core_FFmpeg.js.html#line123)

##### Throws:

Will throw an error if FFmpeg cannot be found.

##### Returns:

Type

FFmpegInfo

##### Example

```
const ffmpeg = prism.FFmpeg.getInfo();

console.log(`Using FFmpeg version ${ffmpeg.version}`);

if (ffmpeg.output.includes('--enable-libopus')) {
  console.log('libopus is available!');
} else {
  console.log('libopus is unavailable!');
}
```

---


# JSDoc: Class: VolumeTransformer

Source: https://amishshah.github.io/prism-media/core.VolumeTransformer.html

## [core](core.html).VolumeTransformer(options)

Transforms a stream of PCM volume.

## Constructor

#### new VolumeTransformer(options)

##### Parameters:

Name

Type

Description

`options`

Object

Any optional TransformStream options plus some extra:

###### Properties

Name

Type

Attributes

Default

Description

`type`

string

The type of transformer: s16le (signed 16-bit little-endian), s16be, s32le, s32be

`volume`

number

<optional>  

1

The output volume of the stream

Source:

-   [core/VolumeTransformer.js](core_VolumeTransformer.js.html), [line 10](core_VolumeTransformer.js.html#line10)

##### Example

```
// Half the volume of a signed 16-bit little-endian PCM stream
input
 .pipe(new prism.VolumeTransformer({ type: 's16le', volume: 0.5 }))
 .pipe(writeStream);
```

### Extends

-   TransformStream

### Members

#### (readonly) volumeDecibels :number

The current volume of the stream in decibels

##### Type:

-   number

Source:

-   [core/VolumeTransformer.js](core_VolumeTransformer.js.html), [line 115](core_VolumeTransformer.js.html#line115)

#### (readonly) volumeLogarithmic :number

The current volume of the stream from a logarithmic scale

##### Type:

-   number

Source:

-   [core/VolumeTransformer.js](core_VolumeTransformer.js.html), [line 123](core_VolumeTransformer.js.html#line123)

### Methods

#### setVolume(volume)

Sets the volume relative to the input stream - i.e. 1 is normal, 0.5 is half, 2 is double.

##### Parameters:

Name

Type

Description

`volume`

number

The volume that you want to set

Source:

-   [core/VolumeTransformer.js](core_VolumeTransformer.js.html), [line 90](core_VolumeTransformer.js.html#line90)

#### setVolumeDecibels(db)

Sets the volume in decibels.

##### Parameters:

Name

Type

Description

`db`

number

The decibels

Source:

-   [core/VolumeTransformer.js](core_VolumeTransformer.js.html), [line 98](core_VolumeTransformer.js.html#line98)

#### setVolumeLogarithmic(value)

Sets the volume so that a perceived value of 0.5 is half the perceived volume etc.

##### Parameters:

Name

Type

Description

`value`

number

The value for the volume

Source:

-   [core/VolumeTransformer.js](core_VolumeTransformer.js.html), [line 106](core_VolumeTransformer.js.html#line106)

---


# JSDoc: Class: WebmBaseDemuxer

Source: https://amishshah.github.io/prism-media/core.WebmBaseDemuxer.html

## (protected) [core](core.html).WebmBaseDemuxer(optionsopt)

Base class for WebmOpusDemuxer and WebmVorbisDemuxer. \*\*You shouldn't directly instantiate this class, use the opus.WebmDemuxer and vorbis.WebmDemuxer implementations instead!\*\*

## Constructor

#### (protected) new WebmBaseDemuxer(optionsopt)

Creates a new Webm demuxer.

##### Parameters:

Name

Type

Attributes

Description

`options`

Object

<optional>  

options that you would pass to a regular Transform stream.

Source:

-   [core/WebmBase.js](core_WebmBase.js.html), [line 11](core_WebmBase.js.html#line11)

### Extends

-   TransformStream

---


# JSDoc: Class: Decoder

Source: https://amishshah.github.io/prism-media/opus.Decoder.html

## [opus](opus.html).Decoder()

An Opus decoder stream. Note that any stream you pipe into this must be in \[object mode\](https://nodejs.org/api/stream.html#stream\_object\_mode) and should output Opus packets.

## Constructor

#### new Decoder()

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 183](opus_Opus.js.html#line183)

##### Example

```
const decoder = new prism.opus.Decoder({ frameSize: 960, channels: 2, rate: 48000 });
input.pipe(decoder);
// decoder will now output PCM audio
```

### Extends

-   [opus.OpusStream](opus.OpusStream.html)

### Methods

#### setBitrate(bitrate)

Sets the bitrate of the stream.

##### Parameters:

Name

Type

Description

`bitrate`

number

the bitrate to use use, e.g. 48000

Inherited From:

-   [opus.OpusStream#setBitrate](opus.OpusStream.html#setBitrate)

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 83](opus_Opus.js.html#line83)

#### setFEC(enabled)

Enables or disables forward error correction.

##### Parameters:

Name

Type

Description

`enabled`

boolean

whether or not to enable FEC.

Inherited From:

-   [opus.OpusStream#setFEC](opus.OpusStream.html#setFEC)

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 93](opus_Opus.js.html#line93)

#### setPLP(percentageopt)

Sets the expected packet loss over network transmission.

##### Parameters:

Name

Type

Attributes

Description

`percentage`

number

<optional>  

a percentage (represented between 0 and 1)

Inherited From:

-   [opus.OpusStream#setPLP](opus.OpusStream.html#setPLP)

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 102](opus_Opus.js.html#line102)

---


# JSDoc: Class: Encoder

Source: https://amishshah.github.io/prism-media/opus.Encoder.html

## [opus](opus.html).Encoder(options)

An Opus encoder stream. Outputs opus packets in \[object mode.\](https://nodejs.org/api/stream.html#stream\_object\_mode)

## Constructor

#### new Encoder(options)

Creates a new Opus encoder stream.

##### Parameters:

Name

Type

Description

`options`

Object

options that you would pass to a regular OpusStream, plus a few more:

###### Properties

Name

Type

Description

`frameSize`

number

the frame size in bytes to use (e.g. 960 for stereo audio at 48KHz with a frame duration of 20ms)

`channels`

number

the number of channels to use

`rate`

number

the sampling rate in Hz

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 138](opus_Opus.js.html#line138)

##### Example

```
const encoder = new prism.opus.Encoder({ frameSize: 960, channels: 2, rate: 48000 });
pcmAudio.pipe(encoder);
// encoder will now output Opus-encoded audio packets
```

### Extends

-   [opus.OpusStream](opus.OpusStream.html)

### Methods

#### setBitrate(bitrate)

Sets the bitrate of the stream.

##### Parameters:

Name

Type

Description

`bitrate`

number

the bitrate to use use, e.g. 48000

Overrides:

-   [opus.OpusStream#setBitrate](opus.OpusStream.html#setBitrate)

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 83](opus_Opus.js.html#line83)

#### setFEC(enabled)

Enables or disables forward error correction.

##### Parameters:

Name

Type

Description

`enabled`

boolean

whether or not to enable FEC.

Overrides:

-   [opus.OpusStream#setFEC](opus.OpusStream.html#setFEC)

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 93](opus_Opus.js.html#line93)

#### setPLP(percentageopt)

Sets the expected packet loss over network transmission.

##### Parameters:

Name

Type

Attributes

Description

`percentage`

number

<optional>  

a percentage (represented between 0 and 1)

Overrides:

-   [opus.OpusStream#setPLP](opus.OpusStream.html#setPLP)

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 102](opus_Opus.js.html#line102)

---


# JSDoc: Class: OggDemuxer

Source: https://amishshah.github.io/prism-media/opus.OggDemuxer.html

## [opus](opus.html).OggDemuxer(optionsopt)

Demuxes an Ogg stream (containing Opus audio) to output an Opus stream.

## Constructor

#### new OggDemuxer(optionsopt)

Creates a new OggOpus demuxer.

##### Parameters:

Name

Type

Attributes

Description

`options`

Object

<optional>  

options that you would pass to a regular Transform stream.

Source:

-   [opus/OggDemuxer.js](opus_OggDemuxer.js.html), [line 16](opus_OggDemuxer.js.html#line16)

### Extends

-   TransformStream

### Events

#### head

Emitted when the demuxer encounters the opus head.

##### Parameters:

Name

Type

Description

`segment`

Buffer

a buffer containing the opus head data.

Source:

-   [opus/OggDemuxer.js](opus_OggDemuxer.js.html), [line 129](opus_OggDemuxer.js.html#line129)

#### tags

Emitted when the demuxer encounters opus tags.

##### Parameters:

Name

Type

Description

`segment`

Buffer

a buffer containing the opus tags.

Source:

-   [opus/OggDemuxer.js](opus_OggDemuxer.js.html), [line 136](opus_OggDemuxer.js.html#line136)

---


# JSDoc: Class: OpusStream

Source: https://amishshah.github.io/prism-media/opus.OpusStream.html

## (protected) [opus](opus.html).OpusStream(optionsopt)

Takes a stream of Opus data and outputs a stream of PCM data, or the inverse. \*\*You shouldn't directly instantiate this class, see opus.Encoder and opus.Decoder instead!\*\*

## Constructor

#### (protected) new OpusStream(optionsopt)

Creates a new Opus transformer.

##### Parameters:

Name

Type

Attributes

Description

`options`

Object

<optional>  

options that you would pass to a regular Transform stream

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 38](opus_Opus.js.html#line38)

### Extends

-   TransformStream

### Members

#### (static, readonly) type :string

Returns the Opus module being used - \`opusscript\`, \`node-opus\`, or \`@discordjs/opus\`.

##### Type:

-   string

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 74](opus_Opus.js.html#line74)

##### Example

```
console.log(`Using Opus module ${prism.opus.Encoder.type}`);
```

### Methods

#### setBitrate(bitrate)

Sets the bitrate of the stream.

##### Parameters:

Name

Type

Description

`bitrate`

number

the bitrate to use use, e.g. 48000

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 83](opus_Opus.js.html#line83)

#### setFEC(enabled)

Enables or disables forward error correction.

##### Parameters:

Name

Type

Description

`enabled`

boolean

whether or not to enable FEC.

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 93](opus_Opus.js.html#line93)

#### setPLP(percentageopt)

Sets the expected packet loss over network transmission.

##### Parameters:

Name

Type

Attributes

Description

`percentage`

number

<optional>  

a percentage (represented between 0 and 1)

Source:

-   [opus/Opus.js](opus_Opus.js.html), [line 102](opus_Opus.js.html#line102)

---


# JSDoc: Class: WebmDemuxer

Source: https://amishshah.github.io/prism-media/opus.WebmDemuxer.html

## [opus](opus.html).WebmDemuxer()

Demuxes a Webm stream (containing Opus audio) to output an Opus stream.

## Constructor

#### new WebmDemuxer()

Source:

-   [opus/WebmDemuxer.js](opus_WebmDemuxer.js.html), [line 16](opus_WebmDemuxer.js.html#line16)

##### Example

```
const fs = require('fs');
const file = fs.createReadStream('./audio.webm');
const demuxer = new prism.opus.WebmDemuxer();
const opus = file.pipe(demuxer);
// opus is now a ReadableStream in object mode outputting Opus packets
```

### Extends

-   [core.WebmBaseDemuxer](core.WebmBaseDemuxer.html)

---


# JSDoc: Class: WebmDemuxer

Source: https://amishshah.github.io/prism-media/vorbis.WebmDemuxer.html

## [vorbis](vorbis.html).WebmDemuxer()

Demuxes a Webm stream (containing Vorbis audio) to output a Vorbis stream.

## Constructor

#### new WebmDemuxer()

Source:

-   [vorbis/WebmDemuxer.js](vorbis_WebmDemuxer.js.html), [line 10](vorbis_WebmDemuxer.js.html#line10)

### Extends

-   [core.WebmBaseDemuxer](core.WebmBaseDemuxer.html)

---


# JSDoc: Source: vorbis/index.js

Source: https://amishshah.github.io/prism-media/vorbis_index.js.html

1.  `/**`
2.   `* Vorbis features`
3.   `* @namespace vorbis`
4.   `*/`

6.  `module.exports = {`
7.    `WebmDemuxer: require('./WebmDemuxer'),`
8.  `};`

---


# JSDoc: Source: core/index.js

Source: https://amishshah.github.io/prism-media/core_index.js.html

1.  `/**`
2.   `* Core features.`
3.   ``* **You shouldn't prefix imports from this namespace with `core`.**``
4.   `* @namespace core`
5.   `*/`
6.  `module.exports = {`
7.    `FFmpeg: require('./FFmpeg'),`
8.    `VolumeTransformer: require('./VolumeTransformer'),`
9.  `};`

---


# JSDoc: Source: core/FFmpeg.js

Source: https://amishshah.github.io/prism-media/core_FFmpeg.js.html

1.  `const ChildProcess = require('child_process');`
2.  `const { Duplex } = require('stream');`

4.  `let FFMPEG = {`
5.    `command: null,`
6.    `output: null,`
7.  `};`

9.  `const VERSION_REGEX = /version (.+) Copyright/mi;`

11.  `Object.defineProperty(FFMPEG, 'version', {`
12.    `get() {`
13.      `return VERSION_REGEX.exec(FFMPEG.output)[1];`
14.    `},`
15.    `enumerable: true,`
16.  `});`

18.  `/**`
19.   `* An FFmpeg transform stream that provides an interface to FFmpeg.`
20.   `* @memberof core`
21.   `*/`
22.  `class FFmpeg extends Duplex {`
23.    `/**`
24.     `* Creates a new FFmpeg transform stream`
25.     `* @memberof core`
26.     ``* @param {Object} options Options you would pass to a regular Transform stream, plus an `args` option``
27.     `* @param {Array<string>} options.args Arguments to pass to FFmpeg`
28.     `* @param {boolean} [options.shell=false] Whether FFmpeg should be spawned inside a shell`
29.     `* @example`
30.     ``* // By default, if you don't specify an input (`-i ...`) prism will assume you're piping a stream into it.``
31.     `* const transcoder = new prism.FFmpeg({`
32.     `*  args: [`
33.     `*    '-analyzeduration', '0',`
34.     `*    '-loglevel', '0',`
35.     `*    '-f', 's16le',`
36.     `*    '-ar', '48000',`
37.     `*    '-ac', '2',`
38.     `*  ]`
39.     `* });`
40.     `* const s16le = mp3File.pipe(transcoder);`
41.     `* const opus = s16le.pipe(new prism.opus.Encoder({ rate: 48000, channels: 2, frameSize: 960 }));`
42.     `*/`
43.    `constructor(options = {}) {`
44.      `super();`
45.      `this.process = FFmpeg.create({ shell: false, ...options });`
46.      `const EVENTS = {`
47.        `readable: this._reader,`
48.        `data: this._reader,`
49.        `end: this._reader,`
50.        `unpipe: this._reader,`
51.        `finish: this._writer,`
52.        `drain: this._writer,`
53.      `};`

55.      `this._readableState = this._reader._readableState;`
56.      `this._writableState = this._writer._writableState;`

58.      `this._copy(['write', 'end'], this._writer);`
59.      `this._copy(['read', 'setEncoding', 'pipe', 'unpipe'], this._reader);`

61.      `for (const method of ['on', 'once', 'removeListener', 'removeListeners', 'listeners']) {`
62.        `this[method] = (ev, fn) => EVENTS[ev] ? EVENTS[ev][method](ev, fn) : Duplex.prototype[method].call(this, ev, fn);`
63.      `}`

65.      `const processError = error => this.emit('error', error);`
66.      `this._reader.on('error', processError);`
67.      `this._writer.on('error', processError);`
68.    `}`

70.    `get _reader() { return this.process.stdout; }`
71.    `get _writer() { return this.process.stdin; }`

73.    `_copy(methods, target) {`
74.      `for (const method of methods) {`
75.        `this[method] = target[method].bind(target);`
76.      `}`
77.    `}`

79.    `_destroy(err, cb) {`
80.      `this._cleanup();`
81.      `return cb ? cb(err) : undefined;`
82.    `}`

84.    `_final(cb) {`
85.      `this._cleanup();`
86.      `cb();`
87.    `}`

89.    `_cleanup() {`
90.      `if (this.process) {`
91.        `this.once('error', () => {});`
92.        `this.process.kill('SIGKILL');`
93.        `this.process = null;`
94.      `}`
95.    `}`

98.    `/**`
99.     `* The available FFmpeg information`
100.     `* @typedef {Object} FFmpegInfo`
101.     `* @memberof core`
102.     `* @property {string} command The command used to launch FFmpeg`
103.     `` * @property {string} output The output from running `ffmpeg -h` ``
104.     ``* @property {string} version The version of FFmpeg being used, determined from `output`.``
105.     `*/`

107.    `/**`
108.     `* Finds a suitable FFmpeg command and obtains the debug information from it.`
109.     `* @param {boolean} [force=false] If true, will ignore any cached results and search for the command again`
110.     `* @returns {FFmpegInfo}`
111.     `* @throws Will throw an error if FFmpeg cannot be found.`
112.     `* @example`
113.     `* const ffmpeg = prism.FFmpeg.getInfo();`
114.     `*`
115.     ``* console.log(`Using FFmpeg version ${ffmpeg.version}`);``
116.     `*`
117.     `* if (ffmpeg.output.includes('--enable-libopus')) {`
118.     `*   console.log('libopus is available!');`
119.     `* } else {`
120.     `*   console.log('libopus is unavailable!');`
121.     `* }`
122.     `*/`
123.    `static getInfo(force = false) {`
124.      `if (FFMPEG.command && !force) return FFMPEG;`
125.      `const sources = [() => {`
126.        `const ffmpegStatic = require('ffmpeg-static');`
127.        `return ffmpegStatic.path || ffmpegStatic;`
128.      `}, 'ffmpeg', 'avconv', './ffmpeg', './avconv'];`
129.      `for (let source of sources) {`
130.        `try {`
131.          `if (typeof source === 'function') source = source();`
132.          `const result = ChildProcess.spawnSync(source, ['-h'], { windowsHide: true });`
133.          `if (result.error) throw result.error;`
134.          `Object.assign(FFMPEG, {`
135.            `command: source,`
136.            `output: Buffer.concat(result.output.filter(Boolean)).toString(),`
137.          `});`
138.          `return FFMPEG;`
139.        `} catch (error) {`
140.          `// Do nothing`
141.        `}`
142.      `}`
143.      `throw new Error('FFmpeg/avconv not found!');`
144.    `}`

146.    `/**`
147.     ``* Creates a new FFmpeg instance. If you do not include `-i ...` it will be assumed that `-i -` should be prepended``
148.     `* to the options and that you'll be piping data into the process.`
149.     `* @param {String[]} [args=[]] Arguments to pass to FFmpeg`
150.     `* @returns {ChildProcess}`
151.     `* @private`
152.     `* @throws Will throw an error if FFmpeg cannot be found.`
153.     `*/`
154.    `static create({ args = [], shell = false } = {}) {`
155.      `if (!args.includes('-i')) args.unshift('-i', '-');`
156.      `return ChildProcess.spawn(FFmpeg.getInfo().command, args.concat(['pipe:1']), { windowsHide: true, shell });`
157.    `}`
158.  `}`

160.  `module.exports = FFmpeg;`

---


# JSDoc: Source: opus/index.js

Source: https://amishshah.github.io/prism-media/opus_index.js.html

1.  `/**`
2.   `* Opus features`
3.   `* @namespace opus`
4.   `*/`
5.  `module.exports = {`
6.    `// Encoder and Decoder`
7.    `...require('./Opus'),`
8.    `OggDemuxer: require('./OggDemuxer'),`
9.    `WebmDemuxer: require('./WebmDemuxer'),`
10.  `};`

---


# JSDoc: Source: core/FFmpeg.js

Source: https://amishshah.github.io/prism-media/core_FFmpeg.js.html

1.  `const ChildProcess = require('child_process');`
2.  `const { Duplex } = require('stream');`

4.  `let FFMPEG = {`
5.    `command: null,`
6.    `output: null,`
7.  `};`

9.  `const VERSION_REGEX = /version (.+) Copyright/mi;`

11.  `Object.defineProperty(FFMPEG, 'version', {`
12.    `get() {`
13.      `return VERSION_REGEX.exec(FFMPEG.output)[1];`
14.    `},`
15.    `enumerable: true,`
16.  `});`

18.  `/**`
19.   `* An FFmpeg transform stream that provides an interface to FFmpeg.`
20.   `* @memberof core`
21.   `*/`
22.  `class FFmpeg extends Duplex {`
23.    `/**`
24.     `* Creates a new FFmpeg transform stream`
25.     `* @memberof core`
26.     ``* @param {Object} options Options you would pass to a regular Transform stream, plus an `args` option``
27.     `* @param {Array<string>} options.args Arguments to pass to FFmpeg`
28.     `* @param {boolean} [options.shell=false] Whether FFmpeg should be spawned inside a shell`
29.     `* @example`
30.     ``* // By default, if you don't specify an input (`-i ...`) prism will assume you're piping a stream into it.``
31.     `* const transcoder = new prism.FFmpeg({`
32.     `*  args: [`
33.     `*    '-analyzeduration', '0',`
34.     `*    '-loglevel', '0',`
35.     `*    '-f', 's16le',`
36.     `*    '-ar', '48000',`
37.     `*    '-ac', '2',`
38.     `*  ]`
39.     `* });`
40.     `* const s16le = mp3File.pipe(transcoder);`
41.     `* const opus = s16le.pipe(new prism.opus.Encoder({ rate: 48000, channels: 2, frameSize: 960 }));`
42.     `*/`
43.    `constructor(options = {}) {`
44.      `super();`
45.      `this.process = FFmpeg.create({ shell: false, ...options });`
46.      `const EVENTS = {`
47.        `readable: this._reader,`
48.        `data: this._reader,`
49.        `end: this._reader,`
50.        `unpipe: this._reader,`
51.        `finish: this._writer,`
52.        `drain: this._writer,`
53.      `};`

55.      `this._readableState = this._reader._readableState;`
56.      `this._writableState = this._writer._writableState;`

58.      `this._copy(['write', 'end'], this._writer);`
59.      `this._copy(['read', 'setEncoding', 'pipe', 'unpipe'], this._reader);`

61.      `for (const method of ['on', 'once', 'removeListener', 'removeListeners', 'listeners']) {`
62.        `this[method] = (ev, fn) => EVENTS[ev] ? EVENTS[ev][method](ev, fn) : Duplex.prototype[method].call(this, ev, fn);`
63.      `}`

65.      `const processError = error => this.emit('error', error);`
66.      `this._reader.on('error', processError);`
67.      `this._writer.on('error', processError);`
68.    `}`

70.    `get _reader() { return this.process.stdout; }`
71.    `get _writer() { return this.process.stdin; }`

73.    `_copy(methods, target) {`
74.      `for (const method of methods) {`
75.        `this[method] = target[method].bind(target);`
76.      `}`
77.    `}`

79.    `_destroy(err, cb) {`
80.      `this._cleanup();`
81.      `return cb ? cb(err) : undefined;`
82.    `}`

84.    `_final(cb) {`
85.      `this._cleanup();`
86.      `cb();`
87.    `}`

89.    `_cleanup() {`
90.      `if (this.process) {`
91.        `this.once('error', () => {});`
92.        `this.process.kill('SIGKILL');`
93.        `this.process = null;`
94.      `}`
95.    `}`

98.    `/**`
99.     `* The available FFmpeg information`
100.     `* @typedef {Object} FFmpegInfo`
101.     `* @memberof core`
102.     `* @property {string} command The command used to launch FFmpeg`
103.     `` * @property {string} output The output from running `ffmpeg -h` ``
104.     ``* @property {string} version The version of FFmpeg being used, determined from `output`.``
105.     `*/`

107.    `/**`
108.     `* Finds a suitable FFmpeg command and obtains the debug information from it.`
109.     `* @param {boolean} [force=false] If true, will ignore any cached results and search for the command again`
110.     `* @returns {FFmpegInfo}`
111.     `* @throws Will throw an error if FFmpeg cannot be found.`
112.     `* @example`
113.     `* const ffmpeg = prism.FFmpeg.getInfo();`
114.     `*`
115.     ``* console.log(`Using FFmpeg version ${ffmpeg.version}`);``
116.     `*`
117.     `* if (ffmpeg.output.includes('--enable-libopus')) {`
118.     `*   console.log('libopus is available!');`
119.     `* } else {`
120.     `*   console.log('libopus is unavailable!');`
121.     `* }`
122.     `*/`
123.    `static getInfo(force = false) {`
124.      `if (FFMPEG.command && !force) return FFMPEG;`
125.      `const sources = [() => {`
126.        `const ffmpegStatic = require('ffmpeg-static');`
127.        `return ffmpegStatic.path || ffmpegStatic;`
128.      `}, 'ffmpeg', 'avconv', './ffmpeg', './avconv'];`
129.      `for (let source of sources) {`
130.        `try {`
131.          `if (typeof source === 'function') source = source();`
132.          `const result = ChildProcess.spawnSync(source, ['-h'], { windowsHide: true });`
133.          `if (result.error) throw result.error;`
134.          `Object.assign(FFMPEG, {`
135.            `command: source,`
136.            `output: Buffer.concat(result.output.filter(Boolean)).toString(),`
137.          `});`
138.          `return FFMPEG;`
139.        `} catch (error) {`
140.          `// Do nothing`
141.        `}`
142.      `}`
143.      `throw new Error('FFmpeg/avconv not found!');`
144.    `}`

146.    `/**`
147.     ``* Creates a new FFmpeg instance. If you do not include `-i ...` it will be assumed that `-i -` should be prepended``
148.     `* to the options and that you'll be piping data into the process.`
149.     `* @param {String[]} [args=[]] Arguments to pass to FFmpeg`
150.     `* @returns {ChildProcess}`
151.     `* @private`
152.     `* @throws Will throw an error if FFmpeg cannot be found.`
153.     `*/`
154.    `static create({ args = [], shell = false } = {}) {`
155.      `if (!args.includes('-i')) args.unshift('-i', '-');`
156.      `return ChildProcess.spawn(FFmpeg.getInfo().command, args.concat(['pipe:1']), { windowsHide: true, shell });`
157.    `}`
158.  `}`

160.  `module.exports = FFmpeg;`

---


# JSDoc: Source: core/VolumeTransformer.js

Source: https://amishshah.github.io/prism-media/core_VolumeTransformer.js.html

1.  `// Based on discord.js' old volume system`

3.  `const { Transform } = require('stream');`

5.  `/**`
6.   `* Transforms a stream of PCM volume.`
7.   `* @memberof core`
8.   `* @extends TransformStream`
9.   `*/`
10.  `class VolumeTransformer extends Transform {`
11.    `/**`
12.     `* @memberof core`
13.     `* @param {Object} options Any optional TransformStream options plus some extra:`
14.     `* @param {string} options.type The type of transformer: s16le (signed 16-bit little-endian), s16be, s32le, s32be`
15.     `* @param {number} [options.volume=1] The output volume of the stream`
16.     `* @example`
17.     `* // Half the volume of a signed 16-bit little-endian PCM stream`
18.     `* input`
19.     `*  .pipe(new prism.VolumeTransformer({ type: 's16le', volume: 0.5 }))`
20.     `*  .pipe(writeStream);`
21.     `*/`
22.    `constructor(options = {}) {`
23.      `super(options);`
24.      `switch (options.type) {`
25.        `case 's16le':`
26.          `this._readInt = (buffer, index) => buffer.readInt16LE(index);`
27.          `this._writeInt = (buffer, int, index) => buffer.writeInt16LE(int, index);`
28.          `this._bits = 16;`
29.          `break;`
30.        `case 's16be':`
31.          `this._readInt = (buffer, index) => buffer.readInt16BE(index);`
32.          `this._writeInt = (buffer, int, index) => buffer.writeInt16BE(int, index);`
33.          `this._bits = 16;`
34.          `break;`
35.        `case 's32le':`
36.          `this._readInt = (buffer, index) => buffer.readInt32LE(index);`
37.          `this._writeInt = (buffer, int, index) => buffer.writeInt32LE(int, index);`
38.          `this._bits = 32;`
39.          `break;`
40.        `case 's32be':`
41.          `this._readInt = (buffer, index) => buffer.readInt32BE(index);`
42.          `this._writeInt = (buffer, int, index) => buffer.writeInt32BE(int, index);`
43.          `this._bits = 32;`
44.          `break;`
45.        `default:`
46.          `throw new Error('VolumeTransformer type should be one of s16le, s16be, s32le, s32be');`
47.      `}`
48.      `this._bytes = this._bits / 8;`
49.      `this._extremum = Math.pow(2, this._bits - 1);`
50.      `this.volume = typeof options.volume === 'undefined' ? 1 : options.volume;`
51.      `this._chunk = Buffer.alloc(0);`
52.    `}`

54.    `_readInt(buffer, index) { return index; }`
55.    `_writeInt(buffer, int, index) { return index; }`

57.    `_transform(chunk, encoding, done) {`
58.      `// If the volume is 1, act like a passthrough stream`
59.      `if (this.volume === 1) {`
60.        `this.push(chunk);`
61.        `return done();`
62.      `}`

64.      `const { _bytes, _extremum } = this;`

66.      `chunk = this._chunk = Buffer.concat([this._chunk, chunk]);`
67.      `if (chunk.length < _bytes) return done();`

69.      `const complete = Math.floor(chunk.length / _bytes) * _bytes;`

71.      `for (let i = 0; i < complete; i += _bytes) {`
72.        `const int = Math.min(_extremum - 1, Math.max(-_extremum, Math.floor(this.volume * this._readInt(chunk, i))));`
73.        `this._writeInt(chunk, int, i);`
74.      `}`

76.      `this._chunk = chunk.slice(complete);`
77.      `this.push(chunk.slice(0, complete));`
78.      `return done();`
79.    `}`

81.    `_destroy(err, cb) {`
82.      `super._destroy(err, cb);`
83.      `this._chunk = null;`
84.    `}`

86.    `/**`
87.     `* Sets the volume relative to the input stream - i.e. 1 is normal, 0.5 is half, 2 is double.`
88.     `* @param {number} volume The volume that you want to set`
89.     `*/`
90.    `setVolume(volume) {`
91.      `this.volume = volume;`
92.    `}`

94.    `/**`
95.     `* Sets the volume in decibels.`
96.     `* @param {number} db The decibels`
97.     `*/`
98.    `setVolumeDecibels(db) {`
99.      `this.setVolume(Math.pow(10, db / 20));`
100.    `}`

102.    `/**`
103.     `* Sets the volume so that a perceived value of 0.5 is half the perceived volume etc.`
104.     `* @param {number} value The value for the volume`
105.     `*/`
106.    `setVolumeLogarithmic(value) {`
107.      `this.setVolume(Math.pow(value, 1.660964));`
108.    `}`

110.    `/**`
111.     `* The current volume of the stream in decibels`
112.     `* @readonly`
113.     `* @type {number}`
114.     `*/`
115.    `get volumeDecibels() {`
116.      `return Math.log10(this.volume) * 20;`
117.    `}`
118.    `/**`
119.     `* The current volume of the stream from a logarithmic scale`
120.     `* @readonly`
121.     `* @type {number}`
122.     `*/`
123.    `get volumeLogarithmic() {`
124.      `return Math.pow(this.volume, 1 / 1.660964);`
125.    `}`
126.  `}`

128.  `module.exports = VolumeTransformer;`

---


# JSDoc: Source: core/WebmBase.js

Source: https://amishshah.github.io/prism-media/core_WebmBase.js.html

1.  `const { Transform } = require('stream');`

3.  `/**`
4.   `* Base class for WebmOpusDemuxer and WebmVorbisDemuxer.`
5.   `* **You shouldn't directly instantiate this class, use the opus.WebmDemuxer and vorbis.WebmDemuxer`
6.   `* implementations instead!**`
7.   `* @memberof core`
8.   `* @protected`
9.   `* @extends TransformStream`
10.   `*/`
11.  `class WebmBaseDemuxer extends Transform {`
12.    `/**`
13.     `* Creates a new Webm demuxer.`
14.     `* @private`
15.     `* @memberof core`
16.     `* @param {Object} [options] options that you would pass to a regular Transform stream.`
17.     `*/`
18.    `constructor(options = {}) {`
19.      `super(Object.assign({ readableObjectMode: true }, options));`
20.      `this._remainder = null;`
21.      `this._length = 0;`
22.      `this._count = 0;`
23.      `this._skipUntil = null;`
24.      `this._track = null;`
25.      `this._incompleteTrack = {};`
26.      `this._ebmlFound = false;`
27.    `}`

29.    `_transform(chunk, encoding, done) {`
30.      `this._length += chunk.length;`
31.      `if (this._remainder) {`
32.        `chunk = Buffer.concat([this._remainder, chunk]);`
33.        `this._remainder = null;`
34.      `}`
35.      `let offset = 0;`
36.      `if (this._skipUntil && this._length > this._skipUntil) {`
37.        `offset = this._skipUntil - this._count;`
38.        `this._skipUntil = null;`
39.      `} else if (this._skipUntil) {`
40.        `this._count += chunk.length;`
41.        `done();`
42.        `return;`
43.      `}`
44.      `let result;`
45.      `while (result !== TOO_SHORT) {`
46.        `try {`
47.          `result = this._readTag(chunk, offset);`
48.        `} catch (error) {`
49.          `done(error);`
50.          `return;`
51.        `}`
52.        `if (result === TOO_SHORT) break;`
53.        `if (result._skipUntil) {`
54.          `this._skipUntil = result._skipUntil;`
55.          `break;`
56.        `}`
57.        `if (result.offset) offset = result.offset;`
58.        `else break;`
59.      `}`
60.      `this._count += offset;`
61.      `this._remainder = chunk.slice(offset);`
62.      `done();`
63.      `return;`
64.    `}`

66.    `/**`
67.     `* Reads an EBML ID from a buffer.`
68.     `* @private`
69.     `* @param {Buffer} chunk the buffer to read from.`
70.     `* @param {number} offset the offset in the buffer.`
71.     ``* @returns {Object|Symbol} contains an `id` property (buffer) and the new `offset` (number).``
72.     `* Returns the TOO_SHORT symbol if the data wasn't big enough to facilitate the request.`
73.     `*/`
74.    `_readEBMLId(chunk, offset) {`
75.      `const idLength = vintLength(chunk, offset);`
76.      `if (idLength === TOO_SHORT) return TOO_SHORT;`
77.      `return {`
78.        `id: chunk.slice(offset, offset + idLength),`
79.        `offset: offset + idLength,`
80.      `};`
81.    `}`

83.    `/**`
84.     `* Reads a size variable-integer to calculate the length of the data of a tag.`
85.     `* @private`
86.     `* @param {Buffer} chunk the buffer to read from.`
87.     `* @param {number} offset the offset in the buffer.`
88.     ``* @returns {Object|Symbol} contains property `offset` (number), `dataLength` (number) and `sizeLength` (number).``
89.     `* Returns the TOO_SHORT symbol if the data wasn't big enough to facilitate the request.`
90.     `*/`
91.    `_readTagDataSize(chunk, offset) {`
92.      `const sizeLength = vintLength(chunk, offset);`
93.      `if (sizeLength === TOO_SHORT) return TOO_SHORT;`
94.      `const dataLength = expandVint(chunk, offset, offset + sizeLength);`
95.      `return { offset: offset + sizeLength, dataLength, sizeLength };`
96.    `}`

98.    `/**`
99.     `* Takes a buffer and attempts to read and process a tag.`
100.     `* @private`
101.     `* @param {Buffer} chunk the buffer to read from.`
102.     `* @param {number} offset the offset in the buffer.`
103.     ``* @returns {Object|Symbol} contains the new `offset` (number) and optionally the `_skipUntil` property,``
104.     `* indicating that the stream should ignore any data until a certain length is reached.`
105.     `* Returns the TOO_SHORT symbol if the data wasn't big enough to facilitate the request.`
106.     `*/`
107.    `_readTag(chunk, offset) {`
108.      `const idData = this._readEBMLId(chunk, offset);`
109.      `if (idData === TOO_SHORT) return TOO_SHORT;`
110.      `const ebmlID = idData.id.toString('hex');`
111.      `if (!this._ebmlFound) {`
112.        `if (ebmlID === '1a45dfa3') this._ebmlFound = true;`
113.        `else throw Error('Did not find the EBML tag at the start of the stream');`
114.      `}`
115.      `offset = idData.offset;`
116.      `const sizeData = this._readTagDataSize(chunk, offset);`
117.      `if (sizeData === TOO_SHORT) return TOO_SHORT;`
118.      `const { dataLength } = sizeData;`
119.      `offset = sizeData.offset;`
120.      `// If this tag isn't useful, tell the stream to stop processing data until the tag ends`
121.      `if (typeof TAGS[ebmlID] === 'undefined') {`
122.        `if (chunk.length > offset + dataLength) {`
123.          `return { offset: offset + dataLength };`
124.        `}`
125.        `return { offset, _skipUntil: this._count + offset + dataLength };`
126.      `}`

128.      `const tagHasChildren = TAGS[ebmlID];`
129.      `if (tagHasChildren) {`
130.        `return { offset };`
131.      `}`

133.      `if (offset + dataLength > chunk.length) return TOO_SHORT;`
134.      `const data = chunk.slice(offset, offset + dataLength);`
135.      `if (!this._track) {`
136.        `if (ebmlID === 'ae') this._incompleteTrack = {};`
137.        `if (ebmlID === 'd7') this._incompleteTrack.number = data[0];`
138.        `if (ebmlID === '83') this._incompleteTrack.type = data[0];`
139.        `if (this._incompleteTrack.type === 2 && typeof this._incompleteTrack.number !== 'undefined') {`
140.          `this._track = this._incompleteTrack;`
141.        `}`
142.      `}`
143.      `if (ebmlID === '63a2') {`
144.        `this._checkHead(data);`
145.        `this.emit('head', data);`
146.      `} else if (ebmlID === 'a3') {`
147.        `if (!this._track) throw Error('No audio track in this webm!');`
148.        `if ((data[0] & 0xF) === this._track.number) {`
149.          `this.push(data.slice(4));`
150.        `}`
151.      `}`
152.      `return { offset: offset + dataLength };`
153.    `}`

155.    `_destroy(err, cb) {`
156.      `this._cleanup();`
157.      `return cb ? cb(err) : undefined;`
158.    `}`

160.    `_final(cb) {`
161.      `this._cleanup();`
162.      `cb();`
163.    `}`

165.    `/**`
166.     `* Cleans up the demuxer when it is no longer required.`
167.     `* @private`
168.     `*/`
169.    `_cleanup() {`
170.      `this._remainder = null;`
171.      `this._incompleteTrack = {};`
172.    `}`
173.  `}`

175.  `/**`
176.   `* A symbol that is returned by some functions that indicates the buffer it has been provided is not large enough`
177.   `* to facilitate a request.`
178.   `* @name WebmBaseDemuxer#TOO_SHORT`
179.   `* @memberof core`
180.   `* @private`
181.   `* @type {Symbol}`
182.   `*/`
183.  `const TOO_SHORT = WebmBaseDemuxer.TOO_SHORT = Symbol('TOO_SHORT');`

185.  `/**`
186.   `* A map that takes a value of an EBML ID in hex string form, with the value being a boolean that indicates whether`
187.   `* this tag has children.`
188.   `* @name WebmBaseDemuxer#TAGS`
189.   `* @memberof core`
190.   `* @private`
191.   `* @type {Object}`
192.   `*/`
193.  `const TAGS = WebmBaseDemuxer.TAGS = { // value is true if the element has children`
194.    `'1a45dfa3': true, // EBML`
195.    `'18538067': true, // Segment`
196.    `'1f43b675': true, // Cluster`
197.    `'1654ae6b': true, // Tracks`
198.    `'ae': true, // TrackEntry`
199.    `'d7': false, // TrackNumber`
200.    `'83': false, // TrackType`
201.    `'a3': false, // SimpleBlock`
202.    `'63a2': false,`
203.  `};`

205.  `module.exports = WebmBaseDemuxer;`

207.  `function vintLength(buffer, index) {`
208.    `if (index < 0 || index > buffer.length - 1) {`
209.      `return TOO_SHORT;`
210.    `}`
211.    `let i = 0;`
212.    `for (; i < 8; i++) if ((1 << (7 - i)) & buffer[index]) break;`
213.    `i++;`
214.    `if (index + i > buffer.length) {`
215.      `return TOO_SHORT;`
216.    `}`
217.    `return i;`
218.  `}`

220.  `function expandVint(buffer, start, end) {`
221.    `const length = vintLength(buffer, start);`
222.    `if (end > buffer.length || length === TOO_SHORT) return TOO_SHORT;`
223.    `let mask = (1 << (8 - length)) - 1;`
224.    `let value = buffer[start] & mask;`
225.    `for (let i = start + 1; i < end; i++) {`
226.      `value = (value << 8) + buffer[i];`
227.    `}`
228.    `return value;`
229.  `}`

---


# JSDoc: Source: opus/Opus.js

Source: https://amishshah.github.io/prism-media/opus_Opus.js.html

1.  `// Partly based on https://github.com/Rantanen/node-opus/blob/master/lib/Encoder.js`

3.  `const { Transform } = require('stream');`
4.  `const loader = require('../util/loader');`

6.  `const CTL = {`
7.    `BITRATE: 4002,`
8.    `FEC: 4012,`
9.    `PLP: 4014,`
10.  `};`

12.  `let Opus = {};`

14.  `function loadOpus(refresh = false) {`
15.    `if (Opus.Encoder && !refresh) return Opus;`

17.    `Opus = loader.require([`
18.      `['@discordjs/opus', opus => ({ Encoder: opus.OpusEncoder })],`
19.      `['node-opus', opus => ({ Encoder: opus.OpusEncoder })],`
20.      `['opusscript', opus => ({ Encoder: opus })],`
21.    `]);`
22.    `return Opus;`
23.  `}`

25.  `const charCode = x => x.charCodeAt(0);`
26.  `const OPUS_HEAD = Buffer.from([...'OpusHead'].map(charCode));`
27.  `const OPUS_TAGS = Buffer.from([...'OpusTags'].map(charCode));`

29.  `// frame size = (channels * rate * frame_duration) / 1000`

31.  `/**`
32.   `* Takes a stream of Opus data and outputs a stream of PCM data, or the inverse.`
33.   `* **You shouldn't directly instantiate this class, see opus.Encoder and opus.Decoder instead!**`
34.   `* @memberof opus`
35.   `* @extends TransformStream`
36.   `* @protected`
37.   `*/`
38.  `class OpusStream extends Transform {`
39.    `/**`
40.     `* Creates a new Opus transformer.`
41.     `* @private`
42.     `* @memberof opus`
43.     `* @param {Object} [options] options that you would pass to a regular Transform stream`
44.     `*/`
45.    `constructor(options = {}) {`
46.      `if (!loadOpus().Encoder) {`
47.        `throw Error('Could not find an Opus module! Please install @discordjs/opus, node-opus, or opusscript.');`
48.      `}`
49.      `super(Object.assign({ readableObjectMode: true }, options));`
50.      `if (Opus.name === 'opusscript') {`
51.        `options.application = Opus.Encoder.Application[options.application];`
52.      `}`
53.      `this.encoder = new Opus.Encoder(options.rate, options.channels, options.application);`

55.      `this._options = options;`
56.      `this._required = this._options.frameSize * this._options.channels * 2;`
57.    `}`

59.    `_encode(buffer) {`
60.      `return this.encoder.encode(buffer, this._options.frameSize);`
61.    `}`

63.    `_decode(buffer) {`
64.      `return this.encoder.decode(buffer, Opus.name === 'opusscript' ? null : this._options.frameSize);`
65.    `}`

67.    `/**`
68.     ``* Returns the Opus module being used - `opusscript`, `node-opus`, or `@discordjs/opus`.``
69.     `* @type {string}`
70.     `* @readonly`
71.     `* @example`
72.     ``* console.log(`Using Opus module ${prism.opus.Encoder.type}`);``
73.     `*/`
74.    `static get type() {`
75.      `return Opus.name;`
76.    `}`

78.    `/**`
79.     `* Sets the bitrate of the stream.`
80.     `* @param {number} bitrate the bitrate to use use, e.g. 48000`
81.     `* @public`
82.     `*/`
83.    `setBitrate(bitrate) {`
84.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
85.        `.apply(this.encoder, [CTL.BITRATE, Math.min(128e3, Math.max(16e3, bitrate))]);`
86.    `}`

88.    `/**`
89.     `* Enables or disables forward error correction.`
90.     `* @param {boolean} enabled whether or not to enable FEC.`
91.     `* @public`
92.     `*/`
93.    `setFEC(enabled) {`
94.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
95.        `.apply(this.encoder, [CTL.FEC, enabled ? 1 : 0]);`
96.    `}`

98.    `/**`
99.     `* Sets the expected packet loss over network transmission.`
100.     `* @param {number} [percentage] a percentage (represented between 0 and 1)`
101.     `*/`
102.    `setPLP(percentage) {`
103.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
104.        `.apply(this.encoder, [CTL.PLP, Math.min(100, Math.max(0, percentage * 100))]);`
105.    `}`

107.    `_final(cb) {`
108.      `this._cleanup();`
109.      `cb();`
110.    `}`

112.    `_destroy(err, cb) {`
113.      `this._cleanup();`
114.      `return cb ? cb(err) : undefined;`
115.    `}`

117.    `/**`
118.     `* Cleans up the Opus stream when it is no longer needed`
119.     `* @private`
120.     `*/`
121.    `_cleanup() {`
122.      `if (Opus.name === 'opusscript' && this.encoder) this.encoder.delete();`
123.      `this.encoder = null;`
124.    `}`
125.  `}`

127.  `/**`
128.   `* An Opus encoder stream.`
129.   `*`
130.   `* Outputs opus packets in [object mode.](https://nodejs.org/api/stream.html#stream_object_mode)`
131.   `* @extends opus.OpusStream`
132.   `* @memberof opus`
133.   `* @example`
134.   `* const encoder = new prism.opus.Encoder({ frameSize: 960, channels: 2, rate: 48000 });`
135.   `* pcmAudio.pipe(encoder);`
136.   `* // encoder will now output Opus-encoded audio packets`
137.   `*/`
138.  `class Encoder extends OpusStream {`
139.    `/**`
140.     `* Creates a new Opus encoder stream.`
141.     `* @memberof opus`
142.     `* @param {Object} options options that you would pass to a regular OpusStream, plus a few more:`
143.     `* @param {number} options.frameSize the frame size in bytes to use (e.g. 960 for stereo audio at 48KHz with a frame`
144.     `* duration of 20ms)`
145.     `* @param {number} options.channels the number of channels to use`
146.     `* @param {number} options.rate the sampling rate in Hz`
147.     `*/`
148.    `constructor(options) {`
149.      `super(options);`
150.      `this._buffer = Buffer.alloc(0);`
151.    `}`

153.    `_transform(chunk, encoding, done) {`
154.      `this._buffer = Buffer.concat([this._buffer, chunk]);`
155.      `let n = 0;`
156.      `while (this._buffer.length >= this._required * (n + 1)) {`
157.        `const buf = this._encode(this._buffer.slice(n * this._required, (n + 1) * this._required));`
158.        `this.push(buf);`
159.        `n++;`
160.      `}`
161.      `if (n > 0) this._buffer = this._buffer.slice(n * this._required);`
162.      `return done();`
163.    `}`

165.    `_destroy(err, cb) {`
166.      `super._destroy(err, cb);`
167.      `this._buffer = null;`
168.    `}`
169.  `}`

171.  `/**`
172.   `* An Opus decoder stream.`
173.   `*`
174.   `* Note that any stream you pipe into this must be in`
175.   `* [object mode](https://nodejs.org/api/stream.html#stream_object_mode) and should output Opus packets.`
176.   `* @extends opus.OpusStream`
177.   `* @memberof opus`
178.   `* @example`
179.   `* const decoder = new prism.opus.Decoder({ frameSize: 960, channels: 2, rate: 48000 });`
180.   `* input.pipe(decoder);`
181.   `* // decoder will now output PCM audio`
182.   `*/`
183.  `class Decoder extends OpusStream {`
184.    `_transform(chunk, encoding, done) {`
185.      `const signature = chunk.slice(0, 8);`
186.      `if (chunk.length >= 8 && signature.equals(OPUS_HEAD)) {`
187.        `this.emit('format', {`
188.          `channels: this._options.channels,`
189.          `sampleRate: this._options.rate,`
190.          `bitDepth: 16,`
191.          `float: false,`
192.          `signed: true,`
193.          `version: chunk.readUInt8(8),`
194.          `preSkip: chunk.readUInt16LE(10),`
195.          `gain: chunk.readUInt16LE(16),`
196.        `});`
197.        `return done();`
198.      `}`
199.      `if (chunk.length >= 8 && signature.equals(OPUS_TAGS)) {`
200.        `this.emit('tags', chunk);`
201.        `return done();`
202.      `}`
203.      `try {`
204.        `this.push(this._decode(chunk));`
205.      `} catch (e) {`
206.        `return done(e);`
207.      `}`
208.      `return done();`
209.    `}`
210.  `}`

212.  `module.exports = { Decoder, Encoder };`

---


# JSDoc: Source: opus/Opus.js

Source: https://amishshah.github.io/prism-media/opus_Opus.js.html

1.  `// Partly based on https://github.com/Rantanen/node-opus/blob/master/lib/Encoder.js`

3.  `const { Transform } = require('stream');`
4.  `const loader = require('../util/loader');`

6.  `const CTL = {`
7.    `BITRATE: 4002,`
8.    `FEC: 4012,`
9.    `PLP: 4014,`
10.  `};`

12.  `let Opus = {};`

14.  `function loadOpus(refresh = false) {`
15.    `if (Opus.Encoder && !refresh) return Opus;`

17.    `Opus = loader.require([`
18.      `['@discordjs/opus', opus => ({ Encoder: opus.OpusEncoder })],`
19.      `['node-opus', opus => ({ Encoder: opus.OpusEncoder })],`
20.      `['opusscript', opus => ({ Encoder: opus })],`
21.    `]);`
22.    `return Opus;`
23.  `}`

25.  `const charCode = x => x.charCodeAt(0);`
26.  `const OPUS_HEAD = Buffer.from([...'OpusHead'].map(charCode));`
27.  `const OPUS_TAGS = Buffer.from([...'OpusTags'].map(charCode));`

29.  `// frame size = (channels * rate * frame_duration) / 1000`

31.  `/**`
32.   `* Takes a stream of Opus data and outputs a stream of PCM data, or the inverse.`
33.   `* **You shouldn't directly instantiate this class, see opus.Encoder and opus.Decoder instead!**`
34.   `* @memberof opus`
35.   `* @extends TransformStream`
36.   `* @protected`
37.   `*/`
38.  `class OpusStream extends Transform {`
39.    `/**`
40.     `* Creates a new Opus transformer.`
41.     `* @private`
42.     `* @memberof opus`
43.     `* @param {Object} [options] options that you would pass to a regular Transform stream`
44.     `*/`
45.    `constructor(options = {}) {`
46.      `if (!loadOpus().Encoder) {`
47.        `throw Error('Could not find an Opus module! Please install @discordjs/opus, node-opus, or opusscript.');`
48.      `}`
49.      `super(Object.assign({ readableObjectMode: true }, options));`
50.      `if (Opus.name === 'opusscript') {`
51.        `options.application = Opus.Encoder.Application[options.application];`
52.      `}`
53.      `this.encoder = new Opus.Encoder(options.rate, options.channels, options.application);`

55.      `this._options = options;`
56.      `this._required = this._options.frameSize * this._options.channels * 2;`
57.    `}`

59.    `_encode(buffer) {`
60.      `return this.encoder.encode(buffer, this._options.frameSize);`
61.    `}`

63.    `_decode(buffer) {`
64.      `return this.encoder.decode(buffer, Opus.name === 'opusscript' ? null : this._options.frameSize);`
65.    `}`

67.    `/**`
68.     ``* Returns the Opus module being used - `opusscript`, `node-opus`, or `@discordjs/opus`.``
69.     `* @type {string}`
70.     `* @readonly`
71.     `* @example`
72.     ``* console.log(`Using Opus module ${prism.opus.Encoder.type}`);``
73.     `*/`
74.    `static get type() {`
75.      `return Opus.name;`
76.    `}`

78.    `/**`
79.     `* Sets the bitrate of the stream.`
80.     `* @param {number} bitrate the bitrate to use use, e.g. 48000`
81.     `* @public`
82.     `*/`
83.    `setBitrate(bitrate) {`
84.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
85.        `.apply(this.encoder, [CTL.BITRATE, Math.min(128e3, Math.max(16e3, bitrate))]);`
86.    `}`

88.    `/**`
89.     `* Enables or disables forward error correction.`
90.     `* @param {boolean} enabled whether or not to enable FEC.`
91.     `* @public`
92.     `*/`
93.    `setFEC(enabled) {`
94.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
95.        `.apply(this.encoder, [CTL.FEC, enabled ? 1 : 0]);`
96.    `}`

98.    `/**`
99.     `* Sets the expected packet loss over network transmission.`
100.     `* @param {number} [percentage] a percentage (represented between 0 and 1)`
101.     `*/`
102.    `setPLP(percentage) {`
103.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
104.        `.apply(this.encoder, [CTL.PLP, Math.min(100, Math.max(0, percentage * 100))]);`
105.    `}`

107.    `_final(cb) {`
108.      `this._cleanup();`
109.      `cb();`
110.    `}`

112.    `_destroy(err, cb) {`
113.      `this._cleanup();`
114.      `return cb ? cb(err) : undefined;`
115.    `}`

117.    `/**`
118.     `* Cleans up the Opus stream when it is no longer needed`
119.     `* @private`
120.     `*/`
121.    `_cleanup() {`
122.      `if (Opus.name === 'opusscript' && this.encoder) this.encoder.delete();`
123.      `this.encoder = null;`
124.    `}`
125.  `}`

127.  `/**`
128.   `* An Opus encoder stream.`
129.   `*`
130.   `* Outputs opus packets in [object mode.](https://nodejs.org/api/stream.html#stream_object_mode)`
131.   `* @extends opus.OpusStream`
132.   `* @memberof opus`
133.   `* @example`
134.   `* const encoder = new prism.opus.Encoder({ frameSize: 960, channels: 2, rate: 48000 });`
135.   `* pcmAudio.pipe(encoder);`
136.   `* // encoder will now output Opus-encoded audio packets`
137.   `*/`
138.  `class Encoder extends OpusStream {`
139.    `/**`
140.     `* Creates a new Opus encoder stream.`
141.     `* @memberof opus`
142.     `* @param {Object} options options that you would pass to a regular OpusStream, plus a few more:`
143.     `* @param {number} options.frameSize the frame size in bytes to use (e.g. 960 for stereo audio at 48KHz with a frame`
144.     `* duration of 20ms)`
145.     `* @param {number} options.channels the number of channels to use`
146.     `* @param {number} options.rate the sampling rate in Hz`
147.     `*/`
148.    `constructor(options) {`
149.      `super(options);`
150.      `this._buffer = Buffer.alloc(0);`
151.    `}`

153.    `_transform(chunk, encoding, done) {`
154.      `this._buffer = Buffer.concat([this._buffer, chunk]);`
155.      `let n = 0;`
156.      `while (this._buffer.length >= this._required * (n + 1)) {`
157.        `const buf = this._encode(this._buffer.slice(n * this._required, (n + 1) * this._required));`
158.        `this.push(buf);`
159.        `n++;`
160.      `}`
161.      `if (n > 0) this._buffer = this._buffer.slice(n * this._required);`
162.      `return done();`
163.    `}`

165.    `_destroy(err, cb) {`
166.      `super._destroy(err, cb);`
167.      `this._buffer = null;`
168.    `}`
169.  `}`

171.  `/**`
172.   `* An Opus decoder stream.`
173.   `*`
174.   `* Note that any stream you pipe into this must be in`
175.   `* [object mode](https://nodejs.org/api/stream.html#stream_object_mode) and should output Opus packets.`
176.   `* @extends opus.OpusStream`
177.   `* @memberof opus`
178.   `* @example`
179.   `* const decoder = new prism.opus.Decoder({ frameSize: 960, channels: 2, rate: 48000 });`
180.   `* input.pipe(decoder);`
181.   `* // decoder will now output PCM audio`
182.   `*/`
183.  `class Decoder extends OpusStream {`
184.    `_transform(chunk, encoding, done) {`
185.      `const signature = chunk.slice(0, 8);`
186.      `if (chunk.length >= 8 && signature.equals(OPUS_HEAD)) {`
187.        `this.emit('format', {`
188.          `channels: this._options.channels,`
189.          `sampleRate: this._options.rate,`
190.          `bitDepth: 16,`
191.          `float: false,`
192.          `signed: true,`
193.          `version: chunk.readUInt8(8),`
194.          `preSkip: chunk.readUInt16LE(10),`
195.          `gain: chunk.readUInt16LE(16),`
196.        `});`
197.        `return done();`
198.      `}`
199.      `if (chunk.length >= 8 && signature.equals(OPUS_TAGS)) {`
200.        `this.emit('tags', chunk);`
201.        `return done();`
202.      `}`
203.      `try {`
204.        `this.push(this._decode(chunk));`
205.      `} catch (e) {`
206.        `return done(e);`
207.      `}`
208.      `return done();`
209.    `}`
210.  `}`

212.  `module.exports = { Decoder, Encoder };`

---


# JSDoc: Source: opus/OggDemuxer.js

Source: https://amishshah.github.io/prism-media/opus_OggDemuxer.js.html

1.  `const { Transform } = require('stream');`

3.  `const OGG_PAGE_HEADER_SIZE = 26;`
4.  `const STREAM_STRUCTURE_VERSION = 0;`

6.  `const charCode = x => x.charCodeAt(0);`
7.  `const OGGS_HEADER = Buffer.from([...'OggS'].map(charCode));`
8.  `const OPUS_HEAD = Buffer.from([...'OpusHead'].map(charCode));`
9.  `const OPUS_TAGS = Buffer.from([...'OpusTags'].map(charCode));`

11.  `/**`
12.   `* Demuxes an Ogg stream (containing Opus audio) to output an Opus stream.`
13.   `* @extends {TransformStream}`
14.   `* @memberof opus`
15.   `*/`
16.  `class OggDemuxer extends Transform {`
17.    `/**`
18.     `* Creates a new OggOpus demuxer.`
19.     `* @param {Object} [options] options that you would pass to a regular Transform stream.`
20.     `* @memberof opus`
21.     `*/`
22.    `constructor(options = {}) {`
23.      `super(Object.assign({ readableObjectMode: true }, options));`
24.      `this._remainder = null;`
25.      `this._head = null;`
26.      `this._bitstream = null;`
27.    `}`

29.    `_transform(chunk, encoding, done) {`
30.      `if (this._remainder) {`
31.        `chunk = Buffer.concat([this._remainder, chunk]);`
32.        `this._remainder = null;`
33.      `}`

35.      `try {`
36.        `while (chunk) {`
37.          `const result = this._readPage(chunk);`
38.          `if (result) chunk = result;`
39.          `else break;`
40.        `}`
41.      `} catch (error) {`
42.        `done(error);`
43.        `return;`
44.      `}`
45.      `this._remainder = chunk;`
46.      `done();`
47.    `}`

49.    `/**`
50.     `* Reads a page from a buffer`
51.     `* @private`
52.     `* @param {Buffer} chunk the chunk containing the page`
53.     `* @returns {boolean|Buffer} if a buffer, it will be a slice of the excess data of the original, otherwise it will be`
54.     `* false and would indicate that there is not enough data to go ahead with reading this page.`
55.     `*/`
56.    `_readPage(chunk) {`
57.      `if (chunk.length < OGG_PAGE_HEADER_SIZE) {`
58.        `return false;`
59.      `}`
60.      `if (!chunk.slice(0, 4).equals(OGGS_HEADER)) {`
61.        ``throw Error(`capture_pattern is not ${OGGS_HEADER}`);``
62.      `}`
63.      `if (chunk.readUInt8(4) !== STREAM_STRUCTURE_VERSION) {`
64.        ``throw Error(`stream_structure_version is not ${STREAM_STRUCTURE_VERSION}`);``
65.      `}`

67.      `if (chunk.length < 27) return false;`
68.      `const pageSegments = chunk.readUInt8(26);`
69.      `if (chunk.length < 27 + pageSegments) return false;`
70.      `const table = chunk.slice(27, 27 + pageSegments);`
71.      `const bitstream = chunk.readUInt32BE(14);`

73.      `let sizes = [], totalSize = 0;`

75.      `for (let i = 0; i < pageSegments;) {`
76.        `let size = 0, x = 255;`
77.        `while (x === 255) {`
78.          `if (i >= table.length) return false;`
79.          `x = table.readUInt8(i);`
80.          `i++;`
81.          `size += x;`
82.        `}`
83.        `sizes.push(size);`
84.        `totalSize += size;`
85.      `}`

87.      `if (chunk.length < 27 + pageSegments + totalSize) return false;`

89.      `let start = 27 + pageSegments;`
90.      `for (const size of sizes) {`
91.        `const segment = chunk.slice(start, start + size);`
92.        `const header = segment.slice(0, 8);`
93.        `if (this._head) {`
94.          `if (header.equals(OPUS_TAGS)) this.emit('tags', segment);`
95.          `else if (this._bitstream === bitstream) this.push(segment);`
96.        `} else if (header.equals(OPUS_HEAD)) {`
97.          `this.emit('head', segment);`
98.          `this._head = segment;`
99.          `this._bitstream = bitstream;`
100.        `} else {`
101.          `this.emit('unknownSegment', segment);`
102.        `}`
103.        `start += size;`
104.      `}`
105.      `return chunk.slice(start);`
106.    `}`

108.    `_destroy(err, cb) {`
109.      `this._cleanup();`
110.      `return cb ? cb(err) : undefined;`
111.    `}`

113.    `_final(cb) {`
114.      `this._cleanup();`
115.      `cb();`
116.    `}`

118.    `/**`
119.     `* Cleans up the demuxer when it is no longer required.`
120.     `* @private`
121.     `*/`
122.    `_cleanup() {`
123.      `this._remainder = null;`
124.      `this._head = null;`
125.      `this._bitstream = null;`
126.    `}`
127.  `}`

129.  `/**`
130.   `* Emitted when the demuxer encounters the opus head.`
131.   `* @event OggDemuxer#head`
132.   `* @memberof opus`
133.   `* @param {Buffer} segment a buffer containing the opus head data.`
134.   `*/`

136.  `/**`
137.   `* Emitted when the demuxer encounters opus tags.`
138.   `* @event OggDemuxer#tags`
139.   `* @memberof opus`
140.   `* @param {Buffer} segment a buffer containing the opus tags.`
141.   `*/`

143.  `module.exports = OggDemuxer;`

---


# JSDoc: Source: opus/Opus.js

Source: https://amishshah.github.io/prism-media/opus_Opus.js.html

1.  `// Partly based on https://github.com/Rantanen/node-opus/blob/master/lib/Encoder.js`

3.  `const { Transform } = require('stream');`
4.  `const loader = require('../util/loader');`

6.  `const CTL = {`
7.    `BITRATE: 4002,`
8.    `FEC: 4012,`
9.    `PLP: 4014,`
10.  `};`

12.  `let Opus = {};`

14.  `function loadOpus(refresh = false) {`
15.    `if (Opus.Encoder && !refresh) return Opus;`

17.    `Opus = loader.require([`
18.      `['@discordjs/opus', opus => ({ Encoder: opus.OpusEncoder })],`
19.      `['node-opus', opus => ({ Encoder: opus.OpusEncoder })],`
20.      `['opusscript', opus => ({ Encoder: opus })],`
21.    `]);`
22.    `return Opus;`
23.  `}`

25.  `const charCode = x => x.charCodeAt(0);`
26.  `const OPUS_HEAD = Buffer.from([...'OpusHead'].map(charCode));`
27.  `const OPUS_TAGS = Buffer.from([...'OpusTags'].map(charCode));`

29.  `// frame size = (channels * rate * frame_duration) / 1000`

31.  `/**`
32.   `* Takes a stream of Opus data and outputs a stream of PCM data, or the inverse.`
33.   `* **You shouldn't directly instantiate this class, see opus.Encoder and opus.Decoder instead!**`
34.   `* @memberof opus`
35.   `* @extends TransformStream`
36.   `* @protected`
37.   `*/`
38.  `class OpusStream extends Transform {`
39.    `/**`
40.     `* Creates a new Opus transformer.`
41.     `* @private`
42.     `* @memberof opus`
43.     `* @param {Object} [options] options that you would pass to a regular Transform stream`
44.     `*/`
45.    `constructor(options = {}) {`
46.      `if (!loadOpus().Encoder) {`
47.        `throw Error('Could not find an Opus module! Please install @discordjs/opus, node-opus, or opusscript.');`
48.      `}`
49.      `super(Object.assign({ readableObjectMode: true }, options));`
50.      `if (Opus.name === 'opusscript') {`
51.        `options.application = Opus.Encoder.Application[options.application];`
52.      `}`
53.      `this.encoder = new Opus.Encoder(options.rate, options.channels, options.application);`

55.      `this._options = options;`
56.      `this._required = this._options.frameSize * this._options.channels * 2;`
57.    `}`

59.    `_encode(buffer) {`
60.      `return this.encoder.encode(buffer, this._options.frameSize);`
61.    `}`

63.    `_decode(buffer) {`
64.      `return this.encoder.decode(buffer, Opus.name === 'opusscript' ? null : this._options.frameSize);`
65.    `}`

67.    `/**`
68.     ``* Returns the Opus module being used - `opusscript`, `node-opus`, or `@discordjs/opus`.``
69.     `* @type {string}`
70.     `* @readonly`
71.     `* @example`
72.     ``* console.log(`Using Opus module ${prism.opus.Encoder.type}`);``
73.     `*/`
74.    `static get type() {`
75.      `return Opus.name;`
76.    `}`

78.    `/**`
79.     `* Sets the bitrate of the stream.`
80.     `* @param {number} bitrate the bitrate to use use, e.g. 48000`
81.     `* @public`
82.     `*/`
83.    `setBitrate(bitrate) {`
84.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
85.        `.apply(this.encoder, [CTL.BITRATE, Math.min(128e3, Math.max(16e3, bitrate))]);`
86.    `}`

88.    `/**`
89.     `* Enables or disables forward error correction.`
90.     `* @param {boolean} enabled whether or not to enable FEC.`
91.     `* @public`
92.     `*/`
93.    `setFEC(enabled) {`
94.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
95.        `.apply(this.encoder, [CTL.FEC, enabled ? 1 : 0]);`
96.    `}`

98.    `/**`
99.     `* Sets the expected packet loss over network transmission.`
100.     `* @param {number} [percentage] a percentage (represented between 0 and 1)`
101.     `*/`
102.    `setPLP(percentage) {`
103.      `(this.encoder.applyEncoderCTL || this.encoder.encoderCTL)`
104.        `.apply(this.encoder, [CTL.PLP, Math.min(100, Math.max(0, percentage * 100))]);`
105.    `}`

107.    `_final(cb) {`
108.      `this._cleanup();`
109.      `cb();`
110.    `}`

112.    `_destroy(err, cb) {`
113.      `this._cleanup();`
114.      `return cb ? cb(err) : undefined;`
115.    `}`

117.    `/**`
118.     `* Cleans up the Opus stream when it is no longer needed`
119.     `* @private`
120.     `*/`
121.    `_cleanup() {`
122.      `if (Opus.name === 'opusscript' && this.encoder) this.encoder.delete();`
123.      `this.encoder = null;`
124.    `}`
125.  `}`

127.  `/**`
128.   `* An Opus encoder stream.`
129.   `*`
130.   `* Outputs opus packets in [object mode.](https://nodejs.org/api/stream.html#stream_object_mode)`
131.   `* @extends opus.OpusStream`
132.   `* @memberof opus`
133.   `* @example`
134.   `* const encoder = new prism.opus.Encoder({ frameSize: 960, channels: 2, rate: 48000 });`
135.   `* pcmAudio.pipe(encoder);`
136.   `* // encoder will now output Opus-encoded audio packets`
137.   `*/`
138.  `class Encoder extends OpusStream {`
139.    `/**`
140.     `* Creates a new Opus encoder stream.`
141.     `* @memberof opus`
142.     `* @param {Object} options options that you would pass to a regular OpusStream, plus a few more:`
143.     `* @param {number} options.frameSize the frame size in bytes to use (e.g. 960 for stereo audio at 48KHz with a frame`
144.     `* duration of 20ms)`
145.     `* @param {number} options.channels the number of channels to use`
146.     `* @param {number} options.rate the sampling rate in Hz`
147.     `*/`
148.    `constructor(options) {`
149.      `super(options);`
150.      `this._buffer = Buffer.alloc(0);`
151.    `}`

153.    `_transform(chunk, encoding, done) {`
154.      `this._buffer = Buffer.concat([this._buffer, chunk]);`
155.      `let n = 0;`
156.      `while (this._buffer.length >= this._required * (n + 1)) {`
157.        `const buf = this._encode(this._buffer.slice(n * this._required, (n + 1) * this._required));`
158.        `this.push(buf);`
159.        `n++;`
160.      `}`
161.      `if (n > 0) this._buffer = this._buffer.slice(n * this._required);`
162.      `return done();`
163.    `}`

165.    `_destroy(err, cb) {`
166.      `super._destroy(err, cb);`
167.      `this._buffer = null;`
168.    `}`
169.  `}`

171.  `/**`
172.   `* An Opus decoder stream.`
173.   `*`
174.   `* Note that any stream you pipe into this must be in`
175.   `* [object mode](https://nodejs.org/api/stream.html#stream_object_mode) and should output Opus packets.`
176.   `* @extends opus.OpusStream`
177.   `* @memberof opus`
178.   `* @example`
179.   `* const decoder = new prism.opus.Decoder({ frameSize: 960, channels: 2, rate: 48000 });`
180.   `* input.pipe(decoder);`
181.   `* // decoder will now output PCM audio`
182.   `*/`
183.  `class Decoder extends OpusStream {`
184.    `_transform(chunk, encoding, done) {`
185.      `const signature = chunk.slice(0, 8);`
186.      `if (chunk.length >= 8 && signature.equals(OPUS_HEAD)) {`
187.        `this.emit('format', {`
188.          `channels: this._options.channels,`
189.          `sampleRate: this._options.rate,`
190.          `bitDepth: 16,`
191.          `float: false,`
192.          `signed: true,`
193.          `version: chunk.readUInt8(8),`
194.          `preSkip: chunk.readUInt16LE(10),`
195.          `gain: chunk.readUInt16LE(16),`
196.        `});`
197.        `return done();`
198.      `}`
199.      `if (chunk.length >= 8 && signature.equals(OPUS_TAGS)) {`
200.        `this.emit('tags', chunk);`
201.        `return done();`
202.      `}`
203.      `try {`
204.        `this.push(this._decode(chunk));`
205.      `} catch (e) {`
206.        `return done(e);`
207.      `}`
208.      `return done();`
209.    `}`
210.  `}`

212.  `module.exports = { Decoder, Encoder };`

---


# JSDoc: Source: opus/WebmDemuxer.js

Source: https://amishshah.github.io/prism-media/opus_WebmDemuxer.js.html

1.  `const WebmBaseDemuxer = require('../core/WebmBase');`

3.  `const OPUS_HEAD = Buffer.from([...'OpusHead'].map(x => x.charCodeAt(0)));`

5.  `/**`
6.   `* Demuxes a Webm stream (containing Opus audio) to output an Opus stream.`
7.   `* @extends core.WebmBaseDemuxer`
8.   `* @memberof opus`
9.   `* @example`
10.   `* const fs = require('fs');`
11.   `* const file = fs.createReadStream('./audio.webm');`
12.   `* const demuxer = new prism.opus.WebmDemuxer();`
13.   `* const opus = file.pipe(demuxer);`
14.   `* // opus is now a ReadableStream in object mode outputting Opus packets`
15.   `*/`
16.  `class WebmDemuxer extends WebmBaseDemuxer {`
17.    `_checkHead(data) {`
18.      `if (!data.slice(0, 8).equals(OPUS_HEAD)) {`
19.        `throw Error('Audio codec is not Opus!');`
20.      `}`
21.    `}`
22.  `}`

24.  `module.exports = WebmDemuxer;`

---


# JSDoc: Source: vorbis/WebmDemuxer.js

Source: https://amishshah.github.io/prism-media/vorbis_WebmDemuxer.js.html

1.  `const WebmBaseDemuxer = require('../core/WebmBase');`

3.  `const VORBIS_HEAD = Buffer.from([...'vorbis'].map(x => x.charCodeAt(0)));`

5.  `/**`
6.   `* Demuxes a Webm stream (containing Vorbis audio) to output a Vorbis stream.`
7.   `* @memberof vorbis`
8.   `* @extends core.WebmBaseDemuxer`
9.   `*/`
10.  `class WebmDemuxer extends WebmBaseDemuxer {`
11.    `_checkHead(data) {`
12.      `if (data.readUInt8(0) !== 2 || !data.slice(4, 10).equals(VORBIS_HEAD)) {`
13.        `throw Error('Audio codec is not Vorbis!');`
14.      `}`

16.      `this.push(data.slice(3, 3 + data.readUInt8(1)));`
17.      `this.push(data.slice(3 + data.readUInt8(1), 3 + data.readUInt8(1) + data.readUInt8(2)));`
18.      `this.push(data.slice(3 + data.readUInt8(1) + data.readUInt8(2)));`
19.    `}`
20.  `}`

22.  `module.exports = WebmDemuxer;`

---

