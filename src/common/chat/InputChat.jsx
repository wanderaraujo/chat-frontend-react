import React, { Component, Fragment } from 'react'
import { Formik, Form, Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default class InputChat extends Component {

    state = {
        texto: ''
    }

    handleSubmit = (values, {
        props = this.props,
        resetForm,
        setSubmitting
    }) => {

        this.setState({texto: ''})
        resetForm({ mensagem: ''});
        setSubmitting(false);

        const { enviarMensagem } = this.props

        enviarMensagem(values.mensagem)
        return;
    }

    render() {

        return (
            <Formik
                initialValues={{
                    mensagem: '',
                }}
                onSubmit={this.handleSubmit}
                render={formProps => {
                    return (
                        <Fragment>

                            <Form>

                                <div className="card-footer">
                                    <div className="input-group">
                                        <Field
                                            type="textarea"
                                            name="mensagem"
                                            placeholder="Escreva sua mensagem..."
                                            className="form-control type_msg"
                                            autoComplete="off"
                                        />

                                        <div className="input-group-append">
                                            <button
                                                type="submit"
                                                disabled={formProps.isSubmitting}
                                                className="btn btn-light btn-lg btn-block">
                                                <FontAwesomeIcon icon={faLocationArrow} size="lg" />
                                            </button>
                                        </div>

                                    </div>
                                </div >

                            </Form>

                        </Fragment >

                    );
                }}
            />);

    }
}
