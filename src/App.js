import React, {useState} from 'react';
import styles from './App.module.css';
import Input from './components/Input.js';

function App() {

const [student, setStudent] = useState("")
const [students, setStudents] = useState([])

const [teacherName, setTeacherName] = useState("")
const [teacherSubject, setTeacherSubject] = useState("")
const [teacherClass, setTeacherClass] = useState("")
const [teachers, setTeachers] = useState([])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>School Time</h1>
      </div>
      <Input placeholder="student name"
              value={student}
              onChange={setStudent}>
      </Input>

      <button onClick={()=> setStudents([...students, student])}>SAVE STUDENT</button>
      
      <Input placeholder="teachers name"
             value={teacherName}
             onChange={setTeacherName}>
      </Input>
      <Input placeholder="class subject"
             value={teacherSubject}
             onChange={setTeacherSubject}>
      </Input>
      <Input placeholder="teachers class"
             value={teacherClass}
             onChange={setTeacherClass}>
      </Input>
      <button onClick={() => setTeachers([...teachers, {name: teacherName, subject: teacherSubject, class: teacherClass} ])}>SAVE TEACHER</button>

        {students.map((s, index) => 
        <div key={index}>
          Student: {s}
        </div>
          )}
        {teachers.map((t, index) => 
        <div key={index}>
          Name: {t.name}{" "}
          Subject: {t.subject}{" "}
          Class: {t.class}
        </div>
        )}
    </div>
  );
}

export default App;
