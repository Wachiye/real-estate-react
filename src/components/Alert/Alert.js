const Alert = ({type,title,message}) =>{
    return (
        <div className={`alert alert-${type} alert-dismissible fade show`}>
            <div className="alert-header">
                <h6 className="alert-heading">{title || 'SERVER RESPONSE'}</h6>
            </div>
            <div className="alert-body">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>{type === 'success' ? 'Success' : ''}!</strong> {message}.
            </div>

        </div>
    );
}

export default Alert;