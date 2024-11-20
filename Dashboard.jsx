import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 5,
  });

  useEffect(() => {
    // Fetch weather data after 1 second (simulating async API call)
    setTimeout(() => {
      setWeatherData({
        temperature: '24°C',
        humidity: '65%',
        precipitation: '30%',
        wind: '12 km/h',
      });
    }, 1000);

    // Fetch users (mock data for now)
    const fetchUsers = async () => {
      const mockUsers = [
        {
          id: 1,
          username: 'john_doe',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phoneNumber: '1234567890',
          role: 'Admin',
        },
        {
          id: 2,
          username: 'jane_doe',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@example.com',
          phoneNumber: '9876543210',
          role: 'Manager',
        },
        // Add more mock data as needed
      ];
      setUsers(mockUsers);
    };

    fetchUsers();
  }, []);

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  // Chart data setup
  const chartData = {
    labels: ['Admin', 'Manager', 'Worker', 'Visitor'],
    datasets: [
      {
        label: 'Number of Users per Role',
        data: [4, 8, 15, 5],
        backgroundColor: 'rgba(139, 69, 19, 0.2)',
        borderColor: 'rgba(139, 69, 19, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <header>
        <div className='header-container'>
          <div id='logo'>FunFarm | Admin Dashboard</div>
          <ul className='navigation-menu'>
            <li>
              <a href='/admin'>Dashboard</a>
            </li>
            <li>
              <a href='/admin/crops'>Crops</a>
            </li>
            <li>
              <a href='/admin/livestock'>Livestock</a>
            </li>
          </ul>
        </div>
      </header>

      <div className='container mt-4'>
        {/* Quick Stats Row */}
        <div className='row mb-4'>
          <div className='col-md-3'>
            <div className='stats-card'>
              <h5>Active Workers</h5>
              <h3>25</h3>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='stats-card'>
              <h5>Active Crops</h5>
              <h3>8</h3>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='stats-card'>
              <h5>Livestock Count</h5>
              <h3>150</h3>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='stats-card'>
              <h5>Equipment Status</h5>
              <h3>12/15</h3>
            </div>
          </div>
        </div>

        {/* Weather Widget */}
        <div className='weather-widget mb-4'>
          <h4>Local Weather Forecast</h4>
          <div id='weather-data'>
            {weatherData ? (
              <div className='d-flex justify-content-between'>
                <div>Temperature: {weatherData.temperature}</div>
                <div>Humidity: {weatherData.humidity}</div>
                <div>Precipitation: {weatherData.precipitation}</div>
                <div>Wind: {weatherData.wind}</div>
              </div>
            ) : (
              'Loading weather data...'
            )}
          </div>
        </div>

        <div className='main-content'>
          {/* Sidebar with buttons */}
          <div className='sidebar'>
            <a href='/admin/add' className='btn'>
              Add New User
            </a>
            <a href='/admin/search' className='btn'>
              Search User
            </a>
            <a href='/admin/download/users' className='btn'>
              Download Data
            </a>
            <a href='/admin/upload/users' className='btn'>
              Upload Data
            </a>
          </div>

          {/* Main content area */}
          <div className='content-area'>
            {/* Table Panel */}
            <div className='data-panel'>
              <h3>User Management</h3>
              <table className='table table-bordered table-striped'>
                <thead className='table-dark'>
                  <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.role}</td>
                      <td>
                        <a
                          href={`/admin/users/edit/${user.id}`}
                          className='btn btn-warning btn-sm'
                        >
                          update
                        </a>
                        <form
                          action={`/admin/users/delete/${user.id}`}
                          method='post'
                          style={{ display: 'inline' }}
                        >
                          <button
                            type='submit'
                            className='btn btn-danger btn-sm'
                          >
                            Delete
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <nav aria-label='Page navigation'>
                <ul className='pagination justify-content-center'>
                  <li
                    className={`page-item ${
                      pagination.currentPage === 0 ? 'disabled' : ''
                    }`}
                  >
                    <a
                      className='page-link'
                      onClick={() =>
                        handlePageChange(pagination.currentPage - 1)
                      }
                    >
                      Previous
                    </a>
                  </li>
                  {Array.from({ length: pagination.totalPages }).map(
                    (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          pagination.currentPage === index ? 'active' : ''
                        }`}
                      >
                        <a
                          className='page-link'
                          onClick={() => handlePageChange(index)}
                        >
                          {index + 1}
                        </a>
                      </li>
                    )
                  )}
                  <li
                    className={`page-item ${
                      pagination.currentPage === pagination.totalPages - 1
                        ? 'disabled'
                        : ''
                    }`}
                  >
                    <a
                      className='page-link'
                      onClick={() =>
                        handlePageChange(pagination.currentPage + 1)
                      }
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Charts Panel */}
            <div className='chart-container'>
              <Bar
                data={chartData}
                options={{ scales: { y: { beginAtZero: true } } }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
