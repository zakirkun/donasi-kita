"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandHoldingHeart,
  faUsers,
  faClock,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dummy data untuk chart
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Total Donasi',
      data: [650000, 1200000, 850000, 1500000, 2000000, 1750000],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value: any) {
          return 'Rp ' + value.toLocaleString('id-ID');
        }
      }
    }
  }
};

// Dummy data untuk recent donations
const recentDonations = [
  {
    id: 1,
    campaign: "Bantu Anak-anak Penderita Kanker",
    amount: 500000,
    date: "2024-03-22",
    status: "success"
  },
  {
    id: 2,
    campaign: "Pembangunan Sekolah di Pedalaman",
    amount: 1000000,
    date: "2024-03-20",
    status: "success"
  },
  {
    id: 3,
    campaign: "Bantuan Korban Banjir",
    amount: 250000,
    date: "2024-03-18",
    status: "success"
  }
];

// Dummy data untuk top campaigns
const topCampaigns = [
  {
    id: 1,
    title: "Bantu Anak-anak Penderita Kanker",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    totalDonated: 2500000,
    progress: 75
  },
  {
    id: 2,
    title: "Pembangunan Sekolah di Pedalaman",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    totalDonated: 1500000,
    progress: 60
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
          <p className="text-gray-600">Selamat datang kembali, Ahmad!</p>
        </div>
        <Link
          href="/campaign"
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Donasi Baru
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Donasi</p>
              <p className="text-xl font-bold">Rp 4.250.000</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FontAwesomeIcon icon={faUsers} className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Campaign Dibantu</p>
              <p className="text-xl font-bold">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Donasi Bulan Ini</p>
              <p className="text-xl font-bold">Rp 1.750.000</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FontAwesomeIcon icon={faChartLine} className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Rata-rata Donasi</p>
              <p className="text-xl font-bold">Rp 500.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart & Recent Donations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Grafik Donasi</h2>
          <Line options={chartOptions} data={chartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Donasi Terakhir</h2>
          <div className="space-y-4">
            {recentDonations.map((donation) => (
              <div key={donation.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-medium line-clamp-1">{donation.campaign}</p>
                  <p className="text-sm text-gray-500">{donation.date}</p>
                </div>
                <p className="font-semibold text-emerald-500">
                  Rp {donation.amount.toLocaleString('id-ID')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Campaigns */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Campaign Terbanyak Didonasikan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topCampaigns.map((campaign) => (
            <div key={campaign.id} className="flex gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2 line-clamp-2">{campaign.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Total: Rp {campaign.totalDonated.toLocaleString('id-ID')}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 