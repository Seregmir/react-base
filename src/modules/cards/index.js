import React, {Component} from 'react';
import _ from 'lodash';
import Single from "./single";

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const htmlCollection = [];
        const cardsKey = Math.ceil(Math.random() * 100000000);
        _.forEach(this.props.data, (item) => {
            htmlCollection.push(
                <Single
                    {...item}
                    amountPerRow={ this.props.amountPerRow }
                    key={ cardsKey + '-' + item.id }
                />
            );
        });

        return (
            <div className="col-12 d-flex flex-row flex-wrap">
                {htmlCollection}
            </div>
        );
    }
}

export default Cards;
