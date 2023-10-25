"use client";

import React, { useContext } from "react";
import Button from "../button";
import style from "./styles/template.module.css";
import { ENUMS } from "@/app/utils/enums";
import { AppContext } from "@/app/utils/context/AppContext";

function General({ children }) {
  const { switchClassType, class_type, switchActionType, action_type } =
    useContext(AppContext);

  return (
    <div>
      <div className={style.gTemplateHeader}>
        <div>
          <h4>{class_type} Module</h4>
          <small>Easily manage records of {class_type}s</small>
        </div>
        <div className={style.gTemplateHeader_btnGroup}>
          <Button
            onClick={() =>
              switchActionType(
                action_type === ENUMS.ACTIONS.ADD
                  ? ENUMS.ACTIONS.VIEW
                  : ENUMS.ACTIONS.ADD
              )
            }
          >
            {action_type === ENUMS.ACTIONS.ADD ? "View" : "Add"} {class_type}
          </Button>
          <Button
            className={style.gTemplateHeader_btnGroup_primary}
            onClick={() =>
              switchClassType(
                class_type === ENUMS.CLASS.TEACHER
                  ? ENUMS.CLASS.STUDENT
                  : ENUMS.CLASS.TEACHER
              )
            }
          >
            Switch Roles
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default General;
