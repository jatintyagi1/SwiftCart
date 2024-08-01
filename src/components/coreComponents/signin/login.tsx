import './login.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { LogIn } from '../../../services/customer.service';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Define Yup schema for validation
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    // Hook form for state management
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData: { email: string; password: string; }) => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Login successful');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <Navbar/>
           <div className="login-page-wrapper">
            <div className='login-container-wrapper'>
                <h1 className='customer-login-text'>Login</h1>
                <form className='login-form-container' onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-input-group">
                        <FontAwesomeIcon icon={faEnvelope} className="login-input-icon" />
                        <input
                            type='text'
                            placeholder='Enter Email/Mobile Number'
                            {...register('email')}
                        />
                    </div>
                    {errors.email && <p className="error-message">{errors.email.message}</p>}

                    <div className="login-input-group">
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="login-input-icon toggle-password" onClick={() => setShowPassword(!showPassword)} />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter password'
                            {...register('password')}
                        />
                    </div>
                    {errors.password && <p className="error-message">{errors.password.message}</p>}

                    <button type="submit">Login</button>
                </form>
                <p className='login-forgot-password-text'>Forgot Password?</p>
         <Link to='/sign-up' style={{textDecoration:'none'}}><p className='login-new-account-text'>New to Swiftcart? Create an account.</p></Link>
            </div>
        </div>
        <Footer/>
    </div>
    );
};

export default Login;
