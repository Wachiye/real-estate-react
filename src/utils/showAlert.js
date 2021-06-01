import swal from "sweetalert";

const showAlert = (alert) => {
    swal({
        title: alert.title ,
        text: alert.message ,
        icon: alert.type ,
        timer: 4000,
        button: false
    });
}

const showConfirmAlert = async(action,item) => {
    return swal({
        title: "Confirm Action",
        text: `Your are about to ${action} this ${item}. Action is not reversible.`,
        icon: "warning",
        buttons:["CANCEL", action],
        dangerMode: true,
    });
}

export {showAlert, showConfirmAlert};