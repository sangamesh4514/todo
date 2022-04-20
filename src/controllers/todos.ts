import express, { Request, Response } from "express";
import * as todoModel from "./../models/todos";

export const getTodos = async (req: Request, res: Response) => {
  todoModel.getTodos((err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
    }
  });
};

export const addTodo = async (req: Request, res: Response) => {
  const todo = req.body.name;
  if (!todo) {
    res.status(400).send({ message: "Name can not be empty!" });
  } else {
    todoModel.updateTodos(todo, (err, rows) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send({ id: rows?.insertId });
      }
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id }: any = req.params;

  todoModel.deleteTodo(id, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    }
    if (rows?.["affectedRows"]) {
      res.status(200).send({ mesage: "Todo deleted successfully!", rows });
    } else {
      res.status(400).send({ mesage: "No such id exists!", rows });
    }
  });
};
