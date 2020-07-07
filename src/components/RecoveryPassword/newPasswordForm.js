/* import React, { useState, useEffect } from "react"; */
import React, { useState } from "react";
import { render } from "@testing-library/react";

const NewPasswordForm = (props) => {
    return (
        <form onSubmit={props.handleSubmitNewPassword} method='POST'>
{/*             <input type="hidden" name="userId" defaultValue={props.userId} id="userId" />
            <input type="hidden" name="token" defaultValue={props.token} id="token" /> */}
            <div>Trocar o Password</div>
            <div class="form-row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="small mb-1" for="newPassword">Novo Password</label>
                        <input class="form-control py-4" name="newPassword" id="newPassword" type="password" placeholder="novo Password" />
                    </div>
                </div>
            </div>
            <div class="form-group mt-4 mb-0">
                <button class="btn btn-primary btn-block" type="submit">Trocar Password</button>
            </div>
        </form>)
}

export default NewPasswordForm