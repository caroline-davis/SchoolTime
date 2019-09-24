import React, {useState} from 'react';
import styles from './App.module.css';

function App() {

const [student, setStudent] = useState("")
const [students, setStudents] = useState([""])

const [teacherName, setTeacherName] = useState("")
const [teacherSubject, setTeacherSubject] = useState("")
const [teacherClass, setTeacherClass] = useState("")
const [teachers, setTeachers] = useState([])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>School Time</h1>
      </div>
      <input type="text"
              placeholder="student name"
              className={styles.input}
              value={student}
              onChange={(e) => setStudent(e.target.value)}>
      </input>
      <button onClick={()=> setStudents([...students, student])}>SAVE STUDENT</button>
      <input type="text"
             placeholder="teachers name"
             className={styles.input}
             value={teacherName}
             onChange={(e) => setTeacherName(e.target.value)}>
      </input>
      <input type="text"
             placeholder="class subject"
             className={styles.input}
             value={teacherSubject}
             onChange={(e)=> setTeacherSubject(e.target.value)}>
      </input>
      <input type="text"
             placeholder="teachers class"
             className={styles.input}
             value={teacherClass}
             onChange={(e) => setTeacherClass(e.target.value)}>
      </input>
      <button onClick={() => setTeachers([...teachers, {name: teacherName, subject: teacherSubject, class: teacherClass} ])}>SAVE TEACHER</button>

        {students.map((s, index) => 
        <div key={index}>
          {s}
        </div>
          )}
        {teachers.map((t, index) => 
        <div key={index}>
          Name: {t.name}
          Subject: {t.subject} 
          Class: {t.class}
        </div>
        )}
    </div>
  );
}

export default App;
