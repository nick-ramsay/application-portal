import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3001'

export default {
    sendTestEmail: function (messageInfo) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/send-test-email", data: [messageInfo] });
    },
    createAccount: function (newAccountInfo) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/create-account", data: newAccountInfo })
    },
    checkExistingAccountEmails: function (email) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/check-existing-account-emails", data: [email] });
    },
    setEmailResetCode: function (email, generatedResetToken) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/reset-password-request", data: [email, generatedResetToken] });
    },
    checkEmailAndResetToken: function (email, resetToken) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/check-email-and-reset-token", data: {email:email, resetToken:resetToken} });
    },
    resetPassword: function (email, newPassword) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/reset-password", data: {email: email, newPassword: newPassword} });
    },
    login: function (email, password) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/reset-login", data: {email: email, password: password} });
    },
    setSessionAccessToken: function (id, sessionAccessToken) {
        return axios({ method: "post", url: apiURL + "/api/application-portal/set-session-access-token", data: {id: id, sessionAccessToken: sessionAccessToken} });
    }
};