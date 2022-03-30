import React from 'react'
import {  Navigate } from 'react-router-dom';

export default function ProtectedPage({user }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>ProtectedPage</div>
  )
}
