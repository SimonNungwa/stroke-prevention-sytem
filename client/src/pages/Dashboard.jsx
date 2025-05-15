import React from "react";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import {
    Users,
    CalendarCheck,
    TrendingUp,
    AlertTriangle,
    ChevronRight,
    Activity,
    Heart
} from "lucide-react";

const Dashboard = () => {
    // Mock data for dashboard stats
    const stats = [
        {
            title: "Total Patients",
            value: "1,248",
            change: "+12%",
            trend: "up",
            icon: <Users size={20} className="text-blue-500" />
        },
        {
            title: "High Risk Cases",
            value: "42",
            change: "-3%",
            trend: "down",
            icon: <AlertTriangle size={20} className="text-orange-500" />
        },
        {
            title: "Appointments",
            value: "28",
            change: "+4%",
            trend: "up",
            icon: <CalendarCheck size={20} className="text-green-500" />
        },
        {
            title: "Stroke Incidents",
            value: "3",
            change: "-33%",
            trend: "down",
            icon: <TrendingUp size={20} className="text-purple-500" />
        }
    ];

    // Mock data for recent patients
    const recentPatients = [
        {
            id: "P-1248",
            name: "Emma Wilson",
            age: 58,
            riskScore: 72,
            status: "high-risk"
        },
        {
            id: "P-1247",
            name: "James Roberts",
            age: 65,
            riskScore: 86,
            status: "high-risk"
        },
        {
            id: "P-1246",
            name: "Sarah Thompson",
            age: 42,
            riskScore: 38,
            status: "low-risk"
        },
        {
            id: "P-1245",
            name: "Michael Brown",
            age: 51,
            riskScore: 64,
            status: "medium-risk"
        },
        {
            id: "P-1244",
            name: "Lisa Johnson",
            age: 47,
            riskScore: 27,
            status: "low-risk"
        }
    ];

    // Mock data for upcoming appointments
    const appointments = [
        {
            id: "A-4321",
            patient: "Emma Wilson",
            date: "Today, 10:30 AM",
            purpose: "Risk Assessment"
        },
        {
            id: "A-4322",
            patient: "David Miller",
            date: "Today, 1:15 PM",
            purpose: "Follow-up"
        },
        {
            id: "A-4323",
            patient: "James Roberts",
            date: "Tomorrow, 9:00 AM",
            purpose: "Treatment Plan"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Nav />

            <main className="container mx-auto px-4 py-6">
                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600 text-sm mt-1">Welcome back, Dr. Robert Fox</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors">
                            New Patient Assessment
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-4 rounded-2xl shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="bg-gray-100 p-2 rounded-xl">
                                    {stat.icon}
                                </div>
                                <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                    }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <div className="mt-3">
                                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Patients */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-5">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-semibold text-lg">Recent Patients</h2>
                            <button className="text-blue-500 flex items-center text-sm font-medium">
                                View All
                                <ChevronRight size={16} className="ml-1" />
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-gray-500 text-sm border-b">
                                        <th className="pb-3 font-medium">Patient ID</th>
                                        <th className="pb-3 font-medium">Name</th>
                                        <th className="pb-3 font-medium">Age</th>
                                        <th className="pb-3 font-medium">Risk Score</th>
                                        <th className="pb-3 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentPatients.map((patient) => (
                                        <tr key={patient.id} className="border-b last:border-b-0 h-14">
                                            <td className="text-sm font-medium">{patient.id}</td>
                                            <td className="text-sm">{patient.name}</td>
                                            <td className="text-sm">{patient.age}</td>
                                            <td className="text-sm font-medium">{patient.riskScore}%</td>
                                            <td>
                                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${patient.status === 'high-risk'
                                                        ? 'bg-red-100 text-red-700'
                                                        : patient.status === 'medium-risk'
                                                            ? 'bg-orange-100 text-orange-700'
                                                            : 'bg-green-100 text-green-700'
                                                    }`}>
                                                    {patient.status === 'high-risk'
                                                        ? 'High Risk'
                                                        : patient.status === 'medium-risk'
                                                            ? 'Medium Risk'
                                                            : 'Low Risk'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Appointments */}
                        <div className="bg-white rounded-2xl shadow-sm p-5">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="font-semibold text-lg">Today's Appointments</h2>
                                <button className="text-blue-500 flex items-center text-sm font-medium">
                                    All
                                    <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {appointments.map((appointment) => (
                                    <div key={appointment.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium text-sm">{appointment.patient}</h3>
                                                <p className="text-gray-500 text-xs mt-1">{appointment.purpose}</p>
                                            </div>
                                            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                                {appointment.date}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Risk Factors Summary */}
                        <div className="bg-white rounded-2xl shadow-sm p-5">
                            <h2 className="font-semibold text-lg mb-5">Risk Factors Distribution</h2>

                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="flex items-center">
                                            <Activity size={14} className="text-red-500 mr-1" />
                                            <span>Hypertension</span>
                                        </span>
                                        <span className="font-medium">64%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="bg-red-500 h-full rounded-full" style={{ width: "64%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="flex items-center">
                                            <Heart size={14} className="text-orange-500 mr-1" />
                                            <span>Heart Disease</span>
                                        </span>
                                        <span className="font-medium">42%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="bg-orange-500 h-full rounded-full" style={{ width: "42%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="flex items-center">
                                            <Activity size={14} className="text-yellow-500 mr-1" />
                                            <span>Diabetes</span>
                                        </span>
                                        <span className="font-medium">38%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="bg-yellow-500 h-full rounded-full" style={{ width: "38%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="flex items-center">
                                            <Activity size={14} className="text-blue-500 mr-1" />
                                            <span>Obesity</span>
                                        </span>
                                        <span className="font-medium">31%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "31%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <MobileNav />
        </div>
    );
};

export default Dashboard;