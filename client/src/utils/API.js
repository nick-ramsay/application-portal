import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3001'

export default {
    sendTestEmail: function (messageInfo) {
        console.log("Called send test email API...");
        return axios({ method: "post", url: apiURL + "/api/application-portal/send-test-email", data: [messageInfo] });
    },
    createAccount: function (newAccountInfo) {
        console.log("Called create accounts API...");
        console.log(newAccountInfo);
        return axios({ method: "post", url: apiURL + "/api/application-portal/create-account", data: newAccountInfo })
    },
    checkExistingAccountEmails: function (email) {
        console.log(email);
        console.log("Called get check emails API");
        return axios({ method: "post", url: apiURL + "/api/application-portal/check-existing-account-emails", data: [email] });
    },
    setEmailResetCode: function (email, generatedResetToken) {
        console.log(email);
        console.log(generatedResetToken);
        console.log("Called get check emails API");
        return axios({ method: "post", url: apiURL + "/api/application-portal/reset-password-request", data: [email, generatedResetToken] });
    },
    checkEmailAndResetToken: function (email, resetToken) {
        console.log(email);
        console.log(resetToken);
        console.log("Called get check emails and reset token API");
        return axios({ method: "post", url: apiURL + "/api/application-portal/check-email-and-reset-token", data: {email:email, resetToken:resetToken} });
    },
    resetPassword: function (email, newPassword) {
        console.log(email);
        console.log(newPassword);
        console.log("Called get check emails and reset token API");
        return axios({ method: "post", url: apiURL + "/api/application-portal/reset-password", data: {email: email, newPassword: newPassword} });
    }
};