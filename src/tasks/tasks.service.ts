import { Injectable, NotFoundException } from '@nestjs/common';
//import * as uuid from 'uuid';
//import { CreateTaskDto } from './dto/create-task.dto';
//import { getTasksFilterDto } from './dto/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
// import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // getTask(filterDto: getTasksFilterDto) {}

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  // async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //   return this.taskRepository.createTask(createTaskDto);
  // }

  // async deleteTask(id: number): Promise<void> {
  //   const result = await this.taskRepository.delete(id);
  //   console.log(result);

  //   if (result.affected === 0) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  // }
  // async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
  //   const task = this.getTaskById(id);
  //   (await task).status = status;
  //   (await task).save();
  //   return task;
  // }
}
