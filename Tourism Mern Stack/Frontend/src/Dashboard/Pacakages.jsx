import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Packages() {
  const [packagesData, setPackagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPackage, setNewPackage] = useState({
    name: '',
    description: '',
    price: '',
    image:'', 
    duration: ''
    
  });

  

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/package/packages');
      setPackagesData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching packages:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage({ ...newPackage, [name]: value });
  };

  const addPackage = async () => {
    try {
      await axios.post('http://localhost:5000/api/package/packages', newPackage);
      setNewPackage({ name: '', description: '', price: '',image: '',
      duration: '' }); // Reset form fields after adding
      fetchPackages();
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  const deletePackage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/package/packages/${id}`);
      fetchPackages();
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  // You can add updatePackage function similar to deletePackage

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-4">Tour Packages</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Form to add a new package */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={newPackage.name}
              placeholder="Package Name"
              onChange={handleInputChange}
              className="mr-2 p-2 border text-black border-gray-400 rounded"
            />
            <input
              type="text"
              name="description"
              value={newPackage.description}
              placeholder="Description"
              onChange={handleInputChange}
              className="mr-2 p-2 text-black border border-gray-400 rounded"
            />
            <input
              type="text"
              name="price"
              value={newPackage.price}
              placeholder="Price"
              onChange={handleInputChange}
              className="mr-2 p-2 text-black border border-gray-400 rounded"
            /> <input
            type="text"
            name="image"
            value={newPackage.image}
            placeholder="Image URL"
            onChange={handleInputChange}
            className="mr-2 p-2 text-black border border-gray-400 rounded"
          />
          <input
            type="text"
            name="duration"
            value={newPackage.duration}
            placeholder="Duration"
            onChange={handleInputChange}
            className="mr-2 p-2 text-black border border-gray-400 rounded"
          />
            <button onClick={addPackage} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Package</button>
          </div>
          {/* Table to display packages */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-800 text-m text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium">Actions</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {packagesData.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-4  text-center">No packages available</td>
                  </tr>
                ) : (
                  packagesData.map((pkg) => (
                    <tr className='bg-slate-700' key={pkg._id}>
                      <td className="px-6 py-4 whitespace-nowrap">{pkg.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{pkg.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{pkg.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button onClick={() => deletePackage(pkg._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2">Delete</button>
                        {/* Add edit button and functionality as needed */}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Packages;
