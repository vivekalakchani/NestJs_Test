import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';
import { getTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipes';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTask(@Query(ValidationPipe) filterDto: getTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTasks(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTasks(createTaskDto);
    // console.log('title', title);
    // console.log('description', description);
  }

  @Delete('/:id')
  deleteTasksById(@Param('id') id: string): void {
    this.tasksService.deleteTasksById(id);
  }
  @Patch('/:id/status')
  updateTask(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Task {
    return this.tasksService.updateTask(id, status);
  }
}
