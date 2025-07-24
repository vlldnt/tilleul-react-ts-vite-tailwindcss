import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-lime-600">
          Projet Tilleul 🌿 (React + TS + Vite + Tailwind v3)
        </h1>
      </div>
    </div>
  );
}

export default App;
