import React, { useEffect, useState } from 'react';
import { db } from './lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Toaster } from 'react-hot-toast';
import { UserForm } from './components/UserForm';

function App() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await getDocs(collection(db, 'users'));
        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      
      {/* Firebase Connection Status */}
      <div className={`w-full p-4 text-center text-white ${
        isConnected === null ? 'bg-gray-500' :
        isConnected ? 'bg-green-500' : 'bg-red-500'
      }`}>
        {isConnected === null ? 'Checking Firebase connection...' :
         isConnected ? 'Firebase Connected Successfully!' : 'Firebase Connection Failed!'}
      </div>

      <div className="container mx-auto px-4 py-8">
        <UserForm />
      </div>
    </div>
  );
}

export default App;