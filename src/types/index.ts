

// Customer Signup Types
export interface SignUpFormData{
    email: String;
    mobileNumber: String;
    password: String;
    confirmPassword: String;
}

// customer Login Types  ( import in customer.service..ts file )
export interface LoginFormData {
    identifier: string; // This can be either email or mobileNumber
    password: string;
}