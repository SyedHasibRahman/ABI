import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://still-bastion-57482.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
};

export default useServices;