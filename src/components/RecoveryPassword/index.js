/* import React, { useState, useEffect } from "react"; */
import React, { useState } from "react";
import UserService from "../../services/UserService"
import ConfirmationForm from "./confirmationForm"
import RecoveryForm from "./recoveryForm"
import newPasswordForm from "./newPasswordForm"
import { Link } from "react-router-dom"
import NewPasswordForm from "./newPasswordForm";

const Index = (props) => {

    const [step, setStep] = useState(0)
    const [userId, setUserId] = useState('')
    const [token, setToken] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        var formData = {
            email: e.target.email.value,
        }

        UserService.recoveryPassword(formData).then((response) => {
            if (response) {
                alert('Email de recuperação enviado com sucesso')
                setUserId(response.data.userId)
                setStep(1)
            } else {
                alert('erro ao enviar email de recuperação')
            }
        })
    }

    const handleSubmitToken = (e) => {
        e.preventDefault()
        var formData = {
            userId: userId,
            token: e.target.token.value
        }

        UserService.activeToken(formData).then((response) => {
            console.log(response)
            if (response) {
                alert('usuario encontrado')
                setUserId(formData.userId)
                setToken(formData.token)
                setStep(2)
            } else {
                alert('usuario não encontrado')
            }
        })
    }

    const handleSubmitNewPassword = (e) => {
        e.preventDefault()
        var formData = {
            userId: userId,
            token: token,
            password: e.target.newPassword.value
        }

        UserService.changePassword(formData).then((response) => {
            if (response) {
                alert('Senha trocada com sucesso')
                window.location.href = "/login";
            } else {
                alert('senha não alterada')
            }
        })
    }

    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Page Title - SB Admin</title>
                <link href="css/styles.css" rel="stylesheet" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
            </head>
            <body class="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-5">
                                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Password Recovery</h3></div>
                                            <div class="card-body">
                                                {step === 0 ?
                                                    <RecoveryForm handleSubmit={(e) => handleSubmit(e)} />
                                                    : step === 1 ?
                                                    <ConfirmationForm handleSubmitToken={(e) => handleSubmitToken(e)} userId={userId} />
                                                    :
                                                    <NewPasswordForm handleSubmitNewPassword={(e) => handleSubmitNewPassword(e)} userId={userId} token={token} />
                                                }
                                            </div>
                                            <div class="card-footer text-center">
                                                <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        <footer class="py-4 bg-light mt-auto">
                            <div class="container-fluid">
                                <div class="d-flex align-items-center justify-content-between small">
                                    <div class="text-muted">Copyright &copy; Your Website 2020</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
                <script src="js/scripts.js"></script>
            </body>
        </html>
    )
}

export default Index