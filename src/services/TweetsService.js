import ApiConfig from '../ApiConfig'

export const TweetsService = {
  like: (idDoTweet) => {
    return fetch(`${ApiConfig.url}/tweets/${idDoTweet}/like?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, { method:'POST' })
      .then(response => response.json())
  },
  carrega: () => {
    return fetch(`${ApiConfig.url}/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`)
      .then(response => response.json())
      .then((tweets) => {
        window.store.dispatch({ type: 'CARREGA_TWEETS', tweets })
      })
  },
  adiciona: (novoTweet) => {
    return fetch(`${ApiConfig.url}/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conteudo: novoTweet })
      })
      .then(respostaDoServer => respostaDoServer.json())
  },
  remove: (idTweetQueVaiSerRemovido) => {
    return fetch(`${ApiConfig.url}/tweets/${idTweetQueVaiSerRemovido}?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, { method: 'DELETE' })
      .then(data => data.json())
  }
}
