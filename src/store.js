import { noteData } from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {},
    isADD: false,
    alertShow: false,
    alertContent: ''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            // alert("Add noi dung vao firebase: " + JSON.stringify(action.getItem) + "thanh cong");
            return state
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }
        case "GET_EDIT_STATUS":
            return { ...state, editItem: action.editObject }
        case "EDIT":
            // update data len firebase 
            noteData.child(action.getItem.id).update({
                title: action.getItem.noteTitle,
                content: action.getItem.noteContent,
            })
            // alert('Đã cập nhật dữ liệu: ' + JSON.stringify(action.getItem) + ' thành công');
            return { ...state, editItem: {} }
        case "DELETE":
            noteData.child(action.deleteId).remove();
            // alert('du lieu can xoa la ' + JSON.stringify(action.deleteId) + ' thành công');
            return state
        case "ADD_OR_EDIT_TITLE":
            return { ...state, isADD: !state.isADD }
        case "ALERT_ON":
            return { ...state, alertShow: true, alertContent: action.alertContent }
        case "ALERT_OFF":
            return { ...state, alertShow: false }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    // console.log(JSON.stringify(store.getState()));

})

export default store;