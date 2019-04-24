import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <p>{this.props.item}</p>
                <p>{this.props.item}</p>
            </div>
        );
    }
}

export default Item;