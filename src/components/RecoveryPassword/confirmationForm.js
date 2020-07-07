/* import React, { useState, useEffect } from "react"; */
import React, { useState } from "react";
import { render } from "@testing-library/react";

const ConfirmationForm = (props) => {
    return (
        <form onSubmit={props.handleSubmitToken} method='POST'>
            {/* <input type="hidden" name="userId" defaultValue={props.userId} id="userId" /> */}
            <div>Confirme o token</div>
            <div class="form-row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="small mb-1" for="token">Token</label>
                        <input class="form-control py-4" name="token" id="token" type="text" placeholder="token" />
                    </div>
                </div>
            </div>
            <div class="form-group mt-4 mb-0">
                <button class="btn btn-primary btn-block" type="submit">Confirmar Token</button>
            </div>
        </form>)
}

export default ConfirmationForm