import {
  FaSearch,
  FaBell,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser
} from "react-icons/fa"

export default function Feed() {

  const tasks = [
    {
      id: 1,
      category: "Home Repair",
      title: "Fix Leaky Faucet",
      desc: "Need help fixing a leaky kitchen faucet. The water keeps dripping.",
      location: "Downtown, New York",
      date: "Dec 15, 2024 • 10:00 AM",
      user: "John Smith",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
    },
    {
      id: 2,
      category: "Moving",
      title: "Help Moving Furniture",
      desc: "Need assistance moving heavy furniture to the second floor.",
      location: "Brooklyn, New York",
      date: "Dec 16, 2024 • 2:00 PM",
      user: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
    },
    {
      id: 3,
      category: "Gardening",
      title: "Garden Cleanup",
      desc: "Looking for help cleaning up the backyard garden before winter.",
      location: "Queens, New York",
      date: "Dec 17, 2024 • 9:00 AM",
      user: "Mike Davis",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d"
    }
  ]

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", padding: "40px" }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px"
      }}>
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "5px" }}>
            Feed
          </h2>
          <p style={{ color: "#64748b" }}>
            Find tasks that need help
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "#f1f5f9",
            padding: "8px 15px",
            borderRadius: "25px",
            width: "250px"
          }}>
            <FaSearch style={{ marginRight: "8px", color: "#64748b" }} />
            <input
              placeholder="Search tasks..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%"
              }}
            />
          </div>

          <div style={{
            background: "#fef3c7",
            padding: "10px",
            borderRadius: "50%"
          }}>
            <FaBell color="#f59e0b" />
          </div>
        </div>
      </div>

      {/* CARDS GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px"
      }}>
        {tasks.map(task => (
          <div key={task.id} style={cardStyle}>

            {/* IMAGE */}
            <div style={{ position: "relative" }}>
              <img
                src={task.image}
                alt="task"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover"
                }}
              />
              <span style={badgeStyle}>{task.category}</span>
            </div>

            {/* CONTENT */}
            <div style={cardContentStyle}>
              <h3 style={titleStyle}>{task.title}</h3>

              <p style={descStyle}>
                {task.desc}
              </p>

              <div style={{ flexGrow: 1 }}>
                <div style={infoRow}>
                  <FaMapMarkerAlt size={13} />
                  <span>{task.location}</span>
                </div>

                <div style={infoRow}>
                  <FaCalendarAlt size={13} />
                  <span>{task.date}</span>
                </div>

                <div style={infoRow}>
                  <FaUser size={13} />
                  <span>{task.user}</span>
                </div>
              </div>

              <button style={buttonStyle}>
                Request Sent
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

/* ================= STYLES ================= */

const cardStyle = {
  background: "white",
  borderRadius: "15px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "480px"  // 🔥 Fixed Equal Height
}

const cardContentStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  height: "100%"
}

const badgeStyle = {
  position: "absolute",
  top: "12px",
  left: "12px",
  background: "#6366f1",
  color: "white",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600"
}

const titleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "8px"
}

const descStyle = {
  fontSize: "14px",
  color: "#64748b",
  marginBottom: "15px",
  height: "45px",   // 🔥 Fixed Text Height
  overflow: "hidden"
}

const infoRow = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#64748b",
  fontSize: "13px",
  marginBottom: "8px"
}

const buttonStyle = {
  marginTop: "15px",
  width: "120px",
  padding: "8px",
  borderRadius: "8px",
  border: "none",
  background: "#6366f1",
  color: "white",
  fontWeight: "600",
  cursor: "pointer"
}
