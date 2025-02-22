import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        businessName: '',
        ownerName: '',
        numberOfStaff: '',
        contactDetails: { mobileNumber: '', email: '' },
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required />
            <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} required />
            <input type="number" name="numberOfStaff" placeholder="Number of Staff" onChange={handleChange} required />
            <input type="text" name="contactDetails.mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />
            <input type="email" name="contactDetails.email" placeholder="Email (optional)" onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;
