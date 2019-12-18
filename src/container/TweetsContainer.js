import React, { Component, Fragment } from 'react'
import { ReactReduxContext } from 'react-redux'

import { TweetsThunkActions } from '../store/ducks/tweets'
import Tweet from '../components/Tweet'
import { Modal } from '../components/Modal'

export class TweetsContainer extends Component {
  static contextType = ReactReduxContext

  state = {
    tweets: [],
    tweetAtivoNoModal: {},
  }

  componentDidMount() {
    const { store } = this.context

    store.subscribe(() => {
      this.setState({
        tweets: store.getState().tweets.data,
      })
    })

    store.dispatch(TweetsThunkActions.carregaTweets())
  }

  removeTweet = (idTweetQueVaiSerRemovido) => {
    this.context.store.dispatch(TweetsThunkActions.removeTweet(idTweetQueVaiSerRemovido))
      .then(() => this.fechaModal())
  }

  fechaModal = () => this.setState({ tweetAtivoNoModal: {} })

  abreModal = tweetQueVaiProModal => {
    this.setState({
      tweetAtivoNoModal: tweetQueVaiProModal,
    }, () => {
      console.log(this.state.tweetAtivoNoModal)
    })
  }

  mapTweets = () => {
    const { tweets } = this.state
    
    if (tweets.length) {
      return tweets.map((tweetInfo, index) => <Tweet
                                                key={ tweetInfo._id }
                                                id={ tweetInfo._id }
                                                texto={ tweetInfo.conteudo }
                                                usuario={ tweetInfo.usuario }
                                                likeado={ tweetInfo.likeado }
                                                totalLikes={ tweetInfo.totalLikes }
                                                removivel={ tweetInfo.removivel }
                                                removeHandler={ () => { this.removeTweet(tweetInfo._id) } }
                                                onClickNaAreaDeConteudo={ () => this.abreModal(tweetInfo) }
                                              />)
    }

    return <p>Opa, você não tem tweets. Crie um novo ao lado :)</p>
  }

  atualizaTweet = (id, tweetProps) => {
    this.setState(({ tweets }) => {
      const index = tweets.findIndex(tweet => tweet._id === id)

      tweets[index] = { ...tweets[index], ...tweetProps }

      return { tweets: [...tweets] }
    })
  }

  render() {
    return (
      <Fragment>
        <div className="tweetsArea">
          { this.mapTweets() }
        </div>
        <Modal
          isAberto={Boolean(this.state.tweetAtivoNoModal._id)}
          onFechando={this.fechaModal}
        >
          {
            () => <Tweet
                    key={ this.state.tweetAtivoNoModal._id }
                    id={ this.state.tweetAtivoNoModal._id }
                    texto={ this.state.tweetAtivoNoModal.conteudo }
                    usuario={ this.state.tweetAtivoNoModal.usuario }
                    likeado={ this.state.tweetAtivoNoModal.likeado }
                    totalLikes={ this.state.tweetAtivoNoModal.totalLikes }
                    removivel={ this.state.tweetAtivoNoModal.removivel }
                    removeHandler={ () => { this.removeTweet(this.state.tweetAtivoNoModal._id) } }
                    isAbertoNoModal
                    atualizaTweet={ this.atualizaTweet }
                  />
          }
        </Modal>
      </Fragment>
    )
  }
}
