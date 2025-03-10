import React, {useState} from 'react';
type StydentsType = {
    id: number
    name: string
    age: number
}
type NewComponentType = {
    students: StydentsType
}
export const NewComponent = ({students}) => {
    return (
        <ul>
            {students.map((student)=>{
               return <li key={student.id}>
                   <span>{student.name},</span>
                    <span>age: {student.age}</span>
                </li>
            })}

        </ul>
    );
};

