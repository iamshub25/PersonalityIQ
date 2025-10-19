'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';


interface VideoBackgroundProps {
  videoUrl: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10" />
      <video
        ref={videoRef}
        className="absolute inset-0 min-w-full min-h-full object-cover w-auto h-auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const AuthPage = () => {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  // Form validation
  const isFormValid = () => {
    if (mode === 'forgot') {
      return email.trim() !== '';
    } else if (mode === 'login') {
      return email.trim() !== '' && password.trim() !== '';
    } else {
      return (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        email.trim() !== '' &&
        password.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        password === confirmPassword &&
        agreeTerms
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (mode === 'signup') {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authorize/register`, {
          firstName,
          lastName,
          email,
          password
        });

        console.log('Signup successful:', response.data);
        localStorage.setItem('username', `${firstName} ${lastName}`);
        await Swal.fire({
          icon: 'success',
          title: 'Account created',
          text: 'Your account was created successfully. Please sign in.',
          confirmButtonColor: '#6366F1'
        });
        // Optionally switch to login mode
        setMode('login');
      } else if (mode === 'login') {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_LOGIN_API}`, {
          username: email,
          password
        });

        console.log('Login successful:', response.data);
        localStorage.setItem('authToken', response.data.token || 'authenticated');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('username', email.split('@')[0]);
        localStorage.setItem('userData', JSON.stringify(response.data));
        
        if (remember) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
        } else {
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
        }
        
        await Swal.fire({
          icon: 'success',
          title: 'Signed in',
          text: 'Welcome back!',
          timer: 1400,
          showConfirmButton: false,
          timerProgressBar: true
        });
        router.push('/dashboard');
      } else {
        // Forgot password logic - simulate and show alert
        await new Promise(resolve => setTimeout(resolve, 1000));
        await Swal.fire({
          icon: 'success',
          title: 'Reset sent',
          text: 'If that email exists, we sent a password reset link.',
          confirmButtonColor: '#6366F1'
        });
      }
    } catch (error: unknown) {
      console.error('Request failed:', error);

      // Handle API error responses
      let errorTitle = 'Error';
      let errorMessage = 'An unexpected error occurred';

      if (axios.isAxiosError(error)) {
        const responseData = error.response?.data;
        
        if (responseData?.responseMessage) {
          // Handle specific API error codes
          if (responseData.responseCode === 401 && responseData.responseMessage.includes('ERRSIGN1001')) {
            errorTitle = 'Authentication Failed';
            errorMessage = 'Invalid username or password';
          } else {
            // Use API provided message but clean up error codes
            errorMessage = responseData.responseMessage.replace(/ERRSIGN\d+:\s?/g, '');
          }
        }
      } else if (error && typeof error === 'object' && 'message' in error) {
        errorMessage = String(error.message);
      }

      await Swal.fire({
        icon: 'error',
        title: errorTitle,
        text: errorMessage,
        confirmButtonColor: '#EF4444'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">
      {/* Left Section - Video */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <VideoBackground videoUrl="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />
        
        {/* Overlay content */}
        <div className="relative z-20 flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white">
          <div className="space-y-4 my-30">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl font-bold leading-tight"
            >
              Welcome 
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg text-white/80"
            >
              Sign in to your account and continue your journey with us.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/60">
            <span>© 2024 SecondDraft</span>
            <span className="hidden sm:inline">•</span>
            <span className='cursor-pointer hover:text-blue-400'>Privacy Policy</span>
            <span className="hidden sm:inline">•</span>
            <span className='cursor-pointer hover:text-blue-400'>Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 pt-8 sm:pt-10 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[90%] sm:max-w-md space-y-4 sm:space-y-6"
        >
          {/* Header */}
          <div className="mt-10">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center sm:text-left leading-snug"
            >
              {mode === 'login' ? 'Sign in to your account' : 
               mode === 'signup' ? 'Create your account' : 
               'Reset your password'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-gray-600 text-center sm:text-left"
            >
              {mode === 'login' ? 'Welcome back! Please enter your details.' : 
               mode === 'signup' ? 'Get started with your free account today.' :
               'Enter your email to receive a password reset link.'}
            </motion.p>
          </div>

          {/* Social Login Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://res.cloudinary.com/dyd30abcs/image/upload/v1756898373/Group_yzlxrh.png" alt="Google" className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://res.cloudinary.com/dyd30abcs/image/upload/v1756899814/facebook_bbwelq.png" alt="Facebook" className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className='w-5 h-5'>
              <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg>
            </motion.button>
          </motion.div>

          {/* Divider */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-600 bg-white px-2">or continue with email</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Auth Form */}
          <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit} 
            className="space-y-4 sm:space-y-6"
          >
            {/* Name Inputs - Only for Signup */}
            {mode === 'signup' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-900">
                    First Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                      focusedInput === 'firstName' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onFocus={() => setFocusedInput('firstName')}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full pl-10 pr-4 py-3 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all touch-manipulation"
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-900">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                      focusedInput === 'lastName' ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onFocus={() => setFocusedInput('lastName')}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-900">
                Email
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                  focusedInput === 'email' ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Input - Not for Forgot Password */}
            {mode !== 'forgot' && (
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                    focusedInput === 'password' ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Confirm Password - Only for Signup */}
            {mode === 'signup' && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                    focusedInput === 'confirmPassword' ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setFocusedInput('confirmPassword')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me & Forgot Password / Terms - Not for Forgot Password */}
            {mode !== 'forgot' && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                <div className="flex items-center space-x-2">
                  <input
                    id={mode === 'login' ? "remember" : "agreeTerms"}
                    type="checkbox"
                    checked={mode === 'login' ? remember : agreeTerms}
                    onChange={(e) => mode === 'login' ? setRemember(e.target.checked) : setAgreeTerms(e.target.checked)}
                    className="w-5 h-5 sm:w-4 sm:h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor={mode === 'login' ? "remember" : "agreeTerms"} className="text-sm text-gray-900">
                    {mode === 'login' ? 'Remember me' : 'I agree to the Terms and Privacy Policy'}
                  </label>
                </div>
                {mode === 'login' && (
                  <button 
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={isFormValid() && !isLoading ? { scale: 1.02 } : {}}
              whileTap={isFormValid() && !isLoading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isLoading || !isFormValid()}
              className={`w-full py-3.5 sm:py-3 rounded-lg text-base sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 touch-manipulation ${
                isFormValid() && !isLoading
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                  />
                ) : (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    {mode === 'login' ? 'Sign in' : 
                     mode === 'signup' ? 'Create account' : 
                     'Send Reset Link'}
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          {/* Toggle Auth Mode */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-gray-600"
          >
            {mode === 'forgot' ? (
              <button 
                type="button"
                onClick={() => setMode('login')}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                ← Back to Sign In
              </button>
            ) : (
              <>
                {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                <button 
                  type="button"
                  onClick={() => {
                    setMode(mode === 'login' ? 'signup' : 'login')
                    setIsLogin(mode !== 'login')
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer"
                >
                  {mode === 'login' ? 'Sign up for free' : 'Sign in'}
                </button>
              </>
            )}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;