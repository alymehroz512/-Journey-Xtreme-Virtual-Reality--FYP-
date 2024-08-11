import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('token');
    if (!login) {
      navigate('/login');
    }
  }); 

  return (
    <div>
      {props.children}
    </div>
  );
}
