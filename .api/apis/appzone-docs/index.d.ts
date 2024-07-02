import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Endpoint to create account
     *
     * @summary Create Account
     * @throws FetchError<400, types.CreateNewAccountResponse400> 400
     */
    createNewAccount(body?: types.CreateNewAccountBodyParam, metadata?: types.CreateNewAccountMetadataParam): Promise<FetchResponse<200, types.CreateNewAccountResponse200>>;
    /**
     * This creates a customer and the customer account
     *
     * @summary Create Customer and Account
     * @throws FetchError<400, types.CreateCustomerAndAccountResponse400> 400
     */
    createCustomerAndAccount(body?: types.CreateCustomerAndAccountBodyParam, metadata?: types.CreateCustomerAndAccountMetadataParam): Promise<FetchResponse<200, types.CreateCustomerAndAccountResponse200>>;
    /**
     * This updates an account tier
     *
     * @summary Update Account Tier2
     * @throws FetchError<400, types.UpdateAccountTier2Response400> 400
     */
    updateAccountTier2(body?: types.UpdateAccountTier2BodyParam, metadata?: types.UpdateAccountTier2MetadataParam): Promise<FetchResponse<200, types.UpdateAccountTier2Response200>>;
    /**
     * Balance Enquiry
     *
     * @throws FetchError<400, types.GetBankOneBalanceEnquiryResponse400> 400
     */
    getBankOneBalanceEnquiry(metadata?: types.GetBankOneBalanceEnquiryMetadataParam): Promise<FetchResponse<200, types.GetBankOneBalanceEnquiryResponse200>>;
    /**
     * Generate Account Statement
     *
     * @throws FetchError<400, types.GenerateAccountStatementResponse400> 400
     */
    generateAccountStatement(metadata?: types.GenerateAccountStatementMetadataParam): Promise<FetchResponse<200, types.GenerateAccountStatementResponse200>>;
    /**
     * This returns a list of all the account a customer has
     *
     * @summary Get Accounts by CustomerID
     * @throws FetchError<400, types.GetAccountsByCustomeridResponse400> 400
     */
    getAccountsByCustomerid(metadata?: types.GetAccountsByCustomeridMetadataParam): Promise<FetchResponse<200, types.GetAccountsByCustomeridResponse200>>;
    /**
     * Search Transactions
     *
     * @throws FetchError<400, types.SearchTransactionsResponse400> 400
     */
    searchTransactions(metadata?: types.SearchTransactionsMetadataParam): Promise<FetchResponse<200, types.SearchTransactionsResponse200>>;
    /**
     * Get Transactions
     *
     * @throws FetchError<400, types.GetTransactionsResponse400> 400
     */
    getTransactions(metadata?: types.GetTransactionsMetadataParam): Promise<FetchResponse<200, types.GetTransactionsResponse200>>;
    /**
     * Account Summary
     *
     * @throws FetchError<400, types.AccountSummaryResponse400> 400
     */
    accountSummary(metadata?: types.AccountSummaryMetadataParam): Promise<FetchResponse<200, types.AccountSummaryResponse200>>;
    /**
     * This API generates account statement in PDF, Excel, CSV
     *
     * @summary Generate Account Statement
     * @throws FetchError<400, types.GenerateAccountStatement2Response400> 400
     */
    generateAccountStatement2(metadata?: types.GenerateAccountStatement2MetadataParam): Promise<FetchResponse<200, types.GenerateAccountStatement2Response200>>;
    /**
     * This closes a customer's account
     *
     * @summary Close Account
     * @throws FetchError<400, types.CloseAccountResponse400> 400
     */
    closeAccount(metadata?: types.CloseAccountMetadataParam): Promise<FetchResponse<200, types.CloseAccountResponse200>>;
    /**
     * Endpoint to create account using few parameters
     *
     * @summary Create Account Quick
     * @throws FetchError<400, types.CreateAccountQuickResponse400> 400
     */
    createAccountQuick(body?: types.CreateAccountQuickBodyParam, metadata?: types.CreateAccountQuickMetadataParam): Promise<FetchResponse<200, types.CreateAccountQuickResponse200>>;
    /**
     * Returns account details using transaction tracking ref
     *
     * @summary Get Account by TransactionTrackingRef
     * @throws FetchError<400, types.GetTransactionsByTranstrackingrefResponse400> 400
     */
    getTransactionsByTranstrackingref(metadata?: types.GetTransactionsByTranstrackingrefMetadataParam): Promise<FetchResponse<200, types.GetTransactionsByTranstrackingrefResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
