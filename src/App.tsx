import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MatchTable from './components/MatchTable';
import { Match } from './types/match';

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://app.ftoyd.com/fronttemp-service/fronttemp');
      const result = await response.json();
      
      if (result.ok) {
        setMatches(result.data.matches);
      } else {
        setError('Failed to load matches');
      }
    } catch (err) {
      setError('Failed to fetch matches');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <div className="App">
      <Header onRefresh={fetchMatchData} isLoading={isLoading} error={error} />
      <MatchTable matches={matches} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
