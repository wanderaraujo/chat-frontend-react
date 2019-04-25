import React, { Component, Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

import Avatar from '../template/Avatar'

export default class Conversa extends Component {
   
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentWillReceiveProps(props, state){
        this.myRef.current.scrollTop = this.myRef.current.scrollHeight - this.myRef.current.clientHeight ;
    }

    renderMensagens() {

        const { mensagens } = this.props

        const listaDeMensagens = mensagens || []
        return listaDeMensagens.map((item, index) => (

            <div className="d-flex justify-content-start mb-4" key={index}>

                <div className="img_cont">
                <Avatar nome_avatar={ item.nome || item.nickname} rounded={true} size="45" /> 
                    <span className="offline_icon_person"></span>
                </div>
                
                <div className="msg_cotainer">
                    {item.texto}<br/>
                  <span className="msg_time"> {moment(item.data_envio).calendar()}</span>
                </div>
            </div>

        ))
    }

    render() {

        return (
            <Fragment>
                <div className="card-body msg_card_body" ref={this.myRef}>
                    {this.renderMensagens()}
                </div>
            </Fragment>
        )
    }
}