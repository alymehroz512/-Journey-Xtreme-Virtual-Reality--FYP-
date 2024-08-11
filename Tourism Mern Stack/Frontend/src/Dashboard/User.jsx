import React, { useState, useEffect } from 'react';
import axios from 'axios';
function User() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Fetch users data from the API endpoint
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/users/users');
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);
  
    return (
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-m font-medium uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-m font-medium uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-m font-medium uppercase tracking-wider">Number</th>
            </tr>
          </thead>
          <tbody className="bg-slate-700 divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-900">
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default User;