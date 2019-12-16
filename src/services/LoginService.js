import ApiConfig from '../ApiConfig'

export const LoginService = {
  logar({ login, senha }) {
    return fetch(`${ApiConfig.url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, senha })
    })
    .then(async responseDoServer => {
      if (!responseDoServer.ok) {
        const respostaDeErroDoServidor = await responseDoServer.json()
        const errorObj = Error(respostaDeErroDoServidor.message)
  
        errorObj.status = responseDoServer.status
        throw errorObj
      }

      return responseDoServer.json()
    })
    .then(dadosDoServidorEmObj => {
      const { token } = dadosDoServidorEmObj

      if (token) {
        localStorage.setItem('TOKEN', token)
        return
      }

      throw new Error('Token not found')
    })
  }
}
