import instance from '../httpClient';

interface SignUpFormData{
    email: String;
    mobileNumber: String;
    password: String;
    confirmPassword: String;
}

interface LoginFormData{
    email:String;
    mobileNumber:String;
    password: String;
}

export const SignUp = async (formData: SignUpFormData) => {
    return instance.post('/sign-up', {...formData});
};



export const LogIn = (formData: LoginFormData) => {
    return instance.post('/sign-in', {...formData});
}
