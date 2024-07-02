declare const AccountSummary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authToken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Authorization token for this request";
                };
                readonly accountNumber: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The customer account you want to get a summary of";
                };
                readonly institutionCode: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Unique code to identify your institution";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CloseAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authtoken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Authorization token for this request";
                };
                readonly accountNumber: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Customers account number";
                };
                readonly narration: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Closing account narration";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CreateAccountQuick: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly TransactionTrackingRef: {
                readonly type: "string";
                readonly description: "A way to track an account that has already been created";
            };
            readonly AccountOpeningTrackingRef: {
                readonly type: "string";
                readonly description: "A tracking reference tied to this account";
            };
            readonly ProductCode: {
                readonly type: "string";
                readonly description: "Account unique product code";
            };
            readonly CustomerID: {
                readonly type: "string";
                readonly description: "Customer ID for existing customer";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Customer's last name";
            };
            readonly OtherNames: {
                readonly type: "string";
                readonly description: "Customer's other names";
            };
            readonly BVN: {
                readonly type: "string";
                readonly description: "Customer's BVN";
            };
            readonly PhoneNo: {
                readonly type: "string";
                readonly description: "Customer's phone number";
            };
            readonly Gender: {
                readonly type: "integer";
                readonly description: "Customer's gender, Male - 0; Female - 1";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly PlaceOfBirth: {
                readonly type: "string";
                readonly description: "Customer's place of birth";
            };
            readonly DateOfBirth: {
                readonly type: "string";
                readonly description: "Customer's date of birth";
            };
            readonly Address: {
                readonly type: "string";
                readonly description: "Customer's address";
            };
            readonly AccountOfficerCode: {
                readonly type: "string";
                readonly description: "Gotten from API response GetAccountOfficer";
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Customer's email";
            };
            readonly NotificationPreference: {
                readonly type: "integer";
                readonly description: "Customer's preferred notification method";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly TransactionPermission: {
                readonly type: "string";
                readonly description: "Customer's transaction permission";
            };
            readonly AccountTier: {
                readonly type: "string";
                readonly description: "Account tier";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authToken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Authorization token for this request";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Payload: {
                    readonly type: "object";
                    readonly properties: {
                        readonly AccountNumber: {
                            readonly type: "string";
                            readonly examples: readonly ["00550012000001820"];
                        };
                        readonly CustomerID: {
                            readonly type: "string";
                            readonly examples: readonly ["001820"];
                        };
                        readonly FullName: {
                            readonly type: "string";
                            readonly examples: readonly ["Odu David"];
                        };
                        readonly CreationMessage: {};
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly HasErrors: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly Code: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly Description: {
                    readonly type: "string";
                    readonly examples: readonly ["SUCCESS"];
                };
                readonly IsSuccessful: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CreateCustomerAndAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly TransactionTrackingRef: {
                readonly type: "string";
                readonly description: "A way to track that an account has already been created";
            };
            readonly AccountOpeningTrackingRef: {
                readonly type: "string";
                readonly description: "A tracking reference tied to the account";
            };
            readonly ProductCode: {
                readonly type: "string";
                readonly description: "Account unique product code";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Customer's Last Name";
            };
            readonly OtherNames: {
                readonly type: "string";
                readonly description: "Customer's Other Name";
            };
            readonly BVN: {
                readonly type: "string";
                readonly description: "Customer's BVN";
            };
            readonly PhoneNo: {
                readonly type: "string";
                readonly description: "Customer's Phone Number";
            };
            readonly Gender: {
                readonly type: "string";
                readonly description: "Customer's Gender";
            };
            readonly PlaceOfBirth: {
                readonly type: "string";
                readonly description: "Customer's Place Of Birth";
            };
            readonly DateOfBirth: {
                readonly type: "string";
                readonly description: "Customer's Date Of Birth";
            };
            readonly Address: {
                readonly type: "string";
                readonly description: "Customer's Address";
            };
            readonly NationalIdentityNo: {
                readonly type: "string";
                readonly description: "Customer's National Identity Number";
            };
            readonly NextOfKinPhoneNo: {
                readonly type: "string";
                readonly description: "Customer's Next Of Kin Number";
            };
            readonly NextOfKinName: {
                readonly type: "string";
                readonly description: "Customer's Next Of Kin Name";
            };
            readonly ReferralPhoneNo: {
                readonly type: "string";
                readonly description: "Number of who referred the customer";
            };
            readonly ReferralName: {
                readonly type: "string";
                readonly description: "Name of who referred the customer";
            };
            readonly HasSufficientInfoOnAccountInfo: {
                readonly type: "boolean";
                readonly description: "Checks If Customer Has Sufficient Account Information";
            };
            readonly AccountInformationSource: {
                readonly type: "integer";
                readonly description: "How the customer got to know about the institution";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly OtherAccountInformationSource: {
                readonly type: "string";
                readonly description: "Customer's Other Account Information Source";
            };
            readonly AccountOfficerCode: {
                readonly type: "string";
                readonly description: "Customer's Account Officer Code";
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Customer's Email";
            };
            readonly NotificationPreference: {
                readonly type: "string";
                readonly description: "Customer's preferred notification method";
            };
            readonly TransactionPermission: {
                readonly type: "string";
                readonly description: "Customer's Transaction Permission";
            };
            readonly AccountTier: {
                readonly type: "integer";
                readonly description: "Account Tier";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly CustomerImage: {
                readonly type: "string";
                readonly description: "Customer image is passed as Base64";
                readonly default: "Base64";
            };
            readonly CustomerSignature: {
                readonly type: "string";
                readonly description: "Customer's signature";
                readonly default: "Base64";
            };
            readonly IdentificationImage: {
                readonly type: "string";
                readonly description: "Customer's means of identification";
                readonly default: "Base64";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authToken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Authorization token for this request";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CreateNewAccount: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly TransactionTrackingRef: {
                readonly type: "string";
                readonly description: "A way to track an account that has already been created";
            };
            readonly AccountOpeningTrackingRef: {
                readonly type: "string";
                readonly description: "A tracking reference tied to this account";
            };
            readonly ProductCode: {
                readonly type: "string";
                readonly description: "Account unique product code";
            };
            readonly LastName: {
                readonly type: "string";
                readonly description: "Customer's last name";
            };
            readonly OtherNames: {
                readonly type: "string";
                readonly description: "Customer's other names";
            };
            readonly BVN: {
                readonly type: "string";
                readonly description: "Customer's BVN";
            };
            readonly PhoneNo: {
                readonly type: "string";
                readonly description: "Customer's phone number";
            };
            readonly Gender: {
                readonly type: "string";
                readonly description: "Customer's phone gender";
            };
            readonly PlaceOfBirth: {
                readonly type: "string";
                readonly description: "Customer's place of birth";
            };
            readonly DateOfBirth: {
                readonly type: "string";
                readonly description: "Customer's date of birth";
            };
            readonly Address: {
                readonly type: "string";
                readonly description: "Customer's address";
            };
            readonly NationalIdentityNo: {
                readonly type: "string";
                readonly description: "Customer's NIN";
            };
            readonly NextofKinPhoneNo: {
                readonly type: "string";
                readonly description: "Customer's next of kin phone number";
            };
            readonly HassufficientInfoOnAccountInfo: {
                readonly type: "boolean";
                readonly description: "Checks if the account has sufficient information";
            };
            readonly AccountOfficerCode: {
                readonly type: "string";
                readonly description: "Gotten from API response GetAccountOfficer";
            };
            readonly AccountInformationSource: {
                readonly type: "integer";
                readonly description: "How the customer got to know about the institution";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly Email: {
                readonly type: "string";
                readonly description: "Customer's email";
            };
            readonly NotificationPreference: {
                readonly type: "integer";
                readonly description: "Customer's preferred notification method";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly TransactionPermission: {
                readonly type: "string";
                readonly description: "Customer's transaction permission";
            };
            readonly AccountTier: {
                readonly type: "string";
                readonly description: "Account tier";
            };
            readonly FirstName: {
                readonly type: "string";
                readonly description: "Customer's first name";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authToken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Authorization token for this request";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly Payload: {
                    readonly type: "object";
                    readonly properties: {
                        readonly AccountNumber: {
                            readonly type: "string";
                            readonly examples: readonly ["00550012000001820"];
                        };
                        readonly CustomerID: {
                            readonly type: "string";
                            readonly examples: readonly ["001820"];
                        };
                        readonly FullName: {
                            readonly type: "string";
                            readonly examples: readonly ["Odu David"];
                        };
                        readonly CreationMessage: {};
                    };
                };
                readonly Errors: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly HasErrors: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly Code: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly Description: {
                    readonly type: "string";
                    readonly examples: readonly ["SUCCESS"];
                };
                readonly IsSuccessful: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GenerateAccountStatement: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly accountNumber: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Customer's account number";
                };
                readonly fromDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start date of statement you want to generate";
                };
                readonly toDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End date of statement you want to generate";
                };
                readonly isPdf: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Checks if you want statement in pdf";
                };
                readonly arrangeAsc: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Check's if you want statement in ascending order";
                };
                readonly showSerialNumber: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly showTransactionDate: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly showReversedTransactions: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly showInstrumentNumber: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly authtoken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly institutionCode: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GenerateAccountStatement2: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authtoken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "authorisation token";
                };
                readonly accountNumber: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The customer account number";
                };
                readonly fromDate: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Transaction start date";
                };
                readonly toDate: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The transaction end date";
                };
                readonly isPdf: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Specify if you want file in pdf";
                };
                readonly arrangeAsc: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Use true or false to set the arrangement order, default is false";
                };
                readonly showSerialNumber: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Optional. Use true or false, the default is false";
                };
                readonly showTransactionDate: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Optional. Use true or false, the default is true";
                };
                readonly showReversedTransactions: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Optional. Use true or false, the default is false";
                };
                readonly showInstrumentNumber: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Optional. Use true or false, the default is false";
                };
                readonly institutionCode: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The Specific Institution Code.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetAccountsByCustomerid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customerId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly authToken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetBankOneBalanceEnquiry: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authtoken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly accountNumber: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Customer's account number";
                };
                readonly computewithdrawableBalance: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authtoken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly accountNumber: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly fromDate: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "dd-mm-yyyy";
                };
                readonly toDate: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "dd-mm-yyyy";
                };
                readonly numberOfItems: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetTransactionsByTranstrackingref: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authtoken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly transactionTrackingRef: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "TransactionRef of the transaction";
                };
                readonly computewithdrawableBalance: {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Displays withdrawable balance or not";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SearchTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly accountNumber: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly fromDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly toDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly institutionCode: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly numberOfItems: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly authtoken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateAccountTier2: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly AccountNumber: {
                readonly type: "string";
                readonly description: "Customer's account number";
            };
            readonly AccountTier: {
                readonly type: "string";
                readonly description: "New account tier you want to update account to";
            };
            readonly SkipAddressVerification: {
                readonly type: "boolean";
                readonly description: "Checks if the customer address is verified";
            };
            readonly CustomerID: {
                readonly type: "string";
                readonly description: "Customer's Identification  Number";
            };
            readonly FullName: {
                readonly type: "string";
                readonly description: "Customer's Fullname";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authToken: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Authorization token for this request";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { AccountSummary, CloseAccount, CreateAccountQuick, CreateCustomerAndAccount, CreateNewAccount, GenerateAccountStatement, GenerateAccountStatement2, GetAccountsByCustomerid, GetBankOneBalanceEnquiry, GetTransactions, GetTransactionsByTranstrackingref, SearchTransactions, UpdateAccountTier2 };
