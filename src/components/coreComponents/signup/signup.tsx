import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { RootState, AppDispatch } from '../../../redux/app/store';
import { signupUser } from '../../../redux/feautures/auth/authSlice';
import { faEnvelope, faEye, faEyeSlash, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './signup.css';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import { Link } from "react-router-dom";


/////////////////////////////////////////////////////////
//
// Define types for Form data of Signup
//
/////////////////////////////////////////////////////////


interface SignUpFormData {
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
}


////////////////////////////////////////////////
//
// Yup schema for validation in input Fields
//
////////////////////////////////////////////////

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('This Field is required'),
    mobileNumber: yup.string().required('This Field is required').max(10,'mobile number must be 10 digit'),
    password: yup.string().required('This Field is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('This Field is required'),
});

const SignupComponent: React.FC = () => {

    // Using React hook Form for State  Management
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
        resolver: yupResolver(schema),
    });

    //////////////////////////////////////////////////////
    //
    //   implement useDispatch for redux
    //
    /////////////////////////////////////////////////////

    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, user } = useSelector((state: RootState) => state.auth);

    // manage State for password Eye Toggle
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    //////////////////////////////////////////////////////
    //
    // Submit Form Data
    //
    /////////////////////////////////////////////////////

    const onSubmit = async (formData: SignUpFormData) => {
        dispatch(signupUser(formData));
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

                        <button type="submit" disabled={loading}>
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                        {error && <p className="signup-error-message">{error}</p>}
                        {user && <p className='signup-successfully-registered-message'>Registered Successfully, {user.email}</p>}
                    </form>
                    <Link to='/user-login' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="signup-already-customer-text">Already have an account? Login here!</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignupComponent;
