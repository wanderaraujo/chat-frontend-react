import React from 'react'

export default props => (
    <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
            <div className="input-group">
                <div className="user_info">
                    <span>{props.titulo}</span>
                    <p>{props.texto}</p>
                </div>
            </div>
        </div>
    </div>
)