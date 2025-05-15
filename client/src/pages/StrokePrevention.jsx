import React from 'react';
import { useState } from 'react';
import MobileNav from '../components/MobileNav';
import {
    Activity,
    Heart,
    Users,
    Calendar,
    Droplet,
    AlertCircle,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Scale,
    Coffee,
    Clock,
    Cigarette,
    Menu,
    X,
    Bell,
    User,
    Settings,
    ChevronDown,
    Search
} from 'lucide-react';

const StrokePrevention = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    // Sample data for charts and metrics
    const riskFactors = [
        { name: 'Blood Pressure', value: 130, status: 'elevated', change: 5, icon: <Droplet className="text-blue-500" /> },
        { name: 'Cholesterol', value: 180, status: 'normal', change: -10, icon: <Droplet className="text-yellow-500" /> },
        { name: 'Blood Sugar', value: 110, status: 'normal', change: 2, icon: <Droplet className="text-green-500" /> }
    ];

    const recentActivities = [
        { name: 'Morning Walk', duration: '30 min', date: 'Today, 8:00 AM', intensity: 'Moderate' },
        { name: 'Meditation', duration: '15 min', date: 'Today, 9:30 AM', intensity: 'Low' },
        { name: 'Swimming', duration: '45 min', date: 'Yesterday, 6:00 PM', intensity: 'High' }
    ];

    const upcomingAppointments = [
        { doctor: 'Dr. Sarah Johnson', specialty: 'Cardiologist', date: 'May 20, 2025', time: '10:30 AM' },
        { doctor: 'Dr. Michael Chen', specialty: 'Neurologist', date: 'June 3, 2025', time: '2:45 PM' }
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} hidden lg:block bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
                <div className="p-4 flex items-center justify-between border-b border-gray-200">
                    {isSidebarOpen ? (
                        <h2 className="font-bold text-xl text-blue-600">StrokeGuard</h2>
                    ) : (
                        <h2 className="font-bold text-xl text-blue-600">SG</h2>
                    )}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-700">
                        {isSidebarOpen ? <X size={20} /> : <Menu size={16} />}
                    </button>
                </div>
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        <SidebarItem
                            icon={<Activity />}
                            text="Dashboard"
                            isActive={activeTab === 'dashboard'}
                            onClick={() => setActiveTab('dashboard')}
                            collapsed={!isSidebarOpen}
                        />
                        <SidebarItem
                            icon={<Heart />}
                            text="Risk Assessment"
                            isActive={activeTab === 'risk'}
                            onClick={() => setActiveTab('risk')}
                            collapsed={!isSidebarOpen}
                        />
                        <SidebarItem
                            icon={<TrendingUp />}
                            text="Progress"
                            isActive={activeTab === 'progress'}
                            onClick={() => setActiveTab('progress')}
                            collapsed={!isSidebarOpen}
                        />
                        <SidebarItem
                            icon={<Calendar />}
                            text="Appointments"
                            isActive={activeTab === 'appointments'}
                            onClick={() => setActiveTab('appointments')}
                            collapsed={!isSidebarOpen}
                        />
                        <SidebarItem
                            icon={<Users />}
                            text="Support Team"
                            isActive={activeTab === 'support'}
                            onClick={() => setActiveTab('support')}
                            collapsed={!isSidebarOpen}
                        />
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <SidebarItem
                        icon={<Settings />}
                        text="Settings"
                        isActive={activeTab === 'settings'}
                        onClick={() => setActiveTab('settings')}
                        collapsed={!isSidebarOpen}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation */}
                <header className="bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2 w-64">
                            <Search size={18} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm w-full"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100">
                                <Bell size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                                    JD
                                </div>
                                {isSidebarOpen && (
                                    <div className="hidden lg:block flex items-center">
                                        <span className="text-sm font-medium">Okeke Felix</span>
                                        <ChevronDown size={16} className="ml-1 text-gray-500" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Stroke Prevention Dashboard</h1>
                        <p className="text-gray-600">Welcome back, John! Here's your health summary.</p>
                    </div>

                    {/* Risk Score Card */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Your Stroke Risk Score</h2>
                            <button className="text-blue-500 text-sm font-medium hover:text-blue-700">View Details</button>
                        </div>
                        <div className="flex items-center">
                            <div className="relative w-32 h-32">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#E5E7EB"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                        strokeDasharray="75, 100"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                    <span className="lg:hidden text-1xl font-bold text-gray-800">25%</span>
                                    <span className="hidden lg:block text-3xl font-bold text-gray-800">25%</span>
                                </div>
                            </div>
                            <div className="ml-6">
                                <p className="text-gray-600 mb-2">Your risk is <span className="font-medium text-yellow-600">moderate</span></p>
                                <div className="flex items-center text-sm text-green-600">
                                    <ArrowDownRight size={16} className="mr-1" />
                                    <span>5% improvement since last month</span>
                                </div>
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                    Take New Assessment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Risk Factors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {riskFactors.map((factor, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-5">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            {factor.icon}
                                            <h3 className="ml-2 font-medium text-gray-800">{factor.name}</h3>
                                        </div>
                                        <div className="mt-3">
                                            <span className="text-2xl font-bold text-gray-800">{factor.value}</span>
                                            <span className={`ml-2 text-sm font-medium capitalize ${factor.status === 'normal' ? 'text-green-600' :
                                                factor.status === 'elevated' ? 'text-yellow-600' : 'text-red-600'
                                                }`}>
                                                {factor.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`flex items-center text-sm ${factor.change > 0 ? 'text-red-600' : 'text-green-600'
                                        }`}>
                                        {factor.change > 0 ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                                        <span>{Math.abs(factor.change)}%</span>
                                    </div>
                                </div>
                                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${factor.status === 'normal' ? 'bg-green-500' :
                                            factor.status === 'elevated' ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}
                                        style={{
                                            width: `${factor.status === 'normal' ? '40%' :
                                                factor.status === 'elevated' ? '70%' : '90%'
                                                }`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lifestyle Factors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">Lifestyle Factors</h2>
                                <button className="text-blue-500 text-sm font-medium hover:text-blue-700">Update</button>
                            </div>
                            <div className="space-y-4">
                                <LifestyleItem
                                    icon={<Scale size={18} className="text-purple-500" />}
                                    title="Weight Management"
                                    value="BMI: 24.5"
                                    status="normal"
                                />
                                <LifestyleItem
                                    icon={<Coffee size={18} className="text-brown-500" />}
                                    title="Alcohol Consumption"
                                    value="3 drinks/week"
                                    status="moderate"
                                />
                                <LifestyleItem
                                    icon={<Activity size={18} className="text-green-500" />}
                                    title="Physical Activity"
                                    value="150 min/week"
                                    status="good"
                                />
                                <LifestyleItem
                                    icon={<Cigarette size={18} className="text-gray-600" />}
                                    title="Smoking Status"
                                    value="Non-smoker"
                                    status="excellent"
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
                                <button className="text-blue-500 text-sm font-medium hover:text-blue-700">View All</button>
                            </div>
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <Activity size={18} className="text-blue-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-gray-800">{activity.name}</h4>
                                            <p className="text-xs text-gray-500">{activity.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-medium text-gray-800">{activity.duration}</span>
                                            <p className={`text-xs ${activity.intensity === 'Low' ? 'text-green-500' :
                                                activity.intensity === 'Moderate' ? 'text-yellow-500' : 'text-red-500'
                                                }`}>{activity.intensity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Appointments */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h2>
                            <button className="text-blue-500 text-sm font-medium hover:text-blue-700">Schedule New</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-3 text-left text-sm font-medium text-gray-500">Doctor</th>
                                        <th className="py-3 text-left text-sm font-medium text-gray-500">Specialty</th>
                                        <th className="py-3 text-left text-sm font-medium text-gray-500">Date</th>
                                        <th className="py-3 text-left text-sm font-medium text-gray-500">Time</th>
                                        <th className="py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upcomingAppointments.map((appointment, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="py-4 text-sm text-gray-800">{appointment.doctor}</td>
                                            <td className="py-4 text-sm text-gray-600">{appointment.specialty}</td>
                                            <td className="py-4 text-sm text-gray-600">{appointment.date}</td>
                                            <td className="py-4 text-sm text-gray-600">{appointment.time}</td>
                                            <td className="py-4 text-right">
                                                <button className="bg-blue-50 text-blue-500 hover:bg-blue-100 px-3 py-1 rounded text-xs font-medium transition-colors">
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
            <MobileNav/>
        </div>
    );
}


// Helper Components
function SidebarItem({ icon, text, isActive, onClick, collapsed }) {
    return (
        <li>
            <button
                onClick={onClick}
                className={`flex items-center w-full p-3 rounded-lg transition-colors ${isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
            >
                <span className={`${isActive ? 'text-blue-500' : 'text-gray-400'}`}>
                    {icon}
                </span>
                {!collapsed && <span className="ml-3 font-medium">{text}</span>}
            </button>
        </li>
    );
}

function LifestyleItem({ icon, title, value, status }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                {icon}
                <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-800">{title}</h4>
                    <p className="text-xs text-gray-500">{value}</p>
                </div>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${status === 'excellent' ? 'bg-green-100 text-green-800' :
                status === 'good' ? 'bg-blue-100 text-blue-800' :
                    status === 'normal' ? 'bg-green-100 text-green-800' :
                        status === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                }`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        </div>
    );
}




export default StrokePrevention;