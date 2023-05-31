import ClientPusher from 'pusher-js'

const pusher = new ClientPusher('657cc90ea3b6152f7ddf', {
    cluster: 'us2'
  });

export default pusher