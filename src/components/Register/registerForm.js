/* import React, { useState, useEffect } from "react"; */
import React, { useState } from "react";
import { render } from "@testing-library/react";

const RegisterForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} method='POST'>
            <div class="form-row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="small mb-1" for="name">First Name</label>
                        <input class="form-control py-4" name="name" id="name" type="text" placeholder="Enter first name" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="small mb-1" for="inputLastName">Last Name</label>
                        <input class="form-control py-4" id="inputLastName" type="text" placeholder="Enter last name" />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="small mb-1" for="email">Email</label>
                <input class="form-control py-4" name="email" id="email" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
            </div>
            <div class="form-row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="small mb-1" for="password">Password</label>
                        <input class="form-control py-4" name="password" id="password" type="password" placeholder="Enter password" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                        <input class="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password" />
                    </div>
                </div>
            </div>
            <div class="form-group mt-4 mb-0">
                <button class="btn btn-primary btn-block" type="submit">Create Accountss</button>
            </div>
        </form>
    )
}

export default RegisterForm

