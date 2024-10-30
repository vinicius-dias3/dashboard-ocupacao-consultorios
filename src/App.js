import React from 'react';
import './App.css';
import Dashboard from '/components/Dashboard/Dashboard'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client ={queryClient}>
      <Dashboard className="Dashboard" />
      </QueryClientProvider>
    </>
  );
}

export default App;
