
// Mock data for the charts
export const interactionsData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Interactions",
      data: [65, 78, 52, 91, 83, 56, 89],
      fill: false,
      borderColor: "#38BDF8",
      backgroundColor: "rgba(56, 189, 248, 0.2)",
      tension: 0.4,
    },
  ],
};

export const satisfactionData = {
  labels: ["Very Good", "Good", "Neutral", "Poor", "Very Poor"],
  datasets: [
    {
      label: "User Satisfaction",
      data: [45, 32, 15, 5, 3],
      backgroundColor: [
        "rgba(56, 189, 248, 0.8)",  // ai-blue
        "rgba(56, 189, 248, 0.6)",
        "rgba(56, 189, 248, 0.4)",
        "rgba(56, 189, 248, 0.3)",
        "rgba(56, 189, 248, 0.2)",
      ],
    },
  ],
};
