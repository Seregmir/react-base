import React, {Component} from 'react';
import Helper_Columns from '../../helpers/columns';

class Single extends Component {
    containerClasses;

    constructor(props) {
        super(props);

        this.containerClasses = Helper_Columns.classes( props.amountPerRow );
    }

    render() {
        const classes = [ 'card__single', this.containerClasses ];
        return (
            // <div className={"col-12 col-md-4 col-xl-3"}>
            <div className={ classes.join( ' ' ) }>
                <div>
                    <img src={this.props.image} alt={this.props.name}/>

                    <div className="card__title">
                        <h2>{this.props.name}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Single;
