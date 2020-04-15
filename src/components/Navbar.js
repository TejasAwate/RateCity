import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchMorePost} from '../actions/actions'
import Pagination from 'react-js-pagination';


export default class Navbar extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.activePage = 1;

    }

    handleClick(index, e) {
        this.props.dispatchFunc(fetchMorePost(index));
        this.activePage = index;
    }

    render() {
        return (
            <div className="navbar bg-info">
                <Pagination
                    activePage={this.activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={35}
                    pageRangeDisplayed={this.props.obj}
                    onChange={this.handleClick}
                />
            </div>

        )
    }
}

Navbar.propTypes = {
    dispatchFunc: PropTypes.function,
    obj: PropTypes.number
};
