import { Standing } from "../../../services/football/types/raw";
import StandingsHeader from "./StandingsHeader";
import "./Standings.css";

type Props = {
  standings: Array<Standing>;
};

const Standings = ({ standings }: Props) => (
  <div>
    <StandingsHeader />
    <table className="overflow-scroll min-w-full text-sm text-center">
      <thead className="uppercase bg-gray-200">
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>MP</th>
          <th className="w-8">W</th>
          <th className="w-8">D</th>
          <th className="w-8">L</th>
          <th className="w-16">G</th>
          <th className="w-16">Pts</th>
          <th className="w-0">Form</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {standings.map((standing) => (
          <tr key={standing.team.id} className="standing-row">
            <td>{standing.rank}.</td>
            <td className="flex items-center">
              <img className="h-8" src={standing.team.logo} />
              <p className="ml-2">{standing.team.name}</p>
            </td>

            <td>{standing.all.played}</td>
            <td>{standing.all.win}</td>
            <td>{standing.all.draw}</td>
            <td>{standing.all.lose}</td>
            <td>
              {standing.all.goals.for}:{standing.all.goals.against}
            </td>

            <td>{standing.points}</td>

            <td>{standing.form}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Standings;