import FootballResults from "./features/football/FootballResults/FootballResults";

function App() {
  return (
    <div className="flex flex-col items-center px-2 py-8 font-extralight bg-gradient-to-tr from-emerald-500 to-lime-100 md:px-32">
      <h1 className="text-4xl font-thin text-center">Football Results</h1>
      <FootballResults />
    </div>
  );
}

export default App;
