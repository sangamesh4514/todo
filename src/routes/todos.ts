import express from 'express'
import { addTodo, deleteTodo, getTodos } from '../controllers/todos'

const router = express.Router()

router.get('/', getTodos)
router.patch('/', addTodo)
router.delete('/:id', deleteTodo)


export default router