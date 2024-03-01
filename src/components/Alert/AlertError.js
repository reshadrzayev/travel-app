import React from 'react'

const AlertError = ({error}) => {
    return (
        <div className='alert-error alrt'>
            <div className="alert alert-danger" role="alert">   
                <h4 className="alert-heading">Oops!</h4>
                <p>{error.message}</p>
                <hr/>
                    <p className="mb-0">Yenidən cəhd edin.</p>
            </div>
        </div>
    )
}

export default AlertError
