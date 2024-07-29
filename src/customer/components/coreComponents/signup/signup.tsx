import { faEnvelope, faEye, faEyeSlash, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './signup.css';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import { Link } from "react-router-dom";
import { SignUp } from "../../../../services/customer.service";

// Define a TypeScript interface for form data
interface SignUpFormData {
    email: string;
    mobileNumber: string; // Changed from 'phone' to 'mobileNumber'
    password: string;
    confirmPassword: string;
}

// Yup schema for validation
const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    mobileNumber: yup.string().required('Mobile number is required'), // Updated from 'phone' to 'mobileNumber'
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
});

const SignupComponent = () => {
    // Hook form for state management
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
        resolver: yupResolver(schema),
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = async (formData: SignUpFormData) => {
        try {
            const response = await SignUp(formData);
            console.log('User Signed Up Successfully:', response);
            if (response.status === 200) {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
              }  
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="signup-page-wrapper">
                <div className="signup-container-wrapper">
                    <h1 className="customer-signup-text">Sign Up</h1>
                    <form className="signup-form-container" onSubmit={handleSubmit(onSubmit)}>
                        <div className="signup-input-group">
                            <FontAwesomeIcon icon={faEnvelope} className="signup-input-icon" />
                            <input
                                type="email"
                                placeholder="Enter Email"
                                {...register('email')}
                            />
                            {errors.email && <p className="signup-error-message">{errors.email.message}</p>}
                        </div>

                        <div className="signup-input-group">
                            <FontAwesomeIcon icon={faPhone} className="signup-input-icon" />
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                {...register('mobileNumber')}
                            />
                            {errors.mobileNumber && <p className="signup-error-message">{errors.mobileNumber.message}</p>}
                        </div>

                        <div className="signup-input-group">
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="signup-input-icon toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Password"
                                {...register('password')}
                            />
                            {errors.password && <p className="signup-error-message">{errors.password.message}</p>}
                        </div>

                        <div className="signup-input-group">
                            <FontAwesomeIcon
                                icon={showConfirmPassword ? faEyeSlash : faEye}
                                className="signup-input-icon toggle-password"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && <p className="signup-error-message">{errors.confirmPassword.message}</p>}
                        </div>

                        <button type="submit">Sign Up</button>
                    </form>
                    <Link
                        to='/user-login' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="signup-already-customer-text">Already have account? Login here!</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignupComponent;
