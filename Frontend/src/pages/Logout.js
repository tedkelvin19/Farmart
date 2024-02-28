import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const Logout = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const adminLogout = async () => {
            const token = Cookies.get('jwt');
            console.log('===>' + token);
            try {
                const res = await fetch('https://farm-jqcq.onrender.com/farm/logout/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'Cache-Control': 'no-cache', // Prevent caching
                        'Pragma': 'no-cache',
                    },
                });
                const data = await res.json();
                if (res.status === 201) {
                    setShow(true);
                    await Cookies.remove('jwt');;
                    window.alert('Successfully Logout');
                    navigate('/sign-in', { replace: true });
                    window.location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        };

        const confirmBox = window.confirm("Do you really want to Logout?");
        const handleLogout = async () => {
            if (confirmBox === true) {
                await adminLogout();
                Cookies.remove('jwt');;
                navigate('/', { replace: true });
            } else {
                navigate('/');
            }
        };

        handleLogout();
    }, [navigate]); 

    
    return (
        <div>
            <h1>{show ? 'Logout Successfully!' : 'processing...'}</h1>
        </div>
    );
};

export default Logout;