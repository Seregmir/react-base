import React, {Component} from 'react';
import Helper_Columns from '../../helpers/columns';

class Single extends Component {
    containerClasses;

    constructor(props) {
        super(props);

        this.containerClasses = Helper_Columns.classes( props.amountPerRow );
    }

    render() {
        return (
            // <div className={"col-12 col-md-4 col-xl-3"}>
            <div className={ this.containerClasses }>
                <img src={this.props.image} alt={this.props.name}/>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Single;
