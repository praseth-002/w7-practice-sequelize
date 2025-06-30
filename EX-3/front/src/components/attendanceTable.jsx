const ClassAttendanceTable = ({ records }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Class Attendance</h2>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1">Student Name</th>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{record.Student?.name || "Unknown"}</td>
              <td className="border px-2 py-1">{record.date.slice(0, 10)}</td>
              <td className="border px-2 py-1">{record.mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassAttendanceTable;