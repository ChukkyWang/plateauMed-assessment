"use client";

import React from "react"
import { FormProvider, useForm } from "react-hook-form";
import styles from "../../page.module.css";
import { Form } from "../../resources/form/form";
import Table from "../../resources/table";
import { FormInput } from "../../resources/form/input";
import Button from "../../resources/button";
import { CalculateMaxAge } from "../../utils/util";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../utils/context/AppContext";
import { ENUMS } from "../../utils/enums";

function Teachers() {
  const [teachers, setTeacher] = useState({});
  const { switchActionType, action_type } = useContext(AppContext);
  const max = CalculateMaxAge();

  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = formMethods;

  const fetchTeachers = async () => {
    const res = await fetch("http://localhost:3000/api/teachers", {
      method: "GET",
      cache: "no-cache",
    });
    const data = await res.json();
    setTeacher(data);
  };

  const addTeachers = async (data) => {
    const res = await fetch("http://localhost:3000/api/teachers", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        teacherNumber: Number(data?.teacherNumber),
        salary: Number(data?.salary),
        // dateOfBirth: new Date(data?.dateOfBirth).toISOString(),
      }),
    });

    if (res) {
      switchActionType(ENUMS.ACTIONS.VIEW);
      fetchTeachers();
      reset();
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const submitForm = async (data) => {
    const date = new Date(data?.dateOfBirth).toISOString();
    console.log(data, new Date(data?.dateOfBirth).toISOString());
    await addTeachers({ ...data, dateOfBirth: date });
  };

  if (action_type === ENUMS.ACTIONS.ADD) {
    return (
      <FormProvider {...formMethods}>
        <Form className={styles.form} onSubmit={handleSubmit(submitForm)}>
          <FormInput title="National ID Number" camelCase="nationalId" />
          <FormInput
            title="Title [Mr, Mrs, Miss, Dr, Prof]"
            camelCase="title"
          />
          <FormInput title="First Name" camelCase="name" />
          <FormInput title="Surname" camelCase="surname" />
          <FormInput
            title="Date of Birth"
            camelCase="dateOfBirth"
            type={"date"}
            max={max}
          />
          <FormInput title="Teacher Number" camelCase="teacherNumber" />
          <FormInput title="Salary" camelCase="salary" isOptional={false} />
          <Button type="submit">Submit</Button>
        </Form>
      </FormProvider>
    );
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>National ID Number</th>
          <th>Title</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Date of Birth</th>
          <th>Teacher Number</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {teachers?.res?.map((teacher, index) => {
          const {
            nationalId,
            title,
            name,
            surname,
            dateOfBirth,
            salary,
            teacherNumber,
          } = teacher;
          return (
            <tr key={index}>
              <td>{nationalId}</td>
              <td>{title}</td>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{dateOfBirth.slice(0, 10)}</td>
              <td>{teacherNumber}</td>
              <td>{salary}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Teachers;
