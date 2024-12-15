import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'rp2',
  title: 'RP2',
  license: 'apache-2.0',
  wrapperRepo: 'https://github.com/PlebRick/rp2-startos.git',
  upstreamRepo: 'https://github.com/eprbell/rp2.git',
  supportSite: 'https://github.com/eprbell/rp2/blob/main/README.dev.md',
  marketingSite: 'https://github.com/eprbell/dali-rp2',
  donationUrl: null,
  description: {
    short: 'Cryptocurrency tax reporting tool',
    long: 'RP2 is an open-source cryptocurrency tax calculator that generates detailed reports for various countries, supporting multiple accounting methods.',
  },
  assets: ['./assets/rp2-image.tar'], // Embedded Docker image
  volumes: ['config', 'input', 'output'], // Named volumes
  images: {
    'rp2-image': {
      source: {
        dockerArchive: './assets/rp2-image.tar', // Path to the embedded Docker image
      },
    },
  },
  hardwareRequirements: {
    cpu: 2, // Minimum 2 CPU cores recommended
    ram: 1024 * 2, // Minimum 2 GB RAM
    storage: 1024 * 10, // Minimum 10 GB storage
  },
  alerts: {
    install: 'Please ensure your input and configuration directories are set up before installing.',
    update: 'Ensure you back up your data before updating.',
    uninstall: 'All configuration and output data will be deleted upon uninstalling.',
    restore: 'Restore the service with the original configuration and inputs.',
    start: null,
    stop: null,
  },
  dependencies: {
    essential: {
      docker: {
        version: '>=20.10',
      },
    },
  },
})





































/*import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'hello-world',
  title: 'Hello World',
  license: 'mit',
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-wrapper',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: 'https://donate.start9.com/',
  description: {
    short: 'Bare bones example of a StartOS service',
    long: 'Hello World is a template service that provides examples of basic StartOS features.',
  },
  assets: [],
  volumes: ['main'],
  images: {
    'hello-world': {
      source: {
        dockerTag: 'start9/hello-world',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: 'Optional alert to display before installing the service',
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
*/