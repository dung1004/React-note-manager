import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    handleAdd = (event) => {
        event.preventDefault();
        this.props.changeEditStatus();
        this.props.changeAddStatus();

    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
                <a className="navbar-brand" href="#">Note Reactjs</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(event) => this.handleAdd(event)}>Thêm ghi chú</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS",
            })
        },
        changeAddStatus: () => {
            dispatch({
                type: "ADD_OR_EDIT_TITLE",
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
