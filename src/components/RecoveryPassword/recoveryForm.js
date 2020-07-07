/* import React, { useState, useEffect } from "react"; */
import React, { useState } from "react";
import { render } from "@testing-library/react";

const RecoveryForm = (props) => {
    return (
        <>
            <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
            <form onSubmit={props.handleSubmit} method='POST'>
                <div class="form-group">
                    <label class="small mb-1" for="email">Email</label>
                    <input class="form-control py-4" id="email" name="email" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                </div>
                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a class="small" href="login.html">Return to login</a>
                    <button class="btn btn-primary" type="submit">Reset Password</button>
                </div>
            </form>
        </>
    )
}

export default RecoveryForm