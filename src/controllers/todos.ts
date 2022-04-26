import express, { Request, Response } from "express";
import * as todoModel from "./../models/todos";
import redis from './../redis'

export const getTodos = async (req: Request, res: Response) => {
  
  try {
    const data=await redis.get('todos');
    if(data){
      res.status(200).send(JSON.parse(data));
    }else{
      todoModel.getTodos(async(err, rows) => {
      if (err) {
        res.status(500).send(err);
      }  else {
        await redis.set('todos',JSON.stringify((rows)))
        res.status(200).send(rows);
      }   
    });
    }
  } catch (error) {
    
  }
 
};

export const addTodo = async (req: Request, res: Response) => {
  const todo = req.body.name;
  if (!todo) {
    res.status(400).send({ message: "Name can not be empty!" });
  } else {
    todoModel.updateTodos(todo, async(err, rows) => {
      if (err) {
        res.status(400).send(err);
      } else {
        await redis.del('todos')
        res.status(200).send({ id: rows.insertId });
      }
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id }: any = req.params;

  todoModel.deleteTodo(id, async(err, rows) => {
    if (err) {
      res.status(500).send(err);
    }
    await redis.del('todos')
    if (rows.hasOwnProperty("affectedRows")) {
      res.status(200).send({ mesage: "Todo deleted successfully!", rows });
    } else {
      res.status(400).send({ mesage: "No such id exists!", rows });
    }
  });
};
