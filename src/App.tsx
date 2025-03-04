import { useQuery } from '@tanstack/react-query';
import './App.css';
import Header from './components/header/Header';
import MatchTable from './components/match-table/MatchTable';
import { API_URL } from './constants/api';

function App() {
  const { data: matches = [], isFetching, error, refetch } = useQuery({
    queryKey: ['matches'],
    queryFn: getMatchData,
  });

  return (
    <div className="App">
      <Header onRefresh={refetch} isLoading={isFetching} error={error?.message ?? null} />
      <MatchTable matches={matches} isLoading={isFetching} error={error?.message ?? null} />
    </div>
  );
}

const getMatchData = async () => {
  const response = await fetch(`${API_URL}/fronttemp`);
  const result = await response.json();
  
  if (!result.ok) {
    throw new Error('Failed to load matches');
  }
  
  return result.data.matches;
}

export default App;
