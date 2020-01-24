const TECHS = [
  { id: 'react', label: 'React' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'netlify', label: 'Netlify' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'aws', label: 'AWS' },
  { id: 'pwa', label: 'PWA' },
  { id: 'mongo', label: 'MongoDB' },
  { id: 'express', label: 'Express.js' },
  { id: 'graphql', label: 'GraphQL' },
  { id: 'quilljs', label: 'Quill.js' },
  { id: 'meteor', label: 'Meteor' },
  { id: 'raspberrypi', label: 'Raspberry PI' },
  { id: 'reactnative', label: 'React Native' },
  { id: 'pubnub', label: 'PubNub' },
  { id: 'websocket', label: 'WebSocket' },
];

const getTechs = (techIds) => {
  return techIds.map((techId) => {
    const tech = TECHS.find((t) => t.id === techId);

    if (!tech) {
      throw new Error(`Tech "${techId}" not found`);
    }

    return tech;
  });
};

export default getTechs;
