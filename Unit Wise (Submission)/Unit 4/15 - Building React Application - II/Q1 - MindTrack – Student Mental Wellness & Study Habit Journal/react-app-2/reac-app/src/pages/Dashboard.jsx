import DailyLogForm from "../components/DailyLogForm";
import Heatmap from "../components/Heatmap";
import InsightEngine from "../components/InsightEngine";
import ReflectionList from "../components/ReflectionList.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to MindTrack
      </h1>

      <DailyLogForm />
      <Heatmap />
      <InsightEngine />
      <ReflectionList />
    </div>
  );
}
