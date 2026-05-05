import { BarChart } from "@mui/x-charts/BarChart";

export default function BarsDataset({ stats }) {

  if (!stats || stats.length === 0) {
    return <div>No data available</div>;
  }

  const dataset = stats.map((item) => ({
    month: item.month,
    applied: item.applied,
    scheduled: item.scheduled,
    selected: item.selected,
    rejected: item.rejected,
  }));

  return (
    <BarChart
      key={JSON.stringify(dataset)}   // 🔥 IMPORTANT
      dataset={dataset}
      xAxis={[{ dataKey: "month" }]}
      series={[
        { dataKey: "applied", label: "Applied" },
        { dataKey: "scheduled", label: "Scheduled" },
        { dataKey: "selected", label: "Selected" },
        { dataKey: "rejected", label: "Rejected" },
      ]}
      height={300}
    />
  );
}