import React, { Component, Fragment } from 'react'

import SalaChat from './SalasChat'
import Usuario from './Usuario'
import MensagemSala from './MensagemSala'
import Toastr from '../common/template/Toastr'

import './chat.css';

const ChatContext = React.createContext({
    messageToastr: null,
    status: null,
    usuariosOnline: null,
    usuario: null,
    sala: null,
    setSala: sala => { },
    setUsuario: usuario => { },
    setToastr: (messageToastr, status) => { },
})

export default class Chat extends Component {

    state = {
        sala: null,
        usuariosOnline: [],
        usuario: null,
        status: null
    }

    showLoading = message => this.setState({
        loading: true,
        message
    })

    setSala = sala => this.setState({
        sala
    })

    setUsuario = usuario => {
        this.setState({ usuario })
    }

    setToastr = (messageToastr, status) => this.setState({
        messageToastr,
        status
    })

    render() {
        const {  setSala, setUsuario, setToastr } = this

        const value = {
            ...this.state,
            setSala,
            setUsuario,
            setToastr
        }

        return (
            <ChatContext.Provider value={value}>
                <ChatContext.Consumer>
                    {
                        ({  setUsuario, setSala, setToastr, messageToastr, status, sala, usuario }) => (
                            <Fragment>

                                <div className="container-fluid h-100" >
                                    <div className="row justify-content-center h-100">
                                        <SalaChat {...{ setSala }} />

                                        {usuario
                                            ? <MensagemSala {...{ sala, usuario }} />
                                            : <Usuario {...{ setUsuario, setToastr }} />
                                        }

                                    </div>
                                </div>

                                {messageToastr &&
                                    <Toastr {...{ messageToastr, status }} />
                                }

                            </Fragment>
                        )
                    }
                </ChatContext.Consumer>
            </ChatContext.Provider>
        )
    }
}
