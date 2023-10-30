"use client";

import React from "react";
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

function Students() {
  const [students, setStudent] = useState({});
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

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:3000/api/students", {
      method: "GET",
      cache: "no-cache",
    });
    const data = await res.json();
    setStudent(data);
  };

  const addStudents = async (data) => {
    const res = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      body: JSON.stringify({
        ...data,
      }),
    });

    if (res) {
      switchActionType(ENUMS.ACTIONS.VIEW);
      fetchStudents();
      reset();
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const submitForm = async (data) => {
    const date = new Date(data?.dateOfBirth).toISOString();
    console.log(data, new Date(data?.dateOfBirth).toISOString());
    await addStudents({ ...data, dateOfBirth: date });
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
          <FormInput title="Student Number" camelCase="studentNumber" />

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
          <th>Name</th>
          <th>Surname</th>
          <th>Date of Birth</th>
          <th>Student Number</th>
        </tr>
      </thead>
      <tbody>
        {students?.res?.map((student, index) => {
          const { nationalId, name, surname, dateOfBirth, studentNumber } =
            student;
          return (
            <tr key={index}>
              <td>{nationalId}</td>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{dateOfBirth?.slice(0, 10)}</td>
              <td>{studentNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Students;
