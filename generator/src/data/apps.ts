import type {AudioApp} from './types';

export const apps: AudioApp[] = [
  {
    name: 'ADSR',
    url: 'https://adsr.vercel.app/',
    description: 'Simple web-based ADSR synth',
    repository: {
      type: 'GitHub',
      user: 'satelllte',
      repo: 'adsr',
    },
  },
  {
    name: 'Ardour',
    url: 'https://ardour.org/',
    description: 'DAW',
    repository: {
      type: 'GitHub',
      user: 'Ardour',
      repo: 'ardour',
    },
  },
  {
    name: 'ASIO2WASAPI',
    description: 'Universal ASIO driver for Windows',
    repository: {
      type: 'GitHub',
      user: 'levmin',
      repo: 'ASIO2WASAPI',
    },
  },
  {
    name: 'Audacity',
    url: 'https://www.audacityteam.org/',
    description: 'Audio editor',
    repository: {
      type: 'GitHub',
      user: 'audacity',
      repo: 'audacity',
    },
  },
  {
    name: 'butterDAWg',
    url: 'https://github.com/Jaybee18/butterDAWg',
    description: 'DAW (WIP)',
    repository: {
      type: 'GitHub',
      user: 'Jaybee18',
      repo: 'butterDAWg',
    },
  },
  {
    name: 'Carla',
    url: 'https://kx.studio/Applications:Carla',
    description: 'GNU/Linux Plugin Host',
    repository: {
      type: 'GitHub',
      user: 'falkTX',
      repo: 'Carla',
    },
  },
  {
    name: 'ChucK',
    url: 'https://chuck.stanford.edu/',
    description:
      'Strongly-timed, Concurrent, and On-the-fly Music Programming Language',
    repository: {
      type: 'GitHub',
      user: 'ccrma',
      repo: 'chuck',
    },
  },
  {
    name: 'Element',
    url: 'https://kushview.net/element/',
    description: 'Advanced Audio Plugin Host',
    repository: {
      type: 'GitHub',
      user: 'Kushview',
      repo: 'Element',
    },
  },
  {
    name: 'FlexASIO',
    description: 'Universal ASIO driver for Windows',
    repository: {
      type: 'GitHub',
      user: 'dechamps',
      repo: 'FlexASIO',
    },
  },
  {
    name: 'Giada',
    url: 'https://www.giadamusic.com/',
    description: 'Loop machine',
    repository: {
      type: 'GitHub',
      user: 'monocasual',
      repo: 'giada',
    },
  },
  {
    name: 'Guitarix',
    url: 'https://guitarix.org/',
    description: 'GNU/Linux Virtual Amplifier',
    repository: {
      type: 'SourceForge',
      project: 'guitarix',
    },
  },
  {
    name: 'Harmonoid',
    url: 'https://github.com/harmonoid/harmonoid',
    description:
      'Cross-platform music player (Mobile & Desktop) written in Flutter',
    repository: {
      type: 'GitHub',
      user: 'harmonoid',
      repo: 'harmonoid',
    },
  },
  {
    name: 'Helio Workstation',
    url: 'https://helio.fm/',
    description: 'Sequencer',
    repository: {
      type: 'GitHub',
      user: 'helio-fm',
      repo: 'helio-workstation',
    },
  },
  {
    name: 'HISE',
    url: 'http://hise.audio/',
    description:
      'Cross-platform framework/application for building sample-based virtual instruments (VST, AU, AAX)',
    repository: {
      type: 'GitHub',
      user: 'christophhart',
      repo: 'HISE',
    },
  },
  {
    name: 'Hydrogen',
    url: 'http://hydrogen-music.org/',
    description: 'Drum machine',
    repository: {
      type: 'GitHub',
      user: 'hydrogen-music',
      repo: 'hydrogen',
    },
  },
  {
    name: 'LMMS',
    url: 'https://lmms.io/',
    description: 'DAW',
    repository: {
      type: 'GitHub',
      user: 'LMMS',
      repo: 'lmms',
    },
  },
  {
    name: 'NewMixer',
    url: 'https://github.com/jatinchowdhury18/NewMixer',
    description: 'Mixing Software',
    repository: {
      type: 'GitHub',
      user: 'jatinchowdhury18',
      repo: 'NewMixer',
    },
  },
  {
    name: 'OpenMPT',
    url: 'https://openmpt.org/',
    description:
      'Popular tracker (formerly ModPlug Tracker) for Windows with support for IT, XM, S3M, MOD modules, VST plugins and ASIO',
    repository: {
      type: 'GitHub',
      user: 'OpenMPT',
      repo: 'openmpt',
    },
  },
  {
    name: 'orDrumbox',
    url: 'https://www.ordrumbox.com/',
    description: 'Drum machine',
    repository: {
      type: 'SourceForge',
      project: 'ordrumbox',
    },
  },
  {
    name: 'ossia score',
    url: 'https://ossia.io',
    description: 'Cross-platform intermedia sequencer',
    repository: {
      type: 'GitHub',
      user: 'ossia',
      repo: 'score',
    },
  },
  {
    name: 'OwlPlug',
    url: 'https://owlplug.com/',
    description: 'Audio plugin manager',
    repository: {
      type: 'GitHub',
      user: 'DropSnorz',
      repo: 'OwlPlug',
    },
  },
  {
    name: 'Psycle',
    url: 'http://psycle.pastnotecut.org/portal.php',
    description: 'Modular music tracker',
    repository: {
      type: 'SourceForge',
      project: 'psycle',
    },
  },
  {
    name: 'SampleScanner',
    url: 'https://github.com/psobot/SampleScanner',
    description: 'Tool for auto-sampling hardware instruments',
    repository: {
      type: 'GitHub',
      user: 'psobot',
      repo: 'SampleScanner',
    },
  },
  {
    name: 'SFZ to HISE converter',
    url: 'https://keypleezer.com/sfz-to-hise-converter/',
    description:
      'JavaScript app that translates SFZ instrument files into HISE samplemaps and JSON data objects. Runs in a modern web browser. MIT license.',
    repository: {
      type: 'GitHub',
      user: 'anderseklov',
      repo: 'SFZ-to-HISE-converter',
    },
  },
  {
    name: 'Sonic Pi',
    url: 'https://sonic-pi.net/',
    description: 'Code-based music creation and performance tool',
    repository: {
      type: 'GitHub',
      user: 'sonic-pi-net',
      repo: 'sonic-pi',
    },
  },
  {
    name: 'Stargate DAW',
    description: 'Cross-platform, all-in-one DAW and plugin suite',
    repository: {
      type: 'GitHub',
      user: 'stargatedaw',
      repo: 'stargate',
    },
  },
  {
    name: 'StudioRack',
    url: 'https://studiorack.github.io/studiorack-site/',
    description: 'Audio plugin manager',
    repository: {
      type: 'GitHub',
      user: 'studiorack',
      repo: 'studiorack',
    },
  },
  {
    name: 'SuperCollider',
    url: 'https://supercollider.github.io/',
    description:
      'SuperCollider is a platform for audio synthesis and algorithmic composition, used by musicians, artists, and researchers working with sound.',
    repository: {
      type: 'GitHub',
      user: 'supercollider',
      repo: 'supercollider',
    },
  },
  {
    name: 'VCV Rack',
    url: 'https://vcvrack.com/',
    description: 'Modular synth',
    repository: {
      type: 'GitHub',
      user: 'VCVRack',
      repo: 'Rack',
    },
  },
  {
    name: 'yabridge',
    description: 'Linux bridge for Windows VSTs',
    repository: {
      type: 'GitHub',
      user: 'robbert-vdh',
      repo: 'yabridge',
    },
  },
  {
    name: 'Zrythm',
    url: 'https://www.zrythm.org/',
    description: 'DAW',
    repository: {
      type: 'GitHub',
      user: 'zrythm',
      repo: 'zrythm',
    },
  },
];
