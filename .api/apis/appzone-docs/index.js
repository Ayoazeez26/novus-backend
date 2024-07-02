"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'appzone-docs/unknown (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Endpoint to create account
     *
     * @summary Create Account
     * @throws FetchError<400, types.CreateNewAccountResponse400> 400
     */
    SDK.prototype.createNewAccount = function (body, metadata) {
        return this.core.fetch('/CreateAccount/undefined', 'post', body, metadata);
    };
    /**
     * This creates a customer and the customer account
     *
     * @summary Create Customer and Account
     * @throws FetchError<400, types.CreateCustomerAndAccountResponse400> 400
     */
    SDK.prototype.createCustomerAndAccount = function (body, metadata) {
        return this.core.fetch('/CreateCustomerAndAccount/undefined', 'post', body, metadata);
    };
    /**
     * This updates an account tier
     *
     * @summary Update Account Tier2
     * @throws FetchError<400, types.UpdateAccountTier2Response400> 400
     */
    SDK.prototype.updateAccountTier2 = function (body, metadata) {
        return this.core.fetch('/UpdateAccountTier2/undefined', 'post', body, metadata);
    };
    /**
     * Balance Enquiry
     *
     * @throws FetchError<400, types.GetBankOneBalanceEnquiryResponse400> 400
     */
    SDK.prototype.getBankOneBalanceEnquiry = function (metadata) {
        return this.core.fetch('/GetAccountByAccountNumber/undefined', 'get', metadata);
    };
    /**
     * Generate Account Statement
     *
     * @throws FetchError<400, types.GenerateAccountStatementResponse400> 400
     */
    SDK.prototype.generateAccountStatement = function (metadata) {
        return this.core.fetch('/GenerateAccountStatement2/2', 'get', metadata);
    };
    /**
     * This returns a list of all the account a customer has
     *
     * @summary Get Accounts by CustomerID
     * @throws FetchError<400, types.GetAccountsByCustomeridResponse400> 400
     */
    SDK.prototype.getAccountsByCustomerid = function (metadata) {
        return this.core.fetch('/GetAccountsByCustomerId/undefined', 'get', metadata);
    };
    /**
     * Search Transactions
     *
     * @throws FetchError<400, types.SearchTransactionsResponse400> 400
     */
    SDK.prototype.searchTransactions = function (metadata) {
        return this.core.fetch('/SearchTransactions', 'get', metadata);
    };
    /**
     * Get Transactions
     *
     * @throws FetchError<400, types.GetTransactionsResponse400> 400
     */
    SDK.prototype.getTransactions = function (metadata) {
        return this.core.fetch('/GetTransactions/undefined', 'get', metadata);
    };
    /**
     * Account Summary
     *
     * @throws FetchError<400, types.AccountSummaryResponse400> 400
     */
    SDK.prototype.accountSummary = function (metadata) {
        return this.core.fetch('/GetAccountSummary/undefined', 'get', metadata);
    };
    /**
     * This API generates account statement in PDF, Excel, CSV
     *
     * @summary Generate Account Statement
     * @throws FetchError<400, types.GenerateAccountStatement2Response400> 400
     */
    SDK.prototype.generateAccountStatement2 = function (metadata) {
        return this.core.fetch('/GenerateAccountStatement2/undefined', 'get', metadata);
    };
    /**
     * This closes a customer's account
     *
     * @summary Close Account
     * @throws FetchError<400, types.CloseAccountResponse400> 400
     */
    SDK.prototype.closeAccount = function (metadata) {
        return this.core.fetch('/CloseAccount/undefined', 'post', metadata);
    };
    /**
     * Endpoint to create account using few parameters
     *
     * @summary Create Account Quick
     * @throws FetchError<400, types.CreateAccountQuickResponse400> 400
     */
    SDK.prototype.createAccountQuick = function (body, metadata) {
        return this.core.fetch('/CreateAccountQuick/undefined', 'post', body, metadata);
    };
    /**
     * Returns account details using transaction tracking ref
     *
     * @summary Get Account by TransactionTrackingRef
     * @throws FetchError<400, types.GetTransactionsByTranstrackingrefResponse400> 400
     */
    SDK.prototype.getTransactionsByTranstrackingref = function (metadata) {
        return this.core.fetch('/GetAccountByTransactionTrackingRef/undefined', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
