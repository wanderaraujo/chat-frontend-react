import React, { Component } from 'react'
import Avatar from '../common/template/Avatar'

import { obterSalas } from '../services/api'

class SalaChat extends Component {

    state = {
        salas: [],
        salaSelecionada: 1
    }

    componentDidMount() {
        this.obterSalas()
    }

    obterSalas = async () => {

        const response = await obterSalas().then(response => {
            return response
        })
        this.setState({ salas: response });
        this.escolherSala(response[0])

    }

    escolherSala(item = {}) {
        const { setSala } = this.props

        setSala(item)
        this.setState({ salaSelecionada: item.id })
    }

    renderCards() {

        const listaDeSalas = this.state.salas || []
        return listaDeSalas.map((item, index) => (

            <li className={item.id === this.state.salaSelecionada ? "active" : ""} key={item.id}>
                <span className="send_btn" onClick={() => this.escolherSala(item)}>

                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                        <Avatar nome_avatar={item.nome_sala} rounded={true} size="70" />                            
                            <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                            <span>{item.nome_sala}</span>
                            <p>2 Usuários</p>
                        </div>
                    </div>
                </span>
            </li>

        ))
    }

    render() {
        return (

            <div className="col-md-4 col-xl-3 chat">
                <div className="card mb-sm-3 mb-md-0 contacts_card">
                    <div className="card-header">
                        <div className="input-group">
                            <div className="user_info">
                                <span>Salas Disponíveis</span>
                                <p>1767 Mensagens enviadas</p>
                            </div>
                        </div>
                    </div>
                  

                    <div className="card-body contacts_body">
                        <ui className="contacts">
                            {this.renderCards()}
                        </ui>
                       
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>

        )
    }
}

export default SalaChat