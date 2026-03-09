import { useState } from "react"

function AddTask() {

  const [formData, setFormData] = useState({
    title:"",
    category:"",
    location:"",
    date:"",
    time:"",
    description:""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert("Task Posted Successfully 🚀")
  }

  return (
    <div className="addtask-wrapper">

      <div className="page-header">
        <h1>Add Task</h1>
        <p>Create a new task and get help from the community</p>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>

        <h2>Create a New Task</h2>
        <p className="form-subtitle">
          Describe the help you need so helpers can quickly understand your task.
        </p>

        {/* Title */}
        <label>Title</label>
        <input 
          type="text"
          name="title"
          placeholder="e.g. Help moving a sofa"
          onChange={handleChange}
          required
        />

        {/* Category */}
        <label>Category</label>
        <input 
          type="text"
          name="category"
          placeholder="e.g. Moving, Cleaning, Repair"
          onChange={handleChange}
          required
        />

        {/* Location */}
        <label>Location</label>
        <input 
          type="text"
          name="location"
          placeholder="e.g. Downtown, New York"
          onChange={handleChange}
          required
        />

        {/* Date & Time */}
        <div className="row">
          <div>
            <label>Date</label>
            <input type="date" name="date" onChange={handleChange} required />
          </div>

          <div>
            <label>Time</label>
            <input type="time" name="time" onChange={handleChange} required />
          </div>
        </div>

        {/* Description */}
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Explain what needs to be done..."
          onChange={handleChange}
          required
        ></textarea>

        {/* Button */}
        <div className="center-btn">
          <button type="submit" className="submit-btn">
            🚀 Post Task
          </button>
        </div>

      </form>
    </div>
  )
}

export default AddTask
