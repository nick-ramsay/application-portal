import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production'? '' : '//localhost:3001'

export default {
    sendTestEmail: function(messageInfo) {
        console.log("Called send test email API...");
        return axios({method:"post", url: apiURL + "/api/application-portal/send-test-email", data: [messageInfo]});
    },
    createAccount: function (newAccountInfo) {
        console.log("Called create accounts API...");
        console.log(newAccountInfo);
        return axios({method:"post", url: apiURL + "/api/application-portal/create-account", data: newAccountInfo})
    }
    /*
    getAccountData: function (contextID) {
        console.log("Called get customers API");
        return axios({method:"post", url: apiURL + "/api/crafter/get-account-data", data: contextID});
    },
    editAccount: function (editedAccountInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/edit-account", data: editedAccountInfo})
    },
    login: function(credentials) {
        return axios({method:"post", url: apiURL + "/api/crafter/login", data: credentials})
    },
    //START: Customer API calls...
    getCustomers: function (contextID) {
        console.log("Called get customers API");
        return axios({method:"post", url: apiURL + "/api/crafter/get-customers", data: contextID});
    },
    createCustomer: function (newCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/create-customer", data: newCustomerInfo})
    },
    editCustomer: function (editedCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/edit-customer", data: editedCustomerInfo})
    },
    cancelCustomer: function (cancelledCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/cancel-customer", data: cancelledCustomerInfo})
    },
    reactivateCustomer: function (reactivateCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/reactivate-customer", data: reactivateCustomerInfo})
    },
    //END: ... Customer API Calls
    //START: Inventory API Calls...

    createInventoryItem: function (newInventoryItemInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/create-inventory-item", data: newInventoryItemInfo})
    },
    editInventory: function (editedInventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/edit-inventory", data: editedInventoryInfo})
    },
    inventoryTransaction: function (inventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/inventory-transaction", data: inventoryInfo})
    },
    getInventory: function (contextID) {
        console.log("Called get-inventory API");
        return axios({method:"post", url: apiURL + "/api/crafter/get-inventory", data: contextID});
    },
    cancelInventory: function (cancelledInventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/cancel-inventory", data: cancelledInventoryInfo})
    },
    reactivateInventory: function (reactivateInventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/reactivate-inventory", data: reactivateInventoryInfo})
    },

    //END: ... Inventory API Calls

    //START: Transaction API calls ...

    getTransactions: function (contextID) {
        console.log("Called get customers API");
        return axios({method:"post", url: apiURL + "/api/crafter/get-transactions", data: contextID});
    },

    postTransaction: function (transactionInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/post-transaction", data: transactionInfo})
    },

    //END: Transaction API Calls

    //START: Transaction API calls

    createProject: function (projectInfo) {
        console.log("Called create project API");
        return axios({method:"post", url: apiURL + "/api/crafter/create-project", data: projectInfo})
    },
    getProjects: function (contextID) {
        console.log("Called get-project API");
        return axios({method:"post", url: apiURL + "/api/crafter/get-projects", data: contextID});
    },
    editProject: function (editProjectInfo) {
        console.log("Called create project API");
        return axios({method:"post", url: apiURL + "/api/crafter/edit-project", data: editProjectInfo})
    },
    getCompleteProjects: function (contextID) {
        console.log("Called get-project API");
        return axios({method:"post", url: apiURL + "/api/crafter/get-complete-projects", data: contextID});
    },
    markProjectBilled: function(projectBillData) {
        console.log("Called mark-project-billed");
        return axios({method:"post", url: apiURL + "/api/crafter/mark-project-billed", data: projectBillData});
    },
    //END: Transaction API Calls

    //START: Billing API Calls...
    getBillData: function (contextID) {
        console.log("Called get-bill API");
        return axios({method:"post", url: apiURL + "/api/crafter/get-bills", data: contextID});
    },
    createBill: function (billInfo) {
        console.log("Called create bill API");
        return axios({method:"post", url: apiURL + "/api/crafter/create-bill", data: billInfo})
    },
    billTransaction: function (billTransactionInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/bill-transaction", data: billTransactionInfo})
    }

    //END: ... Billing API Calls
    */
};