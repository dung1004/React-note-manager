import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }


    componentWillMount() {
        if (this.props.editItem) {
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id,
            })
        }
    }

    // lay du lieu trong input
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    // them moi & edit data
    addData = (title, content) => {
        // kiem tra neu co id thi edit nguoc lai
        if (this.state.id) {
            const editObject = {};
            editObject.id = this.state.id;
            editObject.noteTitle = this.state.noteTitle;
            editObject.noteContent = this.state.noteContent;

            this.props.editDataStore(editObject);
            this.props.changeEditStatus();
            this.props.alertOn('Sửa nội dung thành công');

        } else {
            const item = {};
            item.title = title;
            item.content = content;

            this.props.addDataStore(item); // su dung reducer trong store , // Dispatch ADD_DATA
            this.props.alertOn('Thêm Mới Thành Công');
        }
    }
    showTitle = () => {
        if (this.props.isAddStatus) {
            return <h3>THÊM MỚI DUNG NOTE</h3>
        } else {
            return <h3>SỬA NỘI DUNG NOTE</h3>
        }
    }

    render() {
        return (
            <div className="col-4">
                {this.showTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input
                            onChange={(event) => this.isChange(event)}
                            type="text" name="noteTitle" id="noteTitle"
                            className="form-control" placeholder="Tiêu đề note"
                            aria-describedby="helpId"
                            defaultValue={this.props.editItem.noteTitle}
                        />
                        <small
                            id="helpId"
                            className="text-muted">
                            Sửa tiêu đề Note
                            </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note</label>
                        <textarea
                            onChange={(event) => this.isChange(event)}
                            type="text" name="noteContent" id="noteContent"
                            className="form-control" placeholder="Nội dung note"
                            aria-describedby="helpId"
                            defaultValue={this.props.editItem.noteContent}
                        />
                        <small id="helpId" className="text-muted">Sửa nội dung</small>
                    </div>
                    <button
                        onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)}
                        type="reset"
                        name="btn"
                        id="btn"
                        className="btn btn-primary btn-lg btn-block">Lưu</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isAddStatus: state.isADD
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({
                type: "ADD_DATA",
                getItem,
            })
        },
        editDataStore: (getItem) => {
            dispatch({
                type: "EDIT",
                getItem,
            })
        },
        changeEditStatus: () => {
            dispatch(
                { type: "CHANGE_EDIT_STATUS" },
            )
        },
        alertOn: (alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertContent,
            })
        },
        alertOff: () => {
            dispatch(
                { type: "ALERT_OFF" },
            )
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

