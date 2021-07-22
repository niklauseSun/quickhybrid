export default function takeToSeeMixin(hybrid) {
  const hybridJs = hybrid;
  // const innerUtil = hybridJs.innerUtil;

  hybridJs.extendModule('taketosee', [
    {
      namespace: 'loginWithUserName',
      os: ['quick']
    },
    {
      namespace: 'loginWithOutToken',
      os: ['quick']
    },
    {
      namespace: 'logout',
      os: ['quick']
    },
    {
      namespace: 'createChannelListener',
      os: ['quick']
    },
    {
      namespace: 'joinChannel',
      os: ['quick']
    },
    {
      namespace: 'leaveChannel',
      os: ['quick']
    },
    {
      namespace: 'sendPeerMessage',
      os: ['quick']
    },
    {
      namespace: 'sendGroupMessage',
      os: ['quick']
    },
    // call api
    {
      namespace: 'initAgoraCall',
      os: ['quick']
    },
    {
      namespace: 'joinAgoraCallChannel',
      os: ['quick']
    },
    {
      namespace: 'leaveAgoraCallChannel',
      os: ['quick']
    },
    {
      namespace: 'adjustPlayerVolume',
      os: ['quick']
    },
    {
      namespace: 'adjustRecordingVolume',
      os: ['quick']
    }
  ]);
}
