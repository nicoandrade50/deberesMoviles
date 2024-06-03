import React, { useState } from 'react';

interface Students {
    [key: number]: string[];
}

const GradeSchool: React.FC = () => {
    const [students, setStudents] = useState<Students>({});

    const roster = (): Students => {
        let newRoster: Students = {};
        for (const [grade, names] of Object.entries(students)) {
            newRoster[parseInt(grade)] = names.slice();
        }
        return newRoster;
    };

    const addStudent = (name: string, grade: number): void => {
        removeStudent(name);
        setStudents(prevState => ({
            ...prevState,
            [grade]: [...(prevState[grade] || []), name].sort()
        }));
    };

    const removeStudent = (name: string): void => {
        const updatedStudents: Students = {};
        for (const grade in students) {
            updatedStudents[grade] = students[grade].filter(student => student !== name);
        }
        setStudents(updatedStudents);
    };

    const getGradeStudents = (grade: number): string[] => {
        return (students[grade] || []).slice();
    };

    return (
        <div>
            <h1>Grade School Roster</h1>
            <button onClick={() => addStudent("Anna", 1)}>Add Anna to Grade 1</button>
            <button onClick={() => addStudent("Bob", 1)}>Add Bob to Grade 1</button>
            <button onClick={() => addStudent("Charlie", 2)}>Add Charlie to Grade 2</button>
            <div>
                <h2>Roster</h2>
                {Object.entries(roster()).map(([grade, gradeStudents]) => (
                    <div key={grade}>
                        <h3>Grade {grade}</h3>
                        <ul>
                            {gradeStudents.map((student, index) => (
                                <li key={index}>{student}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                <h2>Grade 1 Students</h2>
                <ul>
                    {getGradeStudents(1).map((student, index) => (
                        <li key={index}>{student}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Grade 2 Students</h2>
                <ul>
                    {getGradeStudents(2).map((student, index) => (
                        <li key={index}>{student}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GradeSchool;
