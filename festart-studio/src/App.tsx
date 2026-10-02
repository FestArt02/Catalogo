import { Navigate, Route, Routes } from "react-router-dom";
import AuthView from "./views/AuthView";
import DashboardView from "./views/DashboardView";
import EditorView from "./views/EditorView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/editor/:projectId" element={<EditorView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
