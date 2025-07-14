import { useEffect, useRef, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuth } from "../context/AuthContext";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ExportJournal() {
  const { user } = useAuth();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef();

  useEffect(() => {
    if (!user) return;
    const fetchLogs = async () => {
      const logsRef = collection(db, "users", user.uid, "logs");
      const q = query(logsRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLogs(data);
      setLoading(false);
    };
    fetchLogs();
  }, [user]);

  const handleDownload = async () => {
    const input = contentRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("mindtrack-journal.pdf");
  };

  if (!user) return null;
  if (loading) return <p className="text-center mt-10">Loading logs...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">📄 Export Journal</h2>
      <p className="text-gray-600 mb-4">
        Click the button below to download your journal summary as PDF.
      </p>

      <div ref={contentRef} className="space-y-6">
        {logs.map((log) => (
          <div key={log.id} className="border-b pb-4">
            <p className="text-sm text-gray-500 mb-1">
              {log.date} | Study: {log.studyHours}h | Sleep: {log.sleepHours}h |
              Stress: {log.stressLevel} | Focus: {log.focusLevel}
            </p>
            <ReactMarkdown className="prose text-gray-800">
              {log.reflection || "_No reflection provided._"}
            </ReactMarkdown>
          </div>
        ))}
      </div>

      <button
        onClick={handleDownload}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  );
}
