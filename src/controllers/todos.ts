import express, { Request, Response } from 'express'
import * as todoModel from './../models/todos'

export const getTodos = async (req: Request, res: Response) => {
  try {
    let data = await todoModel.getTodos()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const addTodo = async (req: Request, res: Response) => {

  let todo = req.body.name;
  if (!todo) {
    res.status(400).send({ message: "Name can not be empty!" })
  } else {

    try {
      let data = await todoModel.updateTodos(todo)
      res.status(200).send(data)
    } catch (error) {
      res.status(500).send(error)
    }
  }

}

export const deleteTodo = async (req: Request, res: Response) => {
  let id: any = req.params.id
  try {
    let data = await todoModel.deleteTodo(id)
    if(data?.["affectedRows"]){
      res.status(200).send({ "mesage": "Todo deleted successfully!", data })
    }else{
      res.status(400).send({ "mesage": "No such id exists!", data })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}