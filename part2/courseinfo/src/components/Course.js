const Course = ({ course }) => {
    const total = course.parts.reduce((a, b) => a.exercises + b.exercises)
  
    return (
      <div>
        <h1>{course.name}</h1>
          {course.parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
          )}
        <strong>total of {course.parts.reduce((a, b) => a + b.exercises, 0)} exercises</strong>
      </div>
    )
}

export default Course