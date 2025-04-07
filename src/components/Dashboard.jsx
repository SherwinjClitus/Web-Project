// import React from "react";
// const Dashboard = () => {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Welcome to your Dashboard!</h2>
//       <p>This page is protected and only visible if you're logged in.</p>
//     </div>
//   );
// };
// export default Dashboard;

import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </header>

      <main className="dashboard-main">
        <section className="welcome-section">
          <h2>Welcome back👋👋</h2>
          <p>
            This is your personalized dashboard. Everything you need is here.
          </p>
        </section>

        <section className="card-grid">
          <div className="dashboard-card">
            <h3>🧑‍💼 Profile</h3>
            <p>Update your personal info and change password.</p>
          </div>

          <div className="dashboard-card">
            <h3>📚 Courses</h3>
            <p>Browse enrolled courses and track your progress.</p>
          </div>

          <div className="dashboard-card">
            <h3>📊 Reports</h3>
            <p>View performance and download reports.</p>
          </div>

          <div className="dashboard-card">
            <h3>📩 Messages</h3>
            <p>Check your messages and notifications.</p>
          </div>

          <div className="dashboard-card">
            <h3>🔧 Settings</h3>
            <p>Configure your dashboard preferences.</p>
          </div>

          <div className="dashboard-card">
            <h3>🆘 Support</h3>
            <p>Get help from our support team 24/7.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

// import React from "react";

// const Dashboard = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1>Dashboard</h1>
//         <button style={styles.logoutBtn} onClick={handleLogout}>Log Out</button>
//       </header>

//       <main style={styles.main}>
//         <h2>Welcome 👋</h2>
//         <p>This is your dashboard overview. You're logged in!</p>

//         <div style={styles.cardsContainer}>
//           <div style={styles.card}>
//             <h3>Profile</h3>
//             <p>Manage your profile and settings.</p>
//           </div>
//           <div style={styles.card}>
//             <h3>Courses</h3>
//             <p>Track enrolled courses and progress.</p>
//           </div>
//           <div style={styles.card}>
//             <h3>Support</h3>
//             <p>Need help? Reach out to our support team.</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: "sans-serif",
//     padding: "2rem",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "2rem",
//   },
//   logoutBtn: {
//     backgroundColor: "#e74c3c",
//     color: "#fff",
//     border: "none",
//     padding: "0.5rem 1rem",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   main: {
//     backgroundColor: "#fff",
//     padding: "2rem",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.05)",
//   },
//   cardsContainer: {
//     display: "flex",
//     gap: "1.5rem",
//     marginTop: "2rem",
//     flexWrap: "wrap",
//   },
//   card: {
//     flex: "1",
//     minWidth: "200px",
//     backgroundColor: "#f0f4f8",
//     padding: "1rem",
//     borderRadius: "8px",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
//   },
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Get token from localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwt_decode(token);
//         setUser(decoded);
//       } catch (err) {
//         console.error("Invalid token:", err);
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1>Dashboard</h1>
//         <button style={styles.logoutBtn} onClick={handleLogout}>Log Out</button>
//       </header>

//       <main style={styles.main}>
//         <h2>Hello, {user?.email || "User"} 👋</h2>
//         <p>Welcome back! Here’s your dashboard overview.</p>

//         <div style={styles.cardsContainer}>
//           <div style={styles.card}>
//             <h3>Profile</h3>
//             <p>View or update your user info.</p>
//           </div>
//           <div style={styles.card}>
//             <h3>Settings</h3>
//             <p>Manage preferences and configurations.</p>
//           </div>
//           <div style={styles.card}>
//             <h3>Support</h3>
//             <p>Contact our team for help.</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// // 💅 Inline styles for simplicity
// const styles = {
//   container: {
//     fontFamily: "sans-serif",
//     padding: "2rem",
//     backgroundColor: "#f7f9fc",
//     minHeight: "100vh",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "2rem",
//   },
//   logoutBtn: {
//     backgroundColor: "#e74c3c",
//     color: "#fff",
//     border: "none",
//     padding: "0.5rem 1rem",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   main: {
//     backgroundColor: "#fff",
//     padding: "2rem",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.05)",
//   },
//   cardsContainer: {
//     display: "flex",
//     gap: "1.5rem",
//     marginTop: "2rem",
//     flexWrap: "wrap",
//   },
//   card: {
//     flex: "1",
//     minWidth: "200px",
//     backgroundColor: "#f0f4f8",
//     padding: "1rem",
//     borderRadius: "8px",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
//   },
// };

// export default Dashboard;

// import React from "react";

// const Dashboard = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove JWT
//     window.location.href = "/login"; // Redirect to login
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Welcome to your Dashboard!</h2>
//       <p>This page is protected and only visible if you're logged in.</p>

//       <div style={{ marginTop: "2rem" }}>
//         <button
//           onClick={handleLogout}
//           style={{
//             padding: "0.5rem 1rem",
//             backgroundColor: "#ff4d4f",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import {jwt_decode} from "jwt-decode";

// const Dashboard = () => {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     // Get token from localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Decode token to get user info
//       const decoded = jwt_decode(token);
//       setUserData(decoded);
//     }
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h2>Welcome to Your Dashboard 🎉</h2>
//       {userData?.email && <p>Email: {userData.email}</p>}
//       <p>You're logged in successfully!</p>
//     </div>
//   );
// };

// export default Dashboard;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Dashboard.css"; // optional external styling

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <h2 style={{ marginBottom: "1rem" }}>👋 Welcome to your Dashboard!</h2>
//       <p>This page is protected and only visible if you're logged in.</p>

//       <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
//         {/* Stat cards */}
//         <div style={cardStyle}>
//           <h3>📚 Courses Enrolled</h3>
//           <p style={numberStyle}>5</p>
//         </div>
//         <div style={cardStyle}>
//           <h3>🕒 Pending Tasks</h3>
//           <p style={numberStyle}>2</p>
//         </div>
//         <div style={cardStyle}>
//           <h3>⭐ Progress</h3>
//           <p style={numberStyle}>75%</p>
//         </div>
//       </div>

//       <div style={{ marginTop: "2rem" }}>
//         <button style={btnStyle} onClick={() => navigate("/")}>
//           🔙 Back to Home
//         </button>
//         <button style={{ ...btnStyle, backgroundColor: "#dc3545" }} onClick={handleLogout}>
//           🔓 Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// // Inline styles
// const cardStyle = {
//   flex: 1,
//   padding: "1.5rem",
//   backgroundColor: "#f9f9f9",
//   border: "1px solid #ddd",
//   borderRadius: "10px",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//   textAlign: "center"
// };

// const numberStyle = {
//   fontSize: "2rem",
//   fontWeight: "bold",
//   marginTop: "0.5rem"
// };

// const btnStyle = {
//   marginRight: "1rem",
//   padding: "0.6rem 1.2rem",
//   fontSize: "1rem",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer"
// };

// export default Dashboard;
