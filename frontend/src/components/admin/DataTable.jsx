import "./DataTable.css";

const sampleColumns = [
  { key: "orderId", header: "Order ID" },
  { key: "customer", header: "Customer" },
  { key: "amount", header: "Amount" },
  { key: "status", header: "Status" },
];

const sampleRows = [
  { id: "1", orderId: "#1041", customer: "Alex Johnson", amount: "$149.00", status: "Paid" },
  { id: "2", orderId: "#1042", customer: "Rina Patel", amount: "$89.50", status: "Pending" },
  { id: "3", orderId: "#1043", customer: "Marcus Lee", amount: "$230.00", status: "Delivered" },
];

export default function DataTable({
  title = "Recent Orders",
  columns = sampleColumns,
  rows = sampleRows,
  emptyMessage = "No records to display.",
}) {
  return (
    <section className="datatable">
      <header className="datatable-header">
        <h3>{title}</h3>
        <span>{rows.length} records</span>
      </header>

      <div className="datatable-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.length > 0 ? (
              rows.map((row, rowIndex) => (
                <tr key={row.id || rowIndex}>
                  {columns.map((column) => (
                    <td key={`${row.id || rowIndex}-${column.key}`}>
                      {row[column.key] ?? "--"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="datatable-empty">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
