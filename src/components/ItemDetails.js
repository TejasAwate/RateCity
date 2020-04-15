import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactable';

export default class ItemDetails extends Component {
    extractData(data) {
        let list = data && data.items && data.items.map((item) => {
                return {
                    Name: item && item.name,
                    Slug: item && item.slug,
                    Company_Name: item && item.company && item.company.name
                }
            });
        return list || []
    }

    render() {
        return (
            <div>
                <div>
                    <div className="navbar bg-primary">
                        <h1>Rate City</h1>
                    </div>
                </div>
                {!this.props.obj.items &&
                <h1>Loading...</h1>}

                {this.props.obj && this.props.obj.items &&
                <div>
                    <Table
                    className="table table-striped table-responsive" data={this.extractData(this.props.obj)}
                    sortable={false} />
                </div>
                }
            </div>
        )
    }
}

ItemDetails.propTypes = {
    obj: PropTypes.object
};
