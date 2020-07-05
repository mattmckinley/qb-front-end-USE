import React, { useState, useEffect } from 'react';
import "./CallCentreScreen.css";

//need to make USER IS SAFE BUTTON WORK
function CallCentreScreen(props) {

    //     function handleMarkSafe() {
    //         props.markSafe();
    //     }



    return (

        <div className="callCentreScreen-main">
            <div className="callCentreScreen-background">
                <div className="callCentreScreen-header">
                    <h4>
                        Potentially UNSAFE Users
                    </h4>
                </div>

                <div className="callCentreScreen-list">
                    <div className="row callCentreScreen-deets col-3 col-md-4">
                        <p className="call_username">{props.user_firstName}</p>
                    </div>

                    <div className="callCentreScreen-number col-4 col-md-3">
                        <p className="call_userphone">{props.user_phone}</p>
                        {/* will be a concat of the first and second name */}
                    </div>

                    <div className="form-check col-4 col-md-4">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" for="dropdownCheck">User called- but not answered
                        </label>
                    </div>

                    <button
                        // onClick={() => buttonPressed()}
                        className="btn btn-danger btn-xl"
                    > USER IS SAFE 
                    </button>

                </div>


            </div>
        </div>
    );
}



export default CallCentreScreen;