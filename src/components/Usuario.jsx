import React, { Component, Fragment } from 'react'
import { Formik, Form, Field } from 'formik'

import { loginUsuario } from '../services/api'

class Usuario extends Component {

    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {

        this.loginUsuario(values)
        setSubmitting(false);
        return;
    }

    loginUsuario = async (usuario) => {

        const { setUsuario, setToastr } = this.props

        setToastr('', '')

        const response = await loginUsuario(usuario).then(response => {
            return response
        })

        if (response.status === 201) {
            setUsuario(response.data[0])
            setToastr('🤗Bem vindo, aproveite seu chat!', 'SUCESSO')
            setToastr(`👤 ${usuario.nome || usuario.nickname} Acabou de entrar no Chat!`, 'LOGIN_USU')
        } else if (response.status === 200) {
            setUsuario(response.data[0])
            setToastr('😍 Bem vindo de volta, continue seu chat!', 'INFO')
            setToastr(`👤 ${usuario.nome || usuario.nickname} Acabou de entrar no Chat!`, 'LOGIN_USU')
        } else if (response.status === 400) {
            setToastr(`🤔 ${response.data.erro}`, 'ERROR')
        } else {
            setToastr('🤔 Houve um problema ao entrar na sala, tente novamente mais tarde!', 'ERROR')
        }

    }

    render() {
        return (
            <Formik
                initialValues={{
                    nome: '',
                    nickname: ''
                }}
                onSubmit={this.handleSubmit}
                render={formProps => {
                    return (
                        <Fragment>

                            <div className="col-md-4 col-xl-4 chat">
                                <div className="card mb-sm-3 mb-md-0 contacts_card">
                                    <div className="card-header">
                                        <div className="input-group">
                                            <div className="user_info">
                                                <span>Bem Vindo!</span>
                                                <p>Faça seu registro antes de enviar novas mensagens...</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body contacts_body">

                                        <Form>
                                            <div className="form-group center">

                                                <Field
                                                    type="text"
                                                    name="nome"
                                                    placeholder="Nome usuário"
                                                    className="form-control usuario-form"
                                                />

                                                <Field
                                                    type="text"
                                                    name="nickname"
                                                    placeholder="Nickname"
                                                    className="form-control usuario-form"
                                                />

                                                <button
                                                    type="submit"
                                                    disabled={formProps.isSubmitting}
                                                    className="btn btn-primary btn-lg btn-block">
                                                    Entrar
                                            </button>
                                            </div>

                                        </Form>

                                    </div>
                                </div>
                            </div>

                        </Fragment>

                    );
                }}
            />);

    }
}

export default Usuario