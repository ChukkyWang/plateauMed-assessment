"use client";

import { FormProvider, useForm } from "react-hook-form";
import styles from "./page.module.css";
import { Form } from "./resources/form/form";
import Table from "./resources/table";
import { GeneralTemplate } from "./resources/templates/index.template";
import { FormInput } from "./resources/form/input";
import Button from "./resources/button";
import { CalculateMaxAge } from "./utils/util";
import { useContext } from "react";
import { AppContext } from "./utils/context/AppContext";
import { ENUMS } from "./utils/enums";

export default function Teachers() {
  const { switchClassType, class_type, switchActionType, action_type } =
    useContext(AppContext);
  const max = CalculateMaxAge();

  const formMethods = useForm({
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  const submitForm = (data) => {
    console.log(data);
  };

  if (action_type === ENUMS.ACTIONS.ADD) {
    return (
      <FormProvider {...formMethods}>
        <Form className={styles.form} onSubmit={handleSubmit(submitForm)}>
          <FormInput title="National ID Number" camelCase="nin" />
          <FormInput
            title="Title [Mr, Mrs, Miss, Dr, Prof]"
            camelCase="title"
          />
          <FormInput title="First Name" camelCase="firstName" />
          <FormInput title="Surname" camelCase="surName" />
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
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
      </tbody>
    </Table>
  );
}
