const Chart = require('../models/chartModel');

const chartController = {
  createChart: async (req, res) => {
    const { _id, timestamp, chart_songs } = req.body;

    try {
      const newChart = new Chart({ _id, timestamp, chart_songs });
      await newChart.save();
      res.json(newChart);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getCharts: async (req, res) => {
    try {
      const charts = await Chart.find();
      res.json(charts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getChartById: async (req, res) => {
    const chartId = req.params.id;

    try {
      const chart = await Chart.findById(chartId);
      if (chart) {
        res.json(chart);
      } else {
        res.status(404).json({ message: 'Chart not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  updateChart: async (req, res) => {
    const chartId = req.params.id;
    const { _id, timestamp, chart_songs } = req.body;

    try {
      const updatedChart = await Chart.findByIdAndUpdate(chartId, { _id, timestamp, chart_songs }, { new: true });
      if (updatedChart) {
        res.json(updatedChart);
      } else {
        res.status(404).json({ message: 'Chart not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteChart: async (req, res) => {
    const chartId = req.params.id;

    try {
      const deletedChart = await Chart.findByIdAndDelete(chartId);
      if (deletedChart) {
        res.json({ message: 'Chart deleted successfully' });
      } else {
        res.status(404).json({ message: 'Chart not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  // You can add more functionalities as required for your charts.
};

module.exports = chartController;
