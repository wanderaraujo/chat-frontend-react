import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Pusher from 'pusher-js'

toast.configure()
export default class Toastr extends Component {

    state = {
        mensagemTs: null
    }

    componentDidMount(props) {
        const { messageToastr, status } = this.props

        const pusher = new Pusher('6729210a0326f10db4a4', {
            cluster: 'us2',
            forceTLS: true
        });

        const channel = pusher.subscribe('chat');
        channel.bind('usuario-status', data => {
            this.setState({ mensagemTs: data })
            this.showToast(data.mensagem, data.status)
        });

        this.showToast(messageToastr, status)

    }

    showToast(messageToastr, status) {

        if (status === 'SUCESSO') {
            toast.success(messageToastr, {});
        } else if (status === 'INFO') {
            toast.info(messageToastr, {});
        } else if (status === 'ERROR') {
            toast.error(messageToastr, {});
        } else if (status === 'LOGIN_USU') {
            toast(messageToastr);
        } else if (status === 'LOGIN_OUT_USU') {
            toast.warn(messageToastr);
        } else {

        }
    }

    render() {

        return this.state.mensagemTs ? (
            <ToastContainer />
        ) : null
    }
}