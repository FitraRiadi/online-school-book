import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GrafikPenjualan = () => {
  
    // Dummy
  const dataPerTahun = {
    2023: [5, 10, 8, 15, 12, 17, 9, 20, 25, 30, 10, 25],
    2024: [4, 7, 5, 9, 6, 8, 2, 10, 13, 20, 4, 13],
  };

  const [tahun, setTahun] = useState('2024');

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: `Jumlah Transaksi Tahun ${tahun}`,
        data: dataPerTahun[tahun],
        backgroundColor: '#4e73df',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        
        <div className="d-flex justify-content-between align-items-center mb-3">
         <div>
                <h5 className="card-title mb-0">Grafik Penjualan</h5>
                <p className="text-secondary">Jumlah transaksi per bulan</p>
         </div>
          
          
          <select 
            className="form-select form-select-sm border-0" 
            style={{ width: '120px' }}
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
          >
            {
                Object.keys(dataPerTahun).map((tahun) => (
                    <option  value={tahun}>Tahun {tahun}</option>
                ))
            }
          </select>
        </div>

        <div className='chart' style={{ position: 'relative' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GrafikPenjualan;
