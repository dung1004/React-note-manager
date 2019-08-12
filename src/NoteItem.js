import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {
    twoActionButton = () => {
        this.props.changeEditStatus() // action1

        // lay noi dung va update action2
        this.props.getEditData(this.props.note);

    }
    deleteData = () => {
        this.props.getDeleteData(this.props.note.id);
        this.props.alertOn('Xóa Thành Công');

    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="notet1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#note" href={"#number" + this.props.i} aria-expanded="true" aria-controls={"#number" + this.props.i}>
                            {
                                this.props.noteTitle
                            }
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info" onClick={() => this.twoActionButton()}>Sửa</button>
                            <button className="btn btn-outline-secondary" onClick={() => this.deleteData()}>Xóa</button>
                        </div>
                    </h5>
                </div>

                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="notet1">
                    <div className="card-body">
                        {
                            this.props.noteContent
                        }
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // 
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch(
                { type: "CHANGE_EDIT_STATUS" },
            )
        },
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_STATUS",
                editObject,
            })
        },
        getDeleteData: (deleteId) => {
            dispatch({
                type: "DELETE",
                deleteId,
            })
        },
        alertOn: (alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertContent,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
