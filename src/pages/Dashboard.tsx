import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { UsersList } from '../components/dashboard/UsersList';
import { AddUser } from '../components/dashboard/AddUser';
import { UserForm } from '../components/forms/UserForm';

export const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user-form" element={<UserForm />} />
        </Routes>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard</h1>
      <p className="text-gray-600">Select an option from the sidebar to get started.</p>
    </div>
  );
};